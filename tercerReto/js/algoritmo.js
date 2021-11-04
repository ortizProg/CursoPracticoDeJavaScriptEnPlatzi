const datos = [
    {
        nombre: "Luis",
        tiempo: 5 
    },
    {
        nombre: "Oscar",
        tiempo: 4
    },
    {
        nombre: "Pedro",
        tiempo: 8
    },
    {
        nombre: "Santiago",
        tiempo: 10
    },
    {
        nombre: "Juan",
        tiempo: 2
    }
];

let mediaAritmetica;

function calcularMediaArmonica (lista) {
    let valorSuma = 0;

    const numeroTrabajadores = datos.length;
    const arrayTiempo = datos.map(
        function (elemento) {
            return elemento.tiempo;
        }
    );

    for (let value of arrayTiempo) {
        value = 1 / value;
        valorSuma += value
    }

    mediaAritmetica = (numeroTrabajadores) / (valorSuma);

    return mediaAritmetica; 

}

calcularMediaArmonica(datos);