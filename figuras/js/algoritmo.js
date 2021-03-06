// Inicio algoritmo cuadrado

/*
console.group("Cuadrados");
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");
*/
//Perimetro
function perimetroCuadrado(lado){

    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

//area

function areaCuadrado(lado){
    return lado * lado;
}

// console.groupEnd();

// Final del algoritmo del cuadrado

// Inicio algoritmo del triangulo

// Declaracion de las variables

/*
console.group("Triangulos");
const lado1Triangulo = 6;
const lado2Triangulo = 6;
const baseTriangulo = 5;
const alturaTriangulo = 5.5
const perimetroTriangulo = lado1Triangulo + lado2Triangulo + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
*/

// Lados del triangulo
function ladosTriangulo(base, lado1, lado2){
 return console.log("Los lados del triangulo miden " + lado1 + "cm, " + lado2 + "cm " + "y la base es de " + base + "cm");
}
// console.log("Los lados del triangulo miden " + lado1Triangulo + "cm, " + lado2Triangulo + "cm " + "y la base es de " + baseTriangulo + "cm");

// Perimetro del triangulo

function perimetroTriangulo(base, lado1, lado2) {
    const resultado = base + lado1 + lado2;
    return resultado;
}
// console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");

// Area del triangulo

function areaTriangulo(base, altura) {
    return (base * altura) / 2 + "cm^2";
}
// console.log("El área del triangulo es de: " + areaTriangulo + "cm^2")

// console.groupEnd();

//Final del algoritmo del triangulo

// Algoritmo del circulo

/*
console.group("Circulos");

// Declaraccion de las variables

const radioCirculo = 6;
const diametroCirculo = radioCirculo * 2;
*/
const PI = Math.PI;
/*
const circunferenciaCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;

*/
// Radio

function radioCirculo(radio) {
    return console.log("El radio del circulo es de: " + radio + "cm");
}
// console.log("El radio del circulo es de: " + radioCirculo + "cm");

//Diametro del circulo

function diametroCirculo(radio) {
    return radio + radio;
}
//console.log("El diametro del circulo es de: " + diametroCirculo + "cm");

// PI
function mostrarPI() {
    return console.log("PI es igual a: " + PI);
}
//console.log("PI es igual a: " + PI);

// Circunferencia
function circunferenciaCirculo(diametro) {
    return diametro * PI;
}
//cconsole.log("La circunferencia del circulo es de: " + circunferenciaCirculo + "cm");

// Area Circulo

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log("El área del circulo es de: " + areaCirculo + "cm^2");

// console.groupEnd();

// Fin del algoritmo el circulo

// Inicio del algoritmo para funciones junto HTML

// Inicio funciones del cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area + "cm^2");
}

// Fin de las funciones del cuadrado

// Inicio de las funciones del triangulo

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueLado1 = Number(inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueBase = Number(inputBase.value);
    const perimetro = perimetroTriangulo(valueBase, valueLado2, valueLado1);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const inputBase = document.getElementById("inputTrianguloBase");
    const inputAltura = document.getElementById("inputTrianguloAltura");
    const valueBase = Number(inputBase.value);
    const valueAltura = Number(inputAltura.value);
    if (valueBase != 0 && valueAltura != 0) {
        alert(areaTriangulo(valueBase, valueAltura));
    } else if (valueBase == 0){
        alert("Falta la medida de la base");
    } else {
        alert("Falta la medida de la altura");
    }
}

//Final de las funciones del triangulo

// Inicio de las funciones del circulo

function calcularDiametroCirculo() {
    input = document.getElementById("inputCirculo");
    value = Number(input.value);
    alert(diametroCirculo(value));
}
function calcularAreaCirculo() {
    input = document.getElementById("inputCirculo");
    value = Number(input.value);
    alert(areaCirculo(value));
}