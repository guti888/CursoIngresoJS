/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
let precioUno;
let precioDos;
let precioTres;
let resultadoSuma;
let mensaje;
mensaje = 'El total es: ';
precioUno = txtIdPrecioUno.value;
precioDos = txtIdPrecioDos.value;
precioTres = txtIdPrecioTres.value;
precioUno = parseInt(precioUno);
precioDos = parseInt(precioDos);
precioTres = parseInt(precioTres);
resultadoSuma = precioUno + precioDos + precioTres;
alert(mensaje + resultadoSuma);
}
function Promedio () 
{
let precioUno;
let precioDos;
let precioTres;
let resultadoSuma;
let promedio;
let mensaje;
mensaje = 'El promedio es: ';
precioUno = txtIdPrecioUno.value;
precioDos = txtIdPrecioDos.value;
precioTres = txtIdPrecioTres.value;
precioUno = parseInt(precioUno);
precioDos = parseInt(precioDos);
precioTres = parseInt(precioTres);
resultadoSuma = precioUno + precioDos + precioTres;
promedio = resultadoSuma / 3;
alert(mensaje + promedio);
}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultadoSuma;
    let iva;
    let precioFinal;
    let mensaje;
    mensaje = 'El precio final es de: ';
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    resultadoSuma = precioUno + precioDos + precioTres;
    iva = (resultadoSuma * 21) / 100;
    precioFinal = resultadoSuma + iva;
    alert(mensaje + precioFinal);
}