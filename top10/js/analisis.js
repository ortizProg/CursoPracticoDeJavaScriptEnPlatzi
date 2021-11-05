// Organizar lista

trabajosColombia.sort(
    function(elementoA, elementoB) {
        return elementoA.sueldo - elementoB.sueldo;
    }  
);

function calcularElporcentaje(lista, porcentaje) {
    const numeroDeTrabajos = lista.length;
    const resultado = numeroDeTrabajos * (0.010 * porcentaje);
    const topList = [];
    for (let i = numeroDeTrabajos - 1; i > (numeroDeTrabajos - 1) - resultado; i--) {
        topList.push(lista[i]);
    }
    return topList;
}

function calcularElPorcentajeConSplice(lista, porcentaje) {
    const spliceStart = (lista.length * (100 - porcentaje)) / 100;
    const spliceCount = lista.length - spliceStart;
    const top10MejoresSueldos = lista.splice(
        spliceStart,
        spliceCount
    );
    return top10MejoresSueldos;
}