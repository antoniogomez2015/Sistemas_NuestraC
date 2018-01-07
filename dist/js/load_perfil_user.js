	
	/*///////////////////////////////////////////////////////////////////////////////////////*/

	//loads comportamientos para diferentes dispositivos

	if(screen.width <= 380){

		+function(){

			$('#user_head').load('dist/php/load_user_head.php');			

		}();

		+function(){
			
			$('#userF').load('dist/php/load_u_footer.php');

		}();
		
		$('#s_mb #inicio').click(function(){

			location.reload();
			
		});		

		$('#sum_c_r').click(function(){

			$('#wrapper').load('dist/php/load_cal_c_prog.php');

		});

		$('#sum_c_p').click(function(){

			$('#wrapper').load('dist/php/load_cal_c_pag.php');

		});
		
		$('#dp').click(function(){

			$('#wrapper').load('dist/php/load_perfil_user_dp.php');

		});

		$('#mi_h_m').click(function(){

			$('#wrapper').load('dist/php/load_perfil_user_inf_m.php');

		});

		$('#cal_c_r').click(function(){

			$('#wrapper').load('dist/php/load_perfil_user_cal_c_r.php');

		});

	}else if(screen.width > 380 && screen.width <= 768){

		+function(){

			$('#user_head').load('dist/php/load_user_head.php');

		}();

		$('#dp').click(function(){

			$('#wrapper').load('dist/php/load_search_cat.php');

		});

		$('#mi_h_m').click(function(){

			$('#wrapper').load('dist/php/load_search_cat.php');

		});

		$('#cal_c_r').click(function(){

			$('#wrapper').load('dist/php/load_search_cat.php');

		});

	}else if(screen.width > 1280){

		+function(){

			$('#user_head').load('dist/php/load_user_head.php');

		}();

		$('#dp').click(function(){

			$('#user_set_load').load('dist/php/load_search_cat.php');

		});

		$('#mi_h_m').click(function(){

			$('#user_set_load').load('dist/php/load_search_cat.php');

		});

		$('#cal_c_r').click(function(){

			$('#user_set_load').load('dist/php/load_search_cat.php');

		});


	}