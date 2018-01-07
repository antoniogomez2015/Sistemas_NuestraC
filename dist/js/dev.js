

$(document).ready(function(){

	/*////////////////////////////////////////////////////////////////////////////////////////*/
	//cintillo top del index

		/*////////////////////////////////////////////////////////////////////////////////////////*/
			
			//menú top del usuario del index
			$('#sesion #menu').click(function(){

				$('#load').load('dist/php/load_menu_top_plus.php');			

				$('#load').show('slowDown');

			});

		/*////////////////////////////////////////////////////////////////////////////////////////*/
			
			//menú top de más opciones del index usuario
			$('#user').click(function(){

				$('#load').load('dist/php/load_user_shorts.php',);

				$('#load').show('slowDown');		
				
			});

			//sección de "configurar mi perfil"
			$('')


	/*////////////////////////////////////////////////////////////////////////////////////////*/
	//sección del ID, ó logo del index

		$('#id').click(function(){

			$('#load').load('dist/php/load_entidad_m.php');

			$('#load').show('slowUp');

		});


	/*////////////////////////////////////////////////////////////////////////////////////////*/
	//sección de search ó búsqueda principal del index

		$('#load_main #op #dir').click(function(){

			$('#load').load('dist/php/load_search_dir.php');

			$('#load').show('slowUp');

		});

		$('#load_main #op #esp').click(function(){

			$('#load').load('dist/php/load_index_esp.php');

			$('#load').show('slowUp');

		});

	/*////////////////////////////////////////////////////////////////////////////////////////*/
	//sección de footer ó pie de página del index
	
		$('#footer #help').click(function(){

			$('#load').load('dist/php/load_help.php');

			$('#load').show('slowUp');

		});

		$('#footer #contact').click(function(){

			$('#load').load('dist/php/load_contacto.php');

			$('#load').show('slowUp');

		});

		


});


