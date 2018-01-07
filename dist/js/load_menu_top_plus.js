	//----------------------------------------------------------------------------

	//acción de carga de la sección perfil de usuario

	$('#top_menu_c div:nth-of-type(5)').click(function(){

		$('#wrapper').load('dist/php/load_perfil_user.php');

		$('#load').hide('slow');

	});