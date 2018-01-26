#!/usr/bin/python
# *-* coding: utf-8 *-*
# Author: Thomas Martin <thomas.martin.1@ulaval.ca>
# File: phase.py

## Copyright (c) 2010-2017 Thomas Martin <thomas.martin.1@ulaval.ca>
## 
## This file is part of ORBS
##
## ORBS is free software: you can redistribute it and/or modify it
## under the terms of the GNU General Public License as published by
## the Free Software Foundation, either version 3 of the License, or
## (at your option) any later version.
##
## ORBS is distributed in the hope that it will be useful, but WITHOUT
## ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
## or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public
## License for more details.
## 
## You should have received a copy of the GNU General Public License
## along with ORBS.  If not, see <http://www.gnu.org/licenses/>.

"""
The phase module contains phase processing related classes

Phase processing is generally made on small binned cubes
"""

__author__ = "Thomas Martin"
__licence__ = "Thomas Martin (thomas.martin.1@ulaval.ca)"                      
__docformat__ = 'reStructuredText'
import version
__version__ = version.__version__

import numpy as np
import logging

import orb.fft
import orb.core
import warnings
import orb.utils
import gvar

#################################################
#### CLASS BinnedInterferogramCube ##############
#################################################
class BinnedInterferogramCube(orb.fft.InterferogramCube):

    def compute_phase(self):

        def compute_phase_in_column(col, calib_col, zpd_index, params, base_axis):
            warnings.simplefilter('ignore', RuntimeWarning)
            warnings.simplefilter('ignore', UserWarning)
            warnings.simplefilter('ignore', FutureWarning)
            
            phase_col = np.empty_like(col)
            phase_col.fill(np.nan)
            for ij in range(col.shape[0]):
                interf = orb.fft.Interferogram(
                    col[ij,:],
                    params=params,
                    zpd_index=zpd_index,
                    calib_coeff=calib_col[ij])
                interf.subtract_mean()
                interf = interf.symmetric()
                spectrum = interf.transform()
                if isinstance(spectrum, orb.fft.Spectrum):
                    spectrum = spectrum.interpolate(base_axis, quality=10)                    
                    phase_col[ij,:] = np.copy(spectrum.get_phase().data)
            return phase_col

        calib_map = self.get_calibration_coeff_map()
        base_axis = np.copy(self.get_base_axis().data)
        phase_cube = np.empty(self.shape, dtype=float)
        phase_cube.fill(np.nan)

        job_server, ncpus = self._init_pp_server()
        progress = orb.core.ProgressBar(self.dimx)
        for ii in range(0, self.dimx, ncpus):
                progress.update(
                    ii, info="computing column {}/{}".format(
                        ii, self.dimx))
                if ii + ncpus >= self.dimx:
                    ncpus = self.dimx - ii


                jobs = [(ijob, job_server.submit(
                    compute_phase_in_column, 
                    args=(self[:,ii+ijob,:],
                          calib_map[:,ii+ijob],
                          self.params.zpd_index,
                          self.params.convert(),
                          base_axis),
                    modules=("import logging",
                             "import warnings",
                             "import numpy as np",
                             "import orb.fft")))
                        for ijob in range(ncpus)]

                for ijob, job in jobs:
                    # filtered data is written in place of non filtered data
                    phase_cube[:,ii+ijob,:] = job() 
        progress.end()
        self._close_pp_server(job_server)
    
        return phase_cube

 
#################################################
#### CLASS BinnedPhaseCube ######################
#################################################
class BinnedPhaseCube(orb.core.OCube):

    def get_phase_maps_path(self, suffix=None):
        if suffix is None: suffix = ''       
        else:
            if not isinstance(suffix, str):
                raise TypeError('suffix must be a string')
            suffix = '.' + suffix
        return self._data_path_hdr + 'phase_maps{}.hdf5'.format(suffix)

    def get_phase(self, x, y):
        """Return a phase vector at position x, y

        :param x: x position
        :param y: y position
        """
        return orb.fft.Phase(
            self[x, y, :], self.get_base_axis(), params=self.params)
        
    def polyfit(self, polydeg, coeffs=None, suffix=None):
        """Create phase maps from a polynomial fit of the binned phase cube

        :param polydeg: Degree of the fitting polynomial. Must be >= 0.

        :param coeffs: Used to fix some coefficients to a given
          value. If not None, must be a list of length = deg. set a
          coeff to a np.nan or a None to let the parameter free.

        :param suffix: Phase maps hdf5 file suffix (added before the
          extension .hdf5)
        """
        def fit_phase_in_column(col, deg, coeffs, params, base_axis):
            warnings.simplefilter('ignore', RuntimeWarning)
            coeffs_col = np.empty((col.shape[0], deg + 1), dtype=float)
            coeffs_col.fill(np.nan)
            coeffs_err_col = np.empty((col.shape[0], deg + 1), dtype=float)
            coeffs_err_col.fill(np.nan)
            for ij in range(col.shape[0]):
                _phase = orb.fft.Phase(col[ij,:], base_axis, params)
                try:
                    coeffs_col[ij,:], coeffs_err_col[ij,:] = _phase.polyfit(
                        deg, coeffs=coeffs, return_coeffs=True)
                except orb.utils.err.FitError:
                    logging.debug('fit error')
            return coeffs_col, coeffs_err_col            

        if not isinstance(polydeg, int): raise TypeError('polydeg must be an integer')
        if polydeg < 0: raise ValueError('polydeg must be >= 0')
        
        if coeffs is not None:
            orb.utils.validate.has_len(coeffs, polydeg + 1)
            coeffs = np.array(coeffs, dtype=float) # change None by nan
        
        coeffs_cube = np.empty((self.dimx, self.dimy, polydeg + 1), dtype=float)
        coeffs_cube.fill(np.nan)
        coeffs_err_cube = np.empty((self.dimx, self.dimy, polydeg + 1), dtype=float)
        coeffs_err_cube.fill(np.nan)
            
        base_axis = np.copy(self.get_base_axis().data)

        job_server, ncpus = self._init_pp_server()
        progress = orb.core.ProgressBar(self.dimx)
        for ii in range(0, self.dimx, ncpus):
                progress.update(
                    ii,
                    info="computing column {}/{}".format(ii, self.dimx))
                if ii + ncpus >= self.dimx:
                    ncpus = self.dimx - ii

                jobs = [(ijob, job_server.submit(
                    fit_phase_in_column, 
                    args=(self[:,ii+ijob,:],
                          polydeg, coeffs,
                          self.params.convert(), base_axis),
                    modules=("import logging",
                             "import warnings",
                             "import numpy as np",
                             "import orb.fft",
                             "import orb.utils.err")))
                        for ijob in range(ncpus)]

                for ijob, job in jobs:
                    coeffs_cube[:,ii+ijob,:], coeffs_err_cube[:,ii+ijob,:] = job() 
        progress.end()
        self._close_pp_server(job_server)

        coeffs_err_cube[np.nonzero(coeffs_cube == 0)] = np.nan
        coeffs_cube[np.nonzero(coeffs_cube == 0)] = np.nan
        
        coeffs_cube[:,:,0] = orb.utils.image.unwrap_phase_map0(coeffs_cube[:,:,0])
        coeffs_cube[np.nonzero(coeffs_cube == 0)] = np.nan
        

        phase_maps_path = self.get_phase_maps_path(suffix=suffix)
        with self.open_hdf5(phase_maps_path, 'w') as hdffile:
            self.add_params_to_hdf_file(hdffile)
            hdffile.create_dataset(
                '/calibration_coeff_map',
                data=self.get_calibration_coeff_map())
            hdffile.create_dataset(
                '/cm1_axis',
                data=base_axis)

            for iz in range(coeffs_cube.shape[2]):
                hdffile.create_dataset(
                    '/phase_map_{}'.format(iz),
                    data=coeffs_cube[:,:,iz])
                hdffile.create_dataset(
                    '/phase_map_err_{}'.format(iz),
                    data=coeffs_err_cube[:,:,iz])
        logging.info('phase maps written: {}'.format(phase_maps_path))
            
        return phase_maps_path

    

#################################################
#### CLASS PhaseMaps ############################
#################################################
class PhaseMaps(orb.core.Tools):

    phase_maps = None

    def __init__(self, phase_maps_path,
                 overwrite=False, indexer=None, **kwargs):
        """Initialize PhaseMaps class.

        :param phase_maps_path: path tot the hdf5 file containing the
          phase maps.
      
        :param overwrite: (Optional) If True existing FITS files will
          be overwritten (default False).

        :param indexer: (Optional) Must be a :py:class:`core.Indexer`
          instance. If not None created files can be indexed by this
          instance.    

        :param kwargs: Kwargs are :meth:`core.Tools` properties.
        """
        with self.open_hdf5(phase_maps_path, 'r') as f:
            kwargs['instrument'] = f.attrs['instrument']
    
        orb.core.Tools.__init__(self, **kwargs)
        
        self.overwrite = overwrite
        self.indexer = indexer

        self.dimx_unbinned = self.config['CAM1_DETECTOR_SIZE_X']
        self.dimy_unbinned = self.config['CAM1_DETECTOR_SIZE_Y']

        self.phase_maps = list()
        self.phase_maps_err = list()
        with self.open_hdf5(phase_maps_path, 'r') as f:
            self.phase_maps_path = phase_maps_path
            self.calibration_coeff_map = f['calibration_coeff_map'][:]
            self.axis = f['cm1_axis'][:]
            self.theta_map = orb.utils.spectrum.corr2theta(
                self.calibration_coeff_map)
            
            loaded = False
            iorder = 0
            while not loaded:
                ipm_path ='phase_map_{}'.format(iorder)
                ipm_path_err ='phase_map_err_{}'.format(iorder)
                if ipm_path in f:
                    ipm_mean = f[ipm_path][:]
                    if ipm_path_err in f:
                        ipm_sdev = f[ipm_path_err][:]
                        self.phase_maps.append(ipm_mean)
                        self.phase_maps_err.append(ipm_sdev)
                        
                    else: raise ValueError('Badly formatted phase maps file')
                else:
                    loaded = True
                    continue
                iorder += 1

            if len(self.phase_maps) == 0: raise ValueError('No phase maps in phase map file')

            # add params
            for ikey in f.attrs.keys():
                self.set_param(ikey, f.attrs[ikey])

            
        # detect binning
        self.dimx = self.phase_maps[0].shape[0]
        self.dimy = self.phase_maps[0].shape[1]
        
        binx = self.dimx_unbinned/self.dimx
        biny = self.dimy_unbinned/self.dimy
        if binx != biny: raise StandardError('Binning along x and y axes is different ({} != {})'.format(binx, biny))
        else: self.binning = binx

        logging.info('Phase maps loaded : order {}, shape ({}, {}), binning {}'.format(
            len(self.phase_maps) - 1, self.dimx, self.dimy, self.binning))

        # unbin maps
        self.unbinned_maps = list()
        self.unbinned_maps_err = list()
        
        for iorder in range(len(self.phase_maps)):
            self.unbinned_maps.append(orb.cutils.unbin_image(
                gvar.mean(self.phase_maps[iorder]),
                self.dimx_unbinned, self.dimy_unbinned))
            self.unbinned_maps_err.append(orb.cutils.unbin_image(
                gvar.sdev(self.phase_maps[iorder]),
                self.dimx_unbinned, self.dimy_unbinned))
        
    def _isvalid_order(self, order):
        """Validate order
        
        :param order: Polynomial order
        """
        if not isinstance(order, int): raise TypeError('order must be an integer')
        order = int(order)
        if order in range(len(self.phase_maps)):
            return True
        else:
            raise ValueError('order must be between 0 and {}'.format(len(self.phase_maps)))

    def get_map(self, order):
        """Return map of a given order

        :param order: Polynomial order
        """
        if self._isvalid_order(order):
            return np.copy(self.phase_maps[order])

    def get_map_err(self, order):
        """Return map uncertainty of a given order

        :param order: Polynomial order
        """
        if self._isvalid_order(order):
            return np.copy(self.phase_maps_err[order])

    def get_model_0(self):
        """Return order 0 model as a Scipy.UnivariateSpline instance.

        :return: (original theta vector, model, uncertainty), model
          and uncertainty are returned as UnivariateSpline instances

        """
        _phase_map = self.get_map(0)
        _phase_map_err = self.get_map_err(0)
        
        thetas, model, err = orb.utils.image.fit_map_theta(
            _phase_map,
            _phase_map_err,
            #np.cos(np.deg2rad(self.theta_map)), model is linear with
            # this input but it will be analyzed later
            self.theta_map)

        return thetas, model, err

    def modelize(self):
        """Replace phase maps by their model inplace
        """
        thetas, model, err = self.get_model_0()
        self.phase_maps[0] = model(self.theta_map)

        for iorder in range(1, len(self.phase_maps)):
            self.phase_maps[iorder] = (np.ones_like(self.phase_maps[iorder])
                                       * np.nanmean(self.phase_maps[iorder]))

    def reverse_polarity(self):
        """Add pi to the order 0 phase map to reverse polarity of the
        corrected spectrum.
        """
        self.phase_maps[0] += np.pi

    def get_coeffs(self, x, y, unbin=False):
        """Return coeffs at position x, y in the maps. x, y are binned
        position by default (set unbin to True to get real positions
        on the detector)

        :param x: X position (dectector position)
        :param y: Y position (dectector position)

        :param unbin: If True, positions are unbinned position
          (i.e. real positions on the detector) (default False).
        """
        if unbin:
            orb.utils.validate.index(x, 0, self.dimx_unbinned, clip=False)
            orb.utils.validate.index(y, 0, self.dimy_unbinned, clip=False)
        else:
            orb.utils.validate.index(x, 0, self.dimx, clip=False)
            orb.utils.validate.index(y, 0, self.dimy, clip=False)
        coeffs = list()
        for iorder in range(len(self.phase_maps)):
            if unbin:
                coeffs.append(self.unbinned_maps[iorder][x, y])
            else:
                coeffs.append(self.phase_maps[iorder][x, y])
                
        return coeffs
    
    def get_phase(self, x, y, unbin=False, coeffs=None):
        """Return a phase instance at position x, y in the maps. x, y are
        binned position by default (set unbin to True to get real
        positions on the detector)
        
        :param x: X position (dectector position)
        :param y: Y position (dectector position)

        :param unbin: If True, positions are unbinned position
          (i.e. real positions on the detector) (default False).

        :param coeffs: Used to set some coefficients to a given
          value. If not None, must be a list of length = order. set a
          coeff to a np.nan to use the phase map value.
        """
        _coeffs = self.get_coeffs(x, y, unbin=unbin)
        if coeffs is not None:
            orb.utils.validate.has_len(coeffs, len(self.phase_maps))
            for i in range(len(coeffs)):
                if coeffs[i] is not None:
                    if not np.isnan(coeffs[i]):
                        _coeffs[i] = coeffs[i]
            
        return orb.fft.Phase(
            np.polynomial.polynomial.polyval(
                self.axis, _coeffs).astype(float),
            axis=self.axis, params=self.params)
    

    def unwrap_phase_map_0(self):
        """Unwrap order 0 phase map.


        Phase is defined modulo pi/2. The Unwrapping is a
        reconstruction of the phase so that the distance between two
        neighboor pixels is always less than pi/4. Then the real phase
        pattern can be recovered and fitted easily.
    
        The idea is the same as with np.unwrap() but in 2D, on a
        possibly very noisy map, where a naive 2d unwrapping cannot be
        done.
        """
        self.phase_map_order_0_unwraped = orb.utils.image.unwrap_phase_map0(
            np.copy(self.phase_maps[0]))
        
        # Save unwraped map
        phase_map_path = self._get_phase_map_path(0, phase_map_type='unwraped')

        self.write_fits(phase_map_path,
                        orb.cutils.unbin_image(
                            np.copy(self.phase_map_order_0_unwraped),
                            self.dimx_unbinned,
                            self.dimy_unbinned), 
                        fits_header=self._get_phase_map_header(
                            0, phase_map_type='unwraped'),
                        overwrite=self.overwrite)
        if self.indexer is not None:
            self.indexer['phase_map_unwraped_0'] = phase_map_path