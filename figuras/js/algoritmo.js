// Inicio algoritmo cuadrado

console.group("Cuadrados");
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

//Perimetro

console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

//area

console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

// Final del algoritmo del cuadrado

// Inicio algoritmo del triangulo

// Declaracion de las variables

console.group("Triangulos");
const lado1Triangulo = 6;
const lado2Triangulo = 6;
const baseTriangulo = 5;
const alturaTriangulo = 5.5
const perimetroTriangulo = lado1Triangulo + lado2Triangulo + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

// Lados del triangulo

console.log("Los lados del triangulo miden " + lado1Triangulo + "cm, " + lado2Triangulo + "cm " + "y la base es de ") + baseTriangulo + "cm";

// Perimetro del triangulo

console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");

// Area del triangulo

console.log("El área del triangulo es de: " + areaTriangulo + "cm^2")

console.groupEnd();

//Final del algoritmo del triangulo

// Algoritmo del circulo

console.group("Circulos");

// Declaraccion de las variables

const radioCirculo = 6;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const circunferenciaCirculo = CircunferenciaCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;

// Radio

console.log("El radio del circulo es de: " + radioCirculo + "cm");

//Diametro del circulo

console.log("El diametro del circulo es de: " + diametroCirculo + "cm");

// PI

console.log("PI es igual a: " + PI);

// Circunferencia

console.log("La circunferencia del circulo es de: " + circunferenciaCirculo + "cm");

// AreaCirculo

console.log("El área del circulo es de: " + areaCirculo + "cm^2");

console.groupEnd();

// Fin del algoritmo el circulo