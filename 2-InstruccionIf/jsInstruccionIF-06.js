function mostrar()
{
	//tomo la edad  
let edad;
edad = txtIdEdad.value;

if (edad > 17){
	alert('Usted es mayor de edad');
}
	else{
		if (edad < 13)
		{
		alert('Es niño');
		}
			else{
				alert('Es adolescente');
				}
	}
}//FIN DE LA FUNCIÓN