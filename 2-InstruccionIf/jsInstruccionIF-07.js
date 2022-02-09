function mostrar()
{
	//tomo la edad  
	let edad;
	let situacionFamiliar;
	situacionFamiliar = estadoCivil.value;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if (edad < 18 && situacionFamiliar != "Soltero"){
		alert('Usted es muy pequeño para NO ser soltero');
	}
	


}//FIN DE LA FUNCIÓN