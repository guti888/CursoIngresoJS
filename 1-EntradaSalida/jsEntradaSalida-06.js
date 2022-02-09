/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
let numeroUno;
let numeroDos;
let total;
numeroUno = txtIdNumeroUno.value;
numeroDos = txtIdNumeroDos.value;
numeroUno = parseInt(numeroUno);
numeroDos = parseInt(numeroDos);
total = numeroUno + numeroDos;
alert(total);
}
