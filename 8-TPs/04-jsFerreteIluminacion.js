/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
//Agustin Angel Gutierrez. div-h.
function CalcularPrecio() {
    let lamparas;
    let cantidadLamparas;
    let precioConDescuento;
    let precio;
    let marca;
    let porcentajeDescuento;
    let ingresosBrutos;
    let mensaje;
    porcentajeDescuento = 0;
    lamparas = 35;
    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById('Marca').value;
    precio = cantidadLamparas * lamparas;

    if (cantidadLamparas >= 6) {
        porcentajeDescuento = (precio * 50) / 100;
    }
    else {
        if (cantidadLamparas == 5) {
            if (marca == 'ArgentinaLuz') {
                porcentajeDescuento = (precio * 40) / 100;
            }
            else {
                porcentajeDescuento = (precio * 30) / 100;
            }
        }
        else {
            if (cantidadLamparas == 4) {
                if (marca == 'ArgentinaLuz' || marca == 'FelipeLamparas') {
                    porcentajeDescuento = (precio * 25) / 100;
                }
                else {
                    porcentajeDescuento = (precio * 20) / 100;
                }
            }
            else {
                if (cantidadLamparas == 3) {
                    if (marca == 'ArgentinaLuz') {
                        porcentajeDescuento = (precio * 15) / 100;
                    }
                    else {
                        if (marca == 'FelipeLamparas') {
                            porcentajeDescuento = (precio * 10) / 100;
                        }
                        else {
                            porcentajeDescuento = (precio * 5) / 100;
                        }
                    }
                }
            }
        }
    }
    precioConDescuento = precio - porcentajeDescuento;
    if (precioConDescuento > 120) {
        ingresosBrutos = precioConDescuento * 0.10;
        precioConDescuento = precioConDescuento + ingresosBrutos;
        mensaje = 'IIBB Usted pago: $' + precioConDescuento;
        mensaje = mensaje + ' siendo $' + ingresosBrutos + ' el impuesto que se pagó';
        alert(mensaje);
    }
    document.getElementById('txtIdprecioDescuento').value = precioConDescuento;
}
