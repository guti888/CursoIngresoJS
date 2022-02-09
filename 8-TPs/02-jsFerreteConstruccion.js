/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
let largo;
let ancho;
let perimetro;
let cantidadDeHilos;
let cantidadDeAlambre;
let mensaje;
cantidadDeHilos = 3;
largo = txtIdLargo.value;
ancho = txtIdAncho.value;
largo = parseInt(largo);
ancho = parseInt(ancho);
perimetro = (largo * 2) + (ancho * 2);
cantidadDeAlambre = perimetro * cantidadDeHilos;
mensaje = "Cantidad de alambre a comprar (x3 hilos): ";
alert(mensaje + cantidadDeAlambre + "m");
}
function Circulo () 
{
	//2*3.14*radio
let radio;
let perimetro;
let cantidadDeHilos;
let cantidadDeAlambre;
let mensaje = "Cantidad de alambre a comprar (x3 hilos): ";
cantidadDeHilos = 3;
radio = txtIdRadio.value;
radio = parseInt(radio);
perimetro = 2 * 3.14 * radio;
cantidadDeAlambre = perimetro * cantidadDeHilos;
alert(mensaje + cantidadDeAlambre + "m");
}
function Materiales () 
{
    let mensaje;
    let mensajeB;
    let mensajeC;

    let bolsasCemento;
    let bolsasCal;
    let bolsasCementoCalculadas;    
    let bolsasCalCalculadas;
	
    let largo;
    let ancho;
    let areaRectangulo;
    
    bolsasCemento = 2;
    bolsasCal = 3;
    
    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    areaRectangulo = largo * ancho;
    
    bolsasCementoCalculadas = bolsasCemento * areaRectangulo;
    bolsasCalCalculadas = bolsasCal * areaRectangulo;

    mensaje = "Metros cuadrados por cubrir: " + areaRectangulo + "m²";
    mensajeB = "Bolsas de cementos necesarias: " + bolsasCementoCalculadas;
    mensajeC = "Bolsas de cal necesarias: " + bolsasCalCalculadas;
    alert(mensaje);
    alert(mensajeB);
    alert(mensajeC);
}