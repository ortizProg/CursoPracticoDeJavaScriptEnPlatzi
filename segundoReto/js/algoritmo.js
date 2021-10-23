// Cupones de descuento
var cuponesDisponibles = [
    {
        idCupon: 1,
        codigo: "ABC-DFG-HIJ",
        nombreCupon: "Cupón de fidelidad",
        descuento: 10,
        cantidad: 100,
    },
    {
        idCupon: 2,
        codigo: "BIE-NVE-NID",
        nombreCupon: "Cupón de bienvenida",
        descuento: 5,
        cantidad: 100,
    }
];
// Cupones Usados por el usuario 

var unicoCuponUsado = false;
var cuponesUsados = [];


// Precio

const elementoPrecio = document.getElementById("precioDelProducto");
const precio = 400;


// Escribir el precio del producto en html

elementoPrecio.innerText = "$" + precio;

// Error en el cupon


// hacer aparecer cupon error 

function cuponError(mensaje) {
    const cuponSectionError = document.getElementById("cuponError");
    const aparecerSectionCupon = cuponSectionError.style.display = "block";
    aparecerSectionCupon;
    return cuponSectionError.innerText = mensaje;
}

function precioConDescuento(precio, cupon) {
    const cuponUsado = cupon;
    const descuentoDelCupon = cuponUsado.descuento;
    var cuponesDisponibles = cuponUsado.cantidad;
    const llamarDescuento = document.getElementById("precioConDescuento");

    // Restar cantidad de cupones
    if (cuponesDisponibles > 0) {
        const porcentajeMenosDescuento = (100 - descuentoDelCupon);
        const resultado = (precio * porcentajeMenosDescuento) / 100;
        cuponError.innerText = "";
        llamarDescuento.innerText = "$" + resultado;
        cuponUsado.cantidad--;
    } else if (cuponesDisponibles <= 0) {
        cuponError("Ya no hay disponibilidad de este cupón.");
    }
}

function onclickPrecioConDescuesto() {
    const inputCodigo = document.getElementById("inputCupon");
    const valueCodigo = inputCodigo.value;
    
    // Comprobar si el cupon ya lo uso el usuario
    const buscarCuponesUsados = cuponesUsados.indexOf(valueCodigo);
    if (unicoCuponUsado === false) {    
        if (buscarCuponesUsados === -1) {

            if (valueCodigo === undefined) {
                cuponError("Por favor ingresa un codigo valido");
            }
            // Variable que busca el codigo del cupon
        
            var encuentraElCupon = cuponesDisponibles.find(function(codigoCupon) {
                return codigoCupon.codigo === valueCodigo;
            });
            if (encuentraElCupon === undefined) {
                cuponError("El cupón no existe por favor verificar el codigo, recuerda usar los '-'. Por ejemplo: AAA-AAA-AAA ");
                encuentraElCupon = undefined;
            } else {
                // Verificación 

                const codigoCupon = encuentraElCupon.codigo;

                if (encuentraElCupon !== undefined) {
                    precioConDescuento(precio, encuentraElCupon);
                    cuponesUsados.push(codigoCupon);
                    unicoCuponUsado = true;
                }
            }
        } else {
            cuponError("El cupón ya ha sido utilizado.");
        }

    } else {
        cuponError("Ya has aplicado un cupón a este producto.")
    }
}

