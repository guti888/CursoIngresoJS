/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
let numeroUno;
let numeroDos;
let suma;
numeroUno=parseInt(txtIdNumeroUno.value);
numeroDos=parseInt(txtIdNumeroDos.value);
suma=numeroUno+numeroDos;
if(isNaN(suma)){
	alert('Error, verificar numeros ingresados');
}
else{
alert(suma);
}
}

