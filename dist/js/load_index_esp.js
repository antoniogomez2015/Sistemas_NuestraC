//----------------------------------------------------------------------------

	//acción para carga de la sección de header/especialidades
	$('#index_dir div').click(function(){

		$('#wrapper').load('dist/php/load_cal_med.php');

		$('#load').show('slowUp');

	});