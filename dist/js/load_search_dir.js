//----------------------------------------------------------------------------

	//acción para cargar el contenido de directorios coincidentes

	$('#sc_dir input').click(function(){

		$('#load').load('dist/php/load_index_dir.php');	

		document.getElementById('cb').style.margin = "40px 0px 0px 0px";		

	});

	//acción para ir ha inicio
	$('#s_dir_back').click(function(){

		location.reload();

	});