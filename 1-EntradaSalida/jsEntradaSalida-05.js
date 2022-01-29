/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
let edad;
let nombre;
let mensaje;
edad=parseInt(txtIdEdad.value);
nombre=txtIdNombre.value;
mensaje='Usted se llama '+nombre+' y tiene '+edad;
if(isNaN(edad)||isNaN(nombre)==false){
	alert('Verificar datos ingresados');
}
else{
alert(mensaje);
}








}

