function ordenarListas(lista) {
    const listaOrdenada = lista.sort(
        function(elementoA, elementoB) {
            return elementoA.salario - elementoB.salario;
        }
    )
    return listaOrdenada;
}
function arrayTotalSalarios(lista) {

    const arrayTotalSalarios = lista.map(
        function(elemento) {
            return elemento.salario;
        });
        return arrayTotalSalarios;

}

function calcularMediana(listaOrdenada) {
    const mitadLista = parseInt(listaOrdenada.length / 2);
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];
    const elemento1y2 = [
        elemento1,
        elemento2
    ];
    const mediana = (elemento1 + elemento2) / 2;
    return mediana;
}

function dineroTotalSalarios(arrayTotal) {

    const dineroTotalSalarios = arrayTotal.reduce(
        function(valorAcumulado, nuevoValor){

            return valorAcumulado + nuevoValor;

        }
    );
    return dineroTotalSalarios;
}

function dineroTotalSalariosColombia() {
    
    return dineroTotalSalarios(arrayTotalSalarios(colombia));

};

// Ordenar lista de colombia

ordenarListas(colombia);
dineroTotalSalariosColombia();


