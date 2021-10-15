// Cupones de descuento
var cuponesDisponibles = [
    {
        idCupon: 1,
        codigo: "ABC-DFG-HIJ",
        nombreCupon: "Cupón de fidelidad",
        descuento: 10,
        cantidad: 1,
    },
    {
        idCupon: 2,
        codigo: "BIE-NVE-NID",
        nombreCupon: "Cupón de bienvenida",
        descuento: 5,
        cantidad: 100,
    }
];

// Precio

const precio = 100;

function precioConDescuento(precio, cupon) {
    const cuponUsado = cupon;
    const descuentoDelCupon = cuponUsado.descuento;
    var cuponesDisponibles = cuponUsado.cantidad;

    // Restar cantidad de cupones
    if (cuponesDisponibles > 0) {
        const porcentajeMenosDescuento = (100 - descuentoDelCupon);
        const resultado = (precio * porcentajeMenosDescuento) / 100;
        cuponUsado.cantidad--;
    } else if (cuponesDisponibles <= 0) {
        console.log("Ya no hay disponibilidad de este cupón.");
    }
}

function onclickPrecioConDescuesto() {
    const inputCodigo = document.getElementById("inputCodigo");
    const valueCodigo = inputCodigo.value;

    // Variable que busca el codigo del cupon

    const encuentraElCupon = cuponesDisponibles.find(function(codigoCupon) {
        return codigoCupon.codigo === valueCodigo;
    });
    precioConDescuento(precio, encuentraElCupon);
}
