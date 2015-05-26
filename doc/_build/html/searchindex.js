Search.setIndex({envversion:46,filenames:["changelog","index","installing_orbs","installing_python","orbs_module","process_module","reduction_faq","reduction_guide"],objects:{"orbs.orbs":{Orbs:[4,3,1,""],Performance:[4,3,1,""],RoadMap:[4,3,1,""],Step:[4,3,1,""]},"orbs.orbs.Orbs":{"__init__":[4,2,1,""],"_get_calibrated_spectrum_cube_path":[4,2,1,""],"_get_calibration_laser_fits_header":[4,2,1,""],"_get_calibration_laser_map":[4,2,1,""],"_get_calibration_laser_map_path":[4,2,1,""],"_get_data_dir":[4,2,1,""],"_get_data_prefix":[4,2,1,""],"_get_flat_phase_map_path":[4,2,1,""],"_get_interfero_list_path":[4,2,1,""],"_get_project_dir":[4,2,1,""],"_get_project_fits_header":[4,2,1,""],"_get_root_data_path_hdr":[4,2,1,""],"_get_standard_spectrum_path":[4,2,1,""],"_init_astrometry":[4,2,1,""],"_init_raw_data_cube":[4,2,1,""],add_missing_frames:[4,2,1,""],calibrate_spectrum:[4,2,1,""],check_bad_frames:[4,2,1,""],compute_alignment_vector:[4,2,1,""],compute_calibration_laser_map:[4,2,1,""],compute_cosmic_ray_map:[4,2,1,""],compute_interferogram:[4,2,1,""],compute_phase:[4,2,1,""],compute_phase_maps:[4,2,1,""],compute_spectrum:[4,2,1,""],config:[4,1,1,""],correct_interferogram:[4,2,1,""],create_bad_frames_vector:[4,2,1,""],detect_stars:[4,2,1,""],export_calibrated_spectrum_cube:[4,2,1,""],export_calibration_laser_map:[4,2,1,""],export_flat_phase_map:[4,2,1,""],export_standard_spectrum:[4,2,1,""],extract_stars_spectrum:[4,2,1,""],get_noise_values:[4,2,1,""],merge_interferograms:[4,2,1,""],merge_interferograms_alt:[4,2,1,""],option_file_path:[4,1,1,""],optionfile:[4,1,1,""],options:[4,1,1,""],overwrite:[4,1,1,""],project_name:[4,1,1,""],set_init_angle:[4,2,1,""],start_reduction:[4,2,1,""],target:[4,1,1,""],targets:[4,1,1,""],transform_cube_B:[4,2,1,""],tuning_parameters:[4,1,1,""]},"orbs.orbs.Performance":{"__init__":[4,2,1,""],get_max_mem:[4,2,1,""],print_stats:[4,2,1,""]},"orbs.orbs.RoadMap":{"__init__":[4,2,1,""],"_str2bool":[4,2,1,""],ROADMAP_STEPS_FILE_NAME:[4,1,1,""],attach:[4,2,1,""],check_road:[4,2,1,""],get_road_len:[4,2,1,""],get_step_func:[4,2,1,""],get_steps_str:[4,2,1,""],print_status:[4,2,1,""],types_dict:[4,1,1,""]},"orbs.orbs.Step":{"__init__":[4,2,1,""],"__weakref__":[4,1,1,""],get_outfiles:[4,2,1,""]},"process.CalibrationLaser":{"_get_calibration_laser_fitparams_header":[5,2,1,""],"_get_calibration_laser_fitparams_path":[5,2,1,""],"_get_calibration_laser_map_header":[5,2,1,""],"_get_calibration_laser_map_path":[5,2,1,""],"_get_calibration_laser_spectrum_frame_header":[5,2,1,""],"_get_calibration_laser_spectrum_frame_path":[5,2,1,""],"_get_calibration_laser_spectrum_list_path":[5,2,1,""],create_calibration_laser_map:[5,2,1,""]},"process.Interferogram":{"_get_corrected_interferogram_frame_header":[5,2,1,""],"_get_corrected_interferogram_frame_path":[5,2,1,""],"_get_corrected_interferogram_list_path":[5,2,1,""],"_get_extracted_star_spectra_header":[5,2,1,""],"_get_extracted_star_spectra_path":[5,2,1,""],"_get_spectrum_frame_header":[5,2,1,""],"_get_spectrum_frame_path":[5,2,1,""],"_get_spectrum_header":[5,2,1,""],"_get_spectrum_list_path":[5,2,1,""],"_get_spectrum_path":[5,2,1,""],"_get_stray_light_vector_header":[5,2,1,""],"_get_stray_light_vector_path":[5,2,1,""],"_get_transmission_vector_header":[5,2,1,""],"_get_transmission_vector_path":[5,2,1,""],compute_phase_coeffs_vector:[5,2,1,""],compute_spectrum:[5,2,1,""],correct_interferogram:[5,2,1,""],create_correction_vectors:[5,2,1,""],extract_stars_spectrum:[5,2,1,""]},"process.InterferogramMerger":{"__init__":[5,2,1,""],"_get_bad_frames_vector_header":[5,2,1,""],"_get_bad_frames_vector_path":[5,2,1,""],"_get_calibration_stars_header":[5,2,1,""],"_get_calibration_stars_path":[5,2,1,""],"_get_deep_frame_header":[5,2,1,""],"_get_deep_frame_path":[5,2,1,""],"_get_energy_map_header":[5,2,1,""],"_get_energy_map_path":[5,2,1,""],"_get_ext_illumination_vector_header":[5,2,1,""],"_get_ext_illumination_vector_path":[5,2,1,""],"_get_extracted_star_spectra_header":[5,2,1,""],"_get_extracted_star_spectra_path":[5,2,1,""],"_get_merged_interfero_frame_header":[5,2,1,""],"_get_merged_interfero_frame_list_path":[5,2,1,""],"_get_merged_interfero_frame_path":[5,2,1,""],"_get_modulation_ratio_header":[5,2,1,""],"_get_modulation_ratio_path":[5,2,1,""],"_get_stars_interfero_frame_header":[5,2,1,""],"_get_stars_interfero_frame_list_path":[5,2,1,""],"_get_stars_interfero_frame_path":[5,2,1,""],"_get_stray_light_vector_header":[5,2,1,""],"_get_stray_light_vector_path":[5,2,1,""],"_get_transformed_interfero_frame_header":[5,2,1,""],"_get_transformed_interfero_frame_list_path":[5,2,1,""],"_get_transformed_interfero_frame_path":[5,2,1,""],"_get_transmission_vector_header":[5,2,1,""],"_get_transmission_vector_path":[5,2,1,""],add_missing_frames:[5,2,1,""],alternative_merge:[5,2,1,""],extract_stars_spectrum:[5,2,1,""],find_alignment:[5,2,1,""],merge:[5,2,1,""],transform:[5,2,1,""]},"process.Phase":{"_get_phase_map_header":[5,2,1,""],"_get_phase_map_path":[5,2,1,""],create_phase_maps:[5,2,1,""],fit_phase_map:[5,2,1,""],smooth_phase_map:[5,2,1,""]},"process.RawData":{"_get_alignment_vector_header":[5,2,1,""],"_get_alignment_vector_path":[5,2,1,""],"_get_cr_map_frame_header":[5,2,1,""],"_get_cr_map_frame_path":[5,2,1,""],"_get_cr_map_list_path":[5,2,1,""],"_get_deep_frame_header":[5,2,1,""],"_get_deep_frame_path":[5,2,1,""],"_get_energy_map_header":[5,2,1,""],"_get_energy_map_path":[5,2,1,""],"_get_hp_map_path":[5,2,1,""],"_get_interfero_frame_header":[5,2,1,""],"_get_interfero_frame_path":[5,2,1,""],"_get_interfero_list_path":[5,2,1,""],"_get_master_header":[5,2,1,""],"_get_master_path":[5,2,1,""],"_load_alignment_vector":[5,2,1,""],"_load_bias":[5,2,1,""],"_load_dark":[5,2,1,""],"_load_flat":[5,2,1,""],add_missing_frames:[5,2,1,""],check_bad_frames:[5,2,1,""],correct:[5,2,1,""],correct_frame:[5,2,1,""],create_alignment_vector:[5,2,1,""],create_cosmic_ray_map:[5,2,1,""],create_hot_pixel_map:[5,2,1,""],get_bias_coeff_from_T:[5,2,1,""],get_dark_coeff_from_T:[5,2,1,""],get_noise_values:[5,2,1,""]},"process.Spectrum":{"_get_calibrated_spectrum_frame_header":[5,2,1,""],"_get_calibrated_spectrum_frame_path":[5,2,1,""],"_get_calibrated_spectrum_header":[5,2,1,""],"_get_calibrated_spectrum_list_path":[5,2,1,""],"_get_calibrated_spectrum_path":[5,2,1,""],"_get_modulation_efficiency_map_header":[5,2,1,""],"_get_modulation_efficiency_map_path":[5,2,1,""],"_get_stars_coords_path":[5,2,1,""],"_update_hdr_wcs":[5,2,1,""],calibrate:[5,2,1,""],get_flux_calibration_vector:[5,2,1,""]},"process.Standard":{"__init__":[5,2,1,""],compute_image_calibration:[5,2,1,""],get_spectrum:[5,2,1,""],read_calspec_fits:[5,2,1,""],read_massey_dat:[5,2,1,""]},orbs:{orbs:[4,0,0,"-"]},process:{CalibrationLaser:[5,3,1,""],Interferogram:[5,3,1,""],InterferogramMerger:[5,3,1,""],Phase:[5,3,1,""],RawData:[5,3,1,""],Spectrum:[5,3,1,""],Standard:[5,3,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","class","Python class"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:method","3":"py:class"},terms:{"0th":[0,5],"0x2ace2813bb90":[],"0x2aebd8758c80":[],"0x2aecddea7b90":[],"0x2b0871e31b90":[],"0x2b0e5be76230":4,"0x2b4e3f0f8b90":[],"0x2b52e5aa5c80":[],"0x2b54ab975b90":[],"0x2b7b82b49b90":[],"0x2b8bb67c9b90":[],"0x2b9ef1384b90":[],"1x1":4,"3rd":5,"3x3":7,"4x4":7,"67_spiomm_r":7,"\u00e9mission":1,"\u00e9tude":1,"__init__":[0,4,5],"__weakref__":4,"_create_list_from_dir":0,"_create_master_fram":[0,4],"_get_alignment_vector_head":5,"_get_alignment_vector_path":5,"_get_bad_frames_vector_head":5,"_get_bad_frames_vector_path":5,"_get_calibrated_spectrum_cube_path":4,"_get_calibrated_spectrum_frame_head":5,"_get_calibrated_spectrum_frame_path":5,"_get_calibrated_spectrum_head":5,"_get_calibrated_spectrum_list_path":5,"_get_calibrated_spectrum_path":5,"_get_calibration_laser_fitparams_head":5,"_get_calibration_laser_fitparams_path":5,"_get_calibration_laser_fits_head":4,"_get_calibration_laser_map":4,"_get_calibration_laser_map_head":5,"_get_calibration_laser_map_path":[4,5],"_get_calibration_laser_spectrum_frame_head":5,"_get_calibration_laser_spectrum_frame_path":5,"_get_calibration_laser_spectrum_list_path":5,"_get_calibration_stars_head":5,"_get_calibration_stars_path":5,"_get_corrected_interferogram_frame_head":5,"_get_corrected_interferogram_frame_path":5,"_get_corrected_interferogram_list_path":5,"_get_cr_map_frame_head":5,"_get_cr_map_frame_path":5,"_get_cr_map_list_path":5,"_get_data_dir":4,"_get_data_prefix":4,"_get_deep_frame_head":5,"_get_deep_frame_path":5,"_get_energy_map_head":5,"_get_energy_map_path":5,"_get_ext_illumination_vector_head":5,"_get_ext_illumination_vector_path":5,"_get_extracted_star_spectra_head":5,"_get_extracted_star_spectra_path":5,"_get_flat_phase_map_path":4,"_get_guess_matrix_head":[],"_get_guess_matrix_path":[],"_get_hp_map_path":5,"_get_interfero_frame_head":5,"_get_interfero_frame_path":5,"_get_interfero_list_path":[4,5],"_get_master_head":5,"_get_master_path":5,"_get_merged_interfero_frame_head":5,"_get_merged_interfero_frame_list_path":5,"_get_merged_interfero_frame_path":5,"_get_modulation_efficiency_map_head":5,"_get_modulation_efficiency_map_path":5,"_get_modulation_ratio_head":5,"_get_modulation_ratio_path":5,"_get_phase_map_head":5,"_get_phase_map_path":5,"_get_project_dir":4,"_get_project_fits_head":4,"_get_root_data_path_hdr":4,"_get_spectrum_frame_head":5,"_get_spectrum_frame_path":5,"_get_spectrum_head":5,"_get_spectrum_list_path":5,"_get_spectrum_path":5,"_get_standard_spectrum_path":4,"_get_stars_coords_path":5,"_get_stars_interfero_frame_head":5,"_get_stars_interfero_frame_list_path":5,"_get_stars_interfero_frame_path":5,"_get_stray_light_vector_head":5,"_get_stray_light_vector_path":5,"_get_transformed_interfero_frame_head":5,"_get_transformed_interfero_frame_list_path":5,"_get_transformed_interfero_frame_path":5,"_get_transmission_vector_head":5,"_get_transmission_vector_path":5,"_get_tuning_paramet":[0,4,5],"_init_astrometri":4,"_init_raw_data_cub":4,"_label_reduce_calibr":[],"_load_alignment_vector":5,"_load_bia":5,"_load_dark":5,"_load_flat":[4,5],"_reduc":[],"_str2bool":4,"_update_hdr_wc":5,"_write_fit":0,"boolean":4,"byte":4,"case":[0,4,5,7],"class":[],"default":[0,4,5,7],"donn\u00e9":7,"export":[4,6],"final":[0,4],"float":4,"import":[],"int":4,"long":[0,1,7],"m\u00e9gantic":1,"qu\u00e9bec":1,"r\u00e9duction":[1,7],"return":[0,4,5],"spectrom\u00e8tr":1,"true":[4,5],"try":[3,5],"while":[5,7],about:[4,5,7],abov:[0,4,5,7],absolut:[4,5,7],absolutli:0,absorpt:[4,5],access:[],account:[0,4,5],achiev:[0,5,7],acquir:7,activ:[4,5],activation_energi:5,add:[0,4,5,6,7],add_frameb:[4,5],add_missing_fram:[0,4,5],addit:0,adjac:5,adjust:[4,7],adu:5,advantag:0,affect:[0,5],after:[0,5,7],again:[0,7],ago:0,aim:5,airmass:[4,5],alias:7,alignment_coeff:5,alignment_vector_path:5,all:[0,1,3,4,5,6,7],allpixel:5,alon:[],along:[4,5,7],alreadi:[0,3,4,5],also:[0,1,4,5,6,7],alt_merg:[0,4],alternative_merg:[0,4,5],alwai:[0,3],amp1:5,amp2:5,amp3:5,amplitud:7,analysi:4,angl:[0,4,5,7],ani:[0,1,2,3,4,5,6,7],anoth:[0,7],anymor:0,anyth:[5,7],aper_coeff:[4,5],aperture_photometri:[0,4,5],apod:[],apodization_funct:[4,5],append:5,appli:[0,5],apt:3,arc:[1,4],architectur:[],arcmin:5,arcminut:5,arcsec:[4,5],arcsecond:[4,5],area:5,arg:4,argument:4,around:[0,4,5,7],arrai:[4,5],artefact:0,ask:7,assert:0,associ:0,assum:5,astophys:0,astrolib:0,astrometr:[0,7],astronom:[1,4,5,7],astrophys:[0,7],asymmetr:7,attach:[4,7],attribut:4,author:5,auto_phas:[4,5],autodetect:4,automat:[4,5,7],automaticali:5,avail:[0,7],averag:[0,4,5],avoid:[0,4,5,7],avsigclip:[4,5],axi:[4,5,7],back:0,backend:3,bad_fram:4,bad_frames_list:4,bad_frames_vector:5,balanc:[4,5],balanced_cam:4,ball:3,band:[4,5],barthann:[],bartlett:[],basic:0,beacus:5,becaus:[0,4,5,7],becom:[4,5,7],been:[0,3,4,5,7],befor:[0,1,4,5],begin:[0,4],behaviour:0,below:[0,3],best:[0,5,7],beta:[4,5],between:[0,4,5,7],bias:0,bias_calib_param:4,bias_calib_param_a:0,bias_calib_param_b:0,bias_calibration_param:5,bias_imag:5,bias_level:[4,5],bias_list_path:5,bias_path:5,bias_path_1:4,bias_path_2:4,big:[0,4],bin:[0,2,4,5,6],bin_a:5,bin_b:5,bin_cam_1:4,bin_cam_2:4,bincam1:[0,4],bincam2:[0,4],binoculair:1,binocular:0,blabla:[],blackman:[],blackmanharri:[],bohman:[],bool:4,both:[0,4,5,7],box:[0,5],box_siz:[0,4,5],box_size_coeff:[0,4],bug:0,build:3,calcul:[4,5,7],calib:7,calib_map:[],calib_nm_las:4,calib_ord:4,calib_path_1:4,calib_path_2:4,calib_step_s:4,calibmap:[4,7],calibrate_spectrum:[0,4],calibrated_param:5,calibration_laser_head:5,calibration_laser_map:7,calibration_laser_map_path:[4,5],calibrationlas:[],call:[0,4,7],calspec:[0,5],cam1:[0,7],cam1_detector_size_i:0,cam1_detector_size_x:0,cam1_scal:4,cam2_detector_size_i:0,cam2_detector_size_x:0,cam:4,camera_numb:4,can:[],canada:1,cannot:[0,4,5],capabl:0,care:[5,7],careful:0,catalog:7,catalogu:[0,4],caus:[4,5],ccd:[0,5],ccd_temp:5,celesti:7,celsiu:5,center:[0,4,5,7],central:[0,5],certain:4,certainli:[1,7],chanc:4,chang:[0,4,5,6,7],channel:[5,7],charact:5,character:7,check:[0,3,4,5,7],check_bad_fram:[4,5],check_road:4,chi:0,children:4,chip_index:[0,5],choic:0,choos:[],choosen:[0,4],chosen:7,classic:[],clean:[0,7],cleaner:0,clear:5,clip:0,cloud:[0,4,5],cluster:0,code:[],coeff:5,coeffic:5,coeffici:[0,4,5],coefficien:5,collect:[0,4,5],colum:5,column:5,come:[0,4,5],comfort:7,comment:[5,7],commentari:4,common:0,compil:3,complet:[0,4,5,7],completli:0,complex:[4,5],compute_alignment_paramet:5,compute_alignment_vector:4,compute_calibration_laser_map:4,compute_calibration_map:[],compute_cosmic_ray_map:4,compute_ext_light:5,compute_image_calibr:5,compute_interferogram:4,compute_phas:4,compute_phase_coeffs_vector:[0,5],compute_phase_map:4,compute_spectrum:[0,4,5],compute_step_s:[],concept:[],conceptu:0,config:[0,4,5],config_file_nam:[4,5],configur:[0,4,7],confis:0,connect:[0,7],conserv:0,consid:[0,4,5,7],consist:7,constant:[],consumpt:0,conta:4,contain:[0,4,5,6,7],continnum:0,continnum_spiomm_r:7,conveni:5,convert:[4,5],convolut:[0,7],coord:0,coordin:[0,3,5,7],correct_filt:[0,5],correct_fram:[0,5],correct_interferogram:[4,5],correct_spectrum:0,correct_wc:5,correctli:[0,5],correspond:[0,4,5,7],could:[4,5],count:[4,5],coupl:0,cover:[0,4,5],cr_map_list_path:5,cr_map_path:5,creat:[],create_alignment_vector:[4,5],create_bad_frames_vector:[0,4],create_calibration_laser_map:[0,4,5],create_correction_funct:[],create_correction_vector:[0,4,5],create_cosmic_ray_map:[0,4,5],create_hot_pixel_map:5,create_interferogram:0,create_master_fram:5,create_phase_map:[0,4,5],create_stars_cub:5,creation:[],cube:[],cube_a_project_head:5,cube_b_project_head:5,current:[4,5,7],curv:0,cutil:[0,3],dark_activation_energi:[4,5],dark_calib_param_a:0,dark_calib_param_b:0,dark_calib_param_c:0,dark_current_level:[4,5],dark_current_level_1:5,dark_current_level_2:5,dark_imag:5,dark_int_tim:5,dark_list_path:5,dark_path:5,dark_path_1:4,dark_path_2:4,dark_tim:4,dat:5,data_2012_06:7,data_2012_11:[],data_fram:0,data_kind:4,data_prefix:5,databas:0,date:4,debian:3,dec:[0,4,7],decreas:0,deduc:0,deep:[0,4,5],deep_frame_path:5,deepli:5,defin:[0,4,5,7],definit:4,definitli:0,deform:7,deliv:5,dep:3,depend:[0,4,5,7],deriv:0,describ:[4,5,7],descript:[],design:[0,1,7],desir:[0,4,7],detail:[0,1,4],detect_stack:4,detect_star:[0,4],detect_star_nb:4,detector:0,dev:3,develop:[0,3],deviant:0,deviat:5,dictionari:[4,5],differ:[0,4,5,6,7],difficult:7,difficulti:7,diffus:5,dimens:[4,5],dirbia1:[4,7],dirbia2:[4,7],dircal1:[4,7],dircal2:4,dircam1:[4,7],dircam2:[4,7],dirdrk1:[0,4,7],dirdrk2:[0,4,7],directli:[0,7],directori:[0,3,4,7],dirflt1:[4,7],dirflt2:[4,7],dirflt:4,disalign:[0,4,5],disk:0,dispers:7,displac:5,displai:[0,4,7],distord:0,distribut:0,distutil:3,divid:[4,5,7],doc:[0,3],document:[],doe:[0,4,5,7],doesn:7,don:[3,7],done:[0,4,5,7],download:[2,3],dramat:0,ds9:7,dstack:0,due:[0,5],dure:[0,4,5,7],each:[0,4,5,6,7],earli:0,easili:0,edg:[5,7],edit:4,edu:0,effect:5,effici:[0,4,5],either:[4,6],elimin:0,els:5,elsewher:5,emiss:[0,4,5],empti:5,enabl:0,end:[4,5,6,7],energi:[0,4,5,7],enough:[0,4,5],ensur:[0,7],enter:[0,4],entir:0,equal:[5,7],equival:7,erg:5,err:5,error:[0,4,5,7],especi:[0,4,5],essenti:3,essentiel:[],estim:4,etc:[0,6,7],evalu:5,even:[0,4,5,7],everi:[0,4],everyth:[5,7],everywher:[4,5],exact:[0,7],exactli:7,exampl:[4,5,7],except:7,execut:4,exist:[0,4,5],exp_tim:[4,5],expand:5,expect:7,experi:1,explain:[],explan:0,explanatori:[],export_calibrated_spectrum_cub:4,export_calibration_laser_map:4,export_flat_phase_map:4,export_standard_spectrum:4,exposit:[4,5,7],exposition_tim:5,ext_illumin:4,ext_illumination_vector_path:5,extend:0,extern:[0,4,5],extract:[0,4,5,7],extract_stars_spectrum:[0,4,5],fact:0,factor:[5,7],fail:0,faint:0,fall:7,fals:[0,4,5],faq:[],far:[0,4,5],fast:[0,4,5],fast_init:4,faster:[0,4,7],feel:7,few:0,fiel:0,field:[],field_of_view:4,field_of_view_2:4,figur:7,file_path:5,files_list:7,fill:5,filter:[0,4,5,7],filter_:7,filter_correct:[4,5],filter_file_path:5,filter_max:5,filter_min:5,filter_nam:[4,5],find:[0,1,5],find_align:[0,4,5],first:[0,1,3,4,5,7],fit_gaussian2d:0,fit_ord:5,fit_phase_map:[0,5],fit_stars_in_cub:5,fit_stars_in_fram:[0,5],fix:[0,5],flambda:[0,5],flat:[],flat_cub:[4,5],flat_int_tim:5,flat_list_path:5,flat_path:5,flat_path_1:4,flat_path_2:4,flat_phase_map:7,flat_smooth_deg:[4,5],flat_spectrum_path:[4,5],flip:5,flux_calibration_vector:5,fold:[4,5,7],folder:[],follow:[3,4,7],forc:4,forget:7,form:0,format:7,formul:7,formula:[5,7],forth:0,found:[0,4,7],fourier:[5,7],fov:5,fov_a:5,frac:[],frame_index:5,frame_temp:5,franc:1,freq1:5,freq2:5,freq3:5,frequenc:[4,5],fring:[0,4,5],from:[],full_precis:0,full_reduct:0,func:4,further:[0,5],fwhm:[0,4,5,7],fwhm_arc:5,fwhm_arc_a:5,gain:0,galaxi:0,gaussian:[0,4,5,7],gaussian_array2d:0,gener:[0,3,5,7],geometr:0,get:[],get_bias_coeff_from_t:5,get_calibration_laser_spectrum:[4,5],get_corrected_wc:0,get_dark_coeff_from_t:5,get_flux_calibration_vector:[0,5],get_lr_phas:0,get_max_mem:4,get_noise_valu:[4,5],get_outfil:4,get_road_len:4,get_spectrum:5,get_step_func:4,get_steps_str:4,gfortran:3,ginga:3,give:[0,4,5,7],given:[0,3,4,5,7],goe:5,good:[0,3,4,5,7],greater:5,ground:[4,5],gtk2:3,gtk:3,guess:[0,5],ham:[],handl:[0,3],hann:[],have:[],hawaii:1,hd74721:7,hd74721_2:[],hd74721_spiomm_r:7,hdr:5,headach:7,header:[],help:[0,1,3,4,5],hene:7,here:[1,3,6,7],high:[4,5],higher:[0,4,5],hii:0,home:[6,7],homogen:[4,5],hot:[0,5],hour:4,hour_ut:4,how:[],hp_map_path:5,html:3,http:[0,3],idea:[0,4],identifi:5,illumin:5,illuminaton:5,image_list_path:5,image_list_path_1:4,image_list_path_2:4,image_list_path_a:5,image_list_path_b:5,image_mod:[0,5],images_list_path:5,imageur:1,immedi:7,implement:[0,4,5],imposs:0,improv:0,includ:5,incom:5,incompat:5,indent:4,independ:7,independantli:[4,5],index:[0,1,4,5,7],infil:4,inform:[0,1,5,7],init:[0,4],init_angl:[4,5],init_di:[4,5],init_dx:[4,5],init_fwhm:4,init_fwhm_arc:5,initi:[4,5],initialis:4,input:[0,4],insid:3,inspir:0,instanc:[4,5],instead:[0,4,5,7],instruct:3,instrument:[0,1,4,7],instrument_nam:0,integ:4,intens:[0,4,5],intent:[0,4,5],interfac:4,interferogram_length:5,interferogrammerg:[],interferomet:5,interferometr:[0,7],internet:[0,7],interp_ord:[4,5],interpol:[0,4,5,7],iraf:0,iregular:0,iri:0,isol:5,itself:[0,4,5,7],job:0,jump:7,just:[0,3,5,7],keep:[0,5],kept:0,kernel:[0,5],keyword:[],kind:[4,5,7],know:[0,1,7],knowm:0,known:7,kwarg:[4,5],lack:7,lambda_:[],larg:[1,4],larger:[0,1],lase:7,laser:[],laser_non:7,last:[0,3,7],latest:3,latter:[],lauch:0,launch:[0,7],least:[4,7],left:[],length:[4,5],less:[0,4],letter:5,level:[0,4,5],libatla:3,librari:[0,3],light:[0,4,5],like:[0,5,6,7],line:[0,4,5,6,7],linear:[4,5],link:[2,6],list:[],littl:[],load:[4,5],load_star_list:5,local:6,locat:[0,2,4,5],logfil:5,logfile_nam:5,login:6,logout:6,longer:0,look:[0,1],loss:[5,7],lot:[0,5,6,7],low:[0,4,5],lower:[4,5],mac:[],made:[0,4,7],mai:[0,1,4,5],major:7,make:[0,5,7],mani:7,map_0:5,martin:5,massei:[0,5],master_bia:5,master_bias_fram:5,master_bias_level:5,master_bias_temp:5,master_dark:5,master_dark_fram:5,master_dark_level:5,master_dark_temp:5,master_flat:5,math:[],mathemat:7,matlplotlib:3,matplotlib:3,matrix:[],max:[0,4],maximum:[0,4,7],mayb:[],mean:[0,4,5],mean_flux:5,mean_vector:5,measur:7,median:[0,4,5],meet:0,memori:4,merge_interferogram:4,merge_interferograms_alt:4,messag:[4,7],meth:5,method:[0,4,5],might:[],min:[0,4],min_coeff:5,min_star_numb:4,minim:[5,7],minimum:[3,4,5,7],minmax:[4,5],minut:[1,4],mirror:[4,5],miss:5,mission:0,mix:7,model:7,modfi:0,modifi:[0,4,6],modulation_ratio_path:5,module_nam:3,modulo:[0,5],moffat:[4,5],moffat_beta:[4,5],monochromat:5,mont:1,moon:[4,5],more:[0,4,5,7],most:[0,5,7],mostli:5,move:[0,4,5],much:[0,4],multi_fit:0,multipl:7,multipli:[0,4,5,7],multpili:0,multpli:0,must:[0,3,4,5,7],mutipl:0,n_phase:[4,5],name:[0,4,5,7],nan:[0,4,5],naylor:7,ndimag:0,nearli:[0,7],necessari:7,need:[0,1,3,4,6,7],neg:[0,5],negative_valu:5,neighbour:[0,5],neighbourhood:0,nescessari:[0,5],next:4,night:[4,5],nm_laser:5,no_log:5,no_ski:4,no_star:4,nois:[0,4,5,7],noisi:[0,4,5],non:[4,5],none:[4,5],nor:[4,7],normal:[0,5],norton_b:0,noski:4,nostar:[0,4],note:[0,4,5,7],now:[0,3,7],nth:5,number:[0,4,5,7],nuttal:[],oac:0,object:[0,1,4,5,7],object_nam:4,obs_dat:4,obsdat:4,observ:[0,4,5,7],observatoir:1,obtain:[0,1,4,5,7],off:[4,5],offer:4,old:[0,3],onc:[0,2,3,7],onli:[],onto:[5,7],opd:5,open:[],oper:[],opt:[4,6,7],optcreat:[2,3,4],optic:5,optim_dark_cam1:4,optim_dark_cam2:4,optimize_dark_coeff:5,option:[],option_fil:[],option_file_path:[0,4],optionfil:[0,4],order:[0,3,4,5,7],org:[0,3],origin:[0,4,5,7],orion:0,oru:0,other:[],ouput:5,our:7,out:[4,5],outfil:4,outil:1,output:[],outsid:0,over:[],overal:0,overdetect:0,overestim:[4,7],overscan:7,overwritten:[4,5],own:[0,4,7],packag:[2,3,4],pad:5,page:[1,3],paramat:0,parameter_nam:[0,4,5],paran:5,parenthesi:3,part:[0,3,4,5,7],particular:[0,4,7],parzen:[],path:[0,4,5,6,7],pattern:[0,4,5],pdf:[],peopl:7,percent:[4,5],percentag:5,perfectli:0,perform:[],period:5,phapath:[4,7],phase_coeff:[4,5],phase_cub:[4,5],phase_fit_deg:[0,4],phase_map:5,phase_map_0_path:5,phase_map_path:[4,5],phase_map_typ:5,photometr:[],photon:[4,5],pip:3,pipelin:3,pix_size_a:5,pix_size_b:5,pix_size_cam1:4,pix_size_cam2:4,pixel:[0,4,5,7],place:[0,1],plan:7,plane:[0,5],pleas:5,point:[0,4,5,7],polar:0,polyfit_deg:[4,5],polynomi:[0,4,5],port:4,posit:[0,4,5,7],possibl:[0,4,5,6,7],pour:1,power:5,pre:5,preced:[4,5],precomput:[0,5],prefer:7,prefix:4,present:7,previous:0,prim_surf:5,primari:5,print:[0,4,5],print_alignment_coeff:[],print_stat:4,print_statu:4,prior:0,prioriti:5,problem:[0,1,7],procedur:[0,4,5,7],process_nam:4,product:0,profil:[5,6],profile_nam:5,program:[],project:[4,5,7],project_head:5,project_nam:4,properti:[4,5],proport:5,propos:0,protect:5,prove:7,provid:[4,5],psf:[4,5],psf_profil:4,pure:[5,7],purer:7,purest:7,purpos:[0,4,7],put:7,pyfit:[],python:[],pywc:[],pyx:[0,3],quadrant:[0,4],qualiti:5,queri:7,quickli:7,radiu:[0,4,5],raie:1,rais:0,rang:5,rap:[4,5],ratio:5,raw:[0,4,5,7],rawdata:[],read:[0,4,5,7],read_calspec_fit:5,read_massey_dat:5,readi:[0,4,5,7],readout:[4,5],readout_nois:[4,5],readout_noise_1:5,readout_noise_2:5,real:[0,5,7],reason:[4,5],rebuild:3,recent:7,recommand:0,recommend:[2,7],record:[0,4,5,7],recov:0,redo:0,reduc:[],reduct:[],reduction_script:[],refer:[4,5,7],reflect:[0,4,5],refract:0,region:[0,5],regular:[0,5,7],regularli:7,reject:[0,4,5],rel:[4,5],relat:[4,7],releas:[0,3],reli:[0,7],reliabl:[4,5],rememb:[0,5],remov:[0,4,5],replac:[0,5],repres:5,request:7,requir:[],rescal:[0,5],residu:[0,5],residual_map:5,residual_map_path:5,resiz:5,resolut:[5,7],restart:7,restor:4,result:[0,4,5,7],resum:[0,7],retri:0,retriev:0,return_fwhm_pix:4,return_temperatur:5,rid:0,right:[],ring:0,road:[],roadmap_step:[],roadmap_steps_file_nam:4,robust:0,rollxz:0,rollyz:0,root:[4,7],rotat:[0,5],rough:[0,4,5],routin:[0,3,4,5],run:[0,2,3,4],safe:4,same:[0,4,5,7],sampl:7,satellit:0,satur:[4,5],saturation_threshold:4,save:[0,4,5],save_as_quad:4,scale:[0,4],scan:7,scienc:7,scipi:[],screen:7,search:[0,1],sec:4,second:5,section:[5,7],see:[0,3,4,5,6,7],seem:0,seen:5,self:0,separ:5,sepctrum:4,sequenc:[0,7],set:[0,3,4,5,7],set_init_angl:4,setup:3,setuptool:3,shape:[0,5,7],share:0,shift:[0,4,5],show:7,side:[4,5],sigclip:[4,5],sigma:0,silent:4,silent_init:5,simpl:[],simpli:[0,2,3,5,7],simplifi:0,simul:0,sinc:[4,5,7],single1:[0,4,7],single2:[0,4,7],single_reduct:0,sinusoid:5,sitlamin:7,sitord:7,size:[],size_coeff:[],skip:[0,4],sky_transmission_vector_path:5,slower:[4,5],small:[0,5],smooth_deg:5,smooth_phase_map:[0,5],smooth_vector:[4,5],smoother:[0,4,5,7],smoothing_deg:[0,4,5],snr:[0,4,5,7],softwar:[0,1],some:[0,1,4,5,7],somehow:0,someth:5,sometim:7,sort:[4,5],sourc:[],space:[0,5,7],special:[0,4,5,7],specif:[0,5],specifi:5,spectal:5,spectra:[0,1,4,5,7],spectral:[],spectral_calibr:[4,5],spectralcub:0,spectrophotometr:5,spectrum_cube_path:5,spedart:[0,4],speexpt:[4,7],speordr:[4,7],spestep:[4,7],spestnb:[4,7],spiomm_r:[5,7],spxx:5,squar:0,standalon:0,standard:[],standard_head:5,standard_nam:4,standard_path:4,standard_spectrum:7,star_list_path:[4,5],star_list_path_1:4,star_list_path_2:4,star_list_path_a:5,starlist1:4,starlist2:4,stars_cub:5,stars_fwhm_arc:4,stars_fwhm_pix:5,start_reduct:[0,4],start_step:4,statist:4,statu:[0,4,7],std:5,std_coord:5,std_name:5,std_spectrum_path:5,std_tabl:[0,7],stdname:[0,4,7],stdpath:[0,4,7],steep:0,step_nam:4,step_nb:5,step_numb:[4,5],still:0,stop:5,store:[4,5,7],str:4,strai:[0,4,5],stray_light_vector_path:5,string:4,strongest:7,stsci:0,stsda:0,substract:5,subtract:[5,7],sudo:[2,3,6],suit:0,sum:0,sun:[4,5],suppress:[0,5],sure:5,surfac:5,surface_valu:0,symbol:[2,6],symetr:5,symetri:4,symmetr:[0,7],symmetri:[0,5],syntax:[4,7],system:[3,6,7],tabl:[],take:[0,5],taken:[0,4,5,7],tar:3,tar_nam:3,target:[0,4,7],target_dec:4,target_i:4,target_ra:4,target_x:4,targetd:[0,4,7],targeti:[0,4,7],targetr:[0,4,7],targetx:[0,4,7],telescop:1,temp:[0,5],temp_data_:5,temperatur:[0,5],tempread:0,term:5,test:0,text:7,than:[0,4,5,7],thei:[0,4,7],them:[0,7],theoret:[0,5],therefor:5,thi:[0,1,3,4,5,6,7],thoma:[5,7],those:[0,4,5,7],three:0,threshold:[0,4,5],through:[3,5],throught:5,thu:[0,4,5,7],tilt:0,time:[0,4,5,7],tip:0,togeth:[0,5],too:[0,4,5],tool:[0,4,5],track:[4,5],trade:7,transcript:0,transform_a_to_b:0,transform_cube_b:[0,4],transform_fram:[0,5],transform_interferogram:[0,4,5],transiss:[4,5],transit:[0,4,5],translat:0,transmission_vector_path:5,transpar:7,treat:4,treatment:0,tri:[],try_catalogu:4,trycat:[0,4],tunabl:0,tuning_paramet:[4,5],tupl:5,twice:4,two:[0,4,5,6,7],type:[4,5,7],types_dict:4,typic:7,ubuntu:[1,3],ulav:5,unapod:[5,7],unbalanc:5,uncalibr:0,uncompress:[2,3],uncorrect:4,underestim:7,understand:1,uniti:[],unix:[6,7],unpack:[],unpredict:7,unreli:0,unstack:0,untar:3,updat:[],upgrad:[0,3],usa:1,usag:[],user:[],usr:[2,6],util:[0,4,5],valid:7,valu:[0,4,5,7],vari:[4,5],variabl:[4,5],variat:[0,4,5],veloc:7,ver:0,verbos:5,veri:[0,7],version:[0,1,3,4],view:[1,4,5],virtual:[0,5],virtualenv:3,visibl:1,wai:[0,4,6,7],walk:5,want:[],warn:[0,4,7],warning_ratio:4,wave_calib:[0,4,7],wavelength:[],wavelength_calibr:[],wcs_hdr:5,wcs_header:5,weak:4,weight:[0,4,5],well:[0,4,5],what:[0,1,7],when:[0,4,5,7],where:[0,7],wherev:2,which:[0,3,4,5,7],white:7,whole:[0,1,4,5],widenhorn:5,window:[0,5,7],window_typ:5,wing:[4,5],within:[],without:[0,4,5,7],work:[1,3,7],world:3,would:[0,7],wrap:0,wrapper:4,write:[0,4],write_fit:0,written:[0,3,7],www:0,xml:[0,4,7],xzvf:3,you:[],your:[],yyyi:4,z_coeff:[4,5],z_rang:[4,5],zdp:[4,5],zeroth:[0,4,5],zhich:[],zoom:0,zpd:[0,4,5],zpd_shift:5},titles:["Changelog","ORBS Documentation","Installing Orbs","Installing Python","Orbs module","Process module","ORBS Reduction FAQ","ORBS Reduction Guide"],titleterms:{"class":[4,5],"function":0,"import":[],"new":0,access:6,administr:6,algorithm:0,align:0,altern:0,apertur:0,apod:7,astrometri:0,astropi:0,autom:[],bad:0,base:0,better:0,bia:[0,7],bottleneck:3,calibr:[0,7],calibrationlas:5,cam2:0,camera:0,can:6,cfht:0,changelog:[0,1],choos:7,classic:7,code:1,combin:0,command:[0,6,7],comput:[0,7],concept:7,content:[1,3,4,5,6,7],continuum:7,control:[],core:[0,7],corect:0,correct:[0,7],cosmic:0,creat:[],creation:7,cube:7,cython:[0,3],dark:[0,7],data:[0,7],degre:0,detect:0,determin:0,document:[0,1],enhanc:0,faq:6,fft:0,field:7,file:[0,7],fit:0,flat:7,flux:0,folder:7,frame:0,from:7,full:0,get:[],guid:[1,7],have:6,header:7,how:[6,7],imag:0,indic:1,instal:[1,2,3],integr:0,interferogram:[0,5],interferogrammerg:5,keyword:0,laser:7,list:7,log:7,manag:0,map:[0,7],mask:0,master:0,merg:0,might:7,minor:0,miscellan:0,mode:0,modif:0,modul:[0,3,4,5],multi:0,numpi:3,onli:6,oper:7,optim:0,option:[0,7],orb:[0,1,2,3,4,6,7],orc:[0,7],other:7,output:7,over:[],overwrit:0,parallel:3,paramet:[0,7],pass:0,perform:4,phase:[0,5,7],photometr:7,photometri:0,prebin:0,precis:0,process:[0,5,7],pyfit:3,python:3,pywc:3,quick:[],rai:0,rawdata:5,reduc:7,reduct:[1,6,7],requir:[0,7],revers:0,right:[6,7],road:7,roadmap:[0,4],scipi:3,script:0,simpl:6,simplif:0,singl:0,sitel:[0,7],size:7,sky:0,smooth:0,sourc:7,spectral:[0,7],spectrum:[0,5],speed:0,spiomm:0,stabl:0,standard:[5,7],star:[0,7],start:[0,7],step:[0,4,7],strang:0,summari:7,tabl:1,temporari:7,tkinter:3,transform:0,transmiss:0,tune:0,unpack:2,updat:0,user:6,usno:0,variou:0,vector:0,viewer:3,want:7,wavelength:7,wavenumb:[0,7],welcom:1,why:7,you:[6,7],your:7,zero:0}})