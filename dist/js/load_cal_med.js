//----------------------------------------------------------------------------

	//acción de cerrar ventana modal

	$('#rUserL').click(function(){

		$('#load').load('dist/php/load_user_recover.php'); 

	});


	//----------------------------------------------------------------------------

	//acción para fijar radio button seleccionado a través, de su label

	$('#cita-m form .row .d label i').click(function(){

		$('#cita-m form .row .d label i').removeClass('active');

		$(this).toggleClass('active');		

	});

	$('#c_cita').click(function(){

		$('#wrapper').load('dist/php/load_cal_c_prog.php');

	});

	