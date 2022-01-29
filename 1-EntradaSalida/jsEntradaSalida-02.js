/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
let entradaDatos;
entradaDatos = prompt('Ingresar nombre');
while(isNaN(entradaDatos)==false){
	entradaDatos = prompt('Error re-ingresar nombre');
}
	alert(entradaDatos);
}

