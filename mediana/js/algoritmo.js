
const listaUsuario = [
    100,
    1000,
    300,
    500000,
    70000000
];

const listaOrdenada = listaUsuario.sort(compareNumbers);

const elementosLista = listaOrdenada.length;
const mitadLista = parseInt(elementosLista / 2);
let mediana;

function compareNumbers(a, b) {
    return a - b;
}

function calcularMediaAritmetica(sumaElementos) {
    return sumaElementos / 2;
}

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

if (esPar(elementosLista)) {

    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];

    const elemento1y2 = [
        elemento1,
        elemento2
    ];

    mediana = calcularMediaAritmetica(elemento1 + elemento2);

} else {
    mediana = listaOrdenada[mitadLista];
}
