function calcularAlturaTrianguloIsosceles() {
    // Datos recibidos del formulario

    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const inputBase = document.getElementById("inputTrianguloBase");
    
    // Valores

    const valueLado1 = Number(inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueBase = Number(inputBase.value) / 2;

    //Comprobación

    if (valueLado1 !== 0 && valueLado2 !== 0 && valueBase !== 0 && valueLado1 === valueLado2 && valueBase !== valueLado1) {
        function alturaTrianguloIsosceles(hipotenusa, cateto){
            return (Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto, 2))); 
        }
        alert(alturaTrianguloIsosceles(valueLado1, valueBase));
    } else if (valueBase === 0) {
        alert("Ingresa una medida valida a la base");
    } else {
        alert("Ohhhh lo siento este triangulo no es isosceles. Por favor intentalo nuevamente con otras medidas.")
    }

    // Comprobación de que sea un triangulo isosceles
    
}