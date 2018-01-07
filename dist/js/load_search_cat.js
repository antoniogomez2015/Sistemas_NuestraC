//----------------------------------------------------------------------------

	//acción para cargar el contenido de categorías coincidentes

	$('#cb input').click(function(){

		$('#load').load('dist/php/load_index_dir.php');	

		document.getElementById('cb').style.margin = "40px 0px 0px 0px";		

	});