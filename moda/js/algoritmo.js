const lista1 = [
    1,2,3,3,3,3,4,4,4,4,1,1,1,1,15,5,5,5,5,56,6,7
];

let moda;
const listaCount = {};

function calcularModa (lista) {
    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
    
        }
    );
    
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    
    return moda = listaArray[listaArray.length - 1];
    
}
