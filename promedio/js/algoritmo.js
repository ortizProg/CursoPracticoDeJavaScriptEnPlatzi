const lista = [
    3,
    4,
    1000,
];
function calcularPromedio(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor;
        }
    );
    const promedioLista = sumaLista / lista.length; 
    
    console.log("El promedio es: " + promedioLista); 
}