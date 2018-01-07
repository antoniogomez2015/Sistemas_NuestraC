
//accioón para cargar el head del perfil del usuario directo
	+function(){

		$('#user_p').load('dist/php/load_user_head.php');

		//$('#userF').load('dist/php/load_u_footer.php');

	}();

	+function(){		

		$('#userF2').load('dist/php/load_u_footer.php');

	}();


	//acción para volver al panel del perfil de usuario
	$('#datos_p #back').click(function(){

		$('#wrapper').load('dist/php/load_perfil_user.php');

		$('#load').hide('slow');

	});

	//acción para editar datos personales en el perfil del usuario
	$('#datos_p #ev').click(function(){

		$('#wrapper').load('dist/php/load_user_edit_dp.php');

		//$('#load').hide('slow');

	});

	