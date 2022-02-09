function mostrar()
{
	//tomo la edad  
	let edad;
	let situacionFamiliar;
	let mensaje;
	mensaje = 'Es soltero y no es menor.';
	situacionFamiliar = estadoCivil.value;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if (edad >= 18 && situacionFamiliar == "Soltero"){
		alert(mensaje);
	}
}//FIN DE LA FUNCIÓN