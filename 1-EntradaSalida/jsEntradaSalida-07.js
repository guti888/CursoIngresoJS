/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
let numeroUno;
let numeroDos;	
let total;
let mensaje;
numeroUno = txtIdNumeroUno.value;
numeroDos = txtIdNumeroDos.value;
numeroUno = parseInt(numeroUno);
numeroDos = parseInt(numeroDos);
total = numeroUno + numeroDos;
mensaje = "El total es: ";
alert(mensaje + total);
}
function restar()
{
	let numeroUno;
	let numeroDos;	
	let diferencia;
	let mensaje;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	diferencia = numeroUno - numeroDos;
	mensaje = "La resta es: ";
	alert(mensaje + diferencia);	
}

function multiplicar()
{ 
let numeroUno;
let numeroDos;	
let producto;
let mensaje;
numeroUno = txtIdNumeroUno.value;
numeroDos = txtIdNumeroDos.value;
numeroUno = parseInt(numeroUno);
numeroDos = parseInt(numeroDos);
producto = numeroUno * numeroDos;
mensaje = "El producto es: ";
alert(mensaje + producto);	
}

function dividir()
{
let numeroUno;
let numeroDos;	
let cociente;
let mensaje;
numeroUno = txtIdNumeroUno.value;
numeroDos = txtIdNumeroDos.value;
numeroUno = parseInt(numeroUno);
numeroDos = parseInt(numeroDos);
cociente = numeroUno / numeroDos;
mensaje = "El cociente es: ";
alert(mensaje + cociente);
}

