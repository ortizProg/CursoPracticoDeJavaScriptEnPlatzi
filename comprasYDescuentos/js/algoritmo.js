// Declaracion e inicialización de las variables
/*
const precioOriginal = 2000;
const descuento = 15;
*/
// Funciones

function calcularDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onclickCalcular() {
    const inputPrecio = document.getElementById("inputPrice");
    const inputDescuento = document.getElementById("inputDescuento");
    const valuePrecio = Number(inputPrecio.value);
    const valueDescuento = Number(inputDescuento.value);
    const resultadoDeLaOperacion = calcularDescuento(valuePrecio, valueDescuento);

    // Escribir resultado en HTML

    const resultado = document.getElementById("inputResultado");
    const valueResultado = resultadoDeLaOperacion;
    resultado.value = valueResultado;
}

