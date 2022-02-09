/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let mensaje;
    let fahrenheit;
    let centigrados;
    fahrenheit = txtIdTemperatura.value;
    fahrenheit = parseInt(fahrenheit);
    centigrados = ((fahrenheit - 32) * 5/9);
    mensaje = fahrenheit + " grados fahrenheit son: " + centigrados + " grados centigrados";
    alert(mensaje);
}

function CentigradosFahrenheit () 
{
	//(1 °C × 9/5) + 32
let mensaje;
let centigrados;
let fahrenheit;
centigrados = txtIdTemperatura.value;
centigrados = parseInt(centigrados);
fahrenheit = ((centigrados * 9/5) + 32);
mensaje = centigrados + " grados centigrados son: " + fahrenheit + " grados fahrenheit";
alert(mensaje);
}
