// Expresiones regulares para validar año y nivel de idiomas
var regexAño = /^(19\d\d|20[0-1]\d|2022)$/;
var regexNivelIdiomas = /^(A1|A2|B1|B2|C1|C2)$/;

var anio = prompt("Introduce año")
// Validar el formato del año
if (!regexAño.test(anio)) {
    console.log("Año no válido. Debe ser un número de 4 cifras entre 1900 y 2022.");
    // Terminar la ejecución del programa
    process.exit();
}
var nivelIdiomas= prompt("Introduce nivel de idiomas")
// Validar el formato del nivel de idiomas
if (!regexNivelIdiomas.test(nivelIdiomas)) {
    console.log("Nivel de idiomas no válido. Debe ser A1, A2, B1, B2, C1 o C2.");
    // Terminar la ejecución del programa
    process.exit();
}

//Calcular trienios y sexenios
var aniostrabajados=new Date().getFullTear() - anio;
var trienios = Math.floor(aniostrabajados/3);
var sexenios = Math.floor(aniostrabajados/6);

var complementoT = trienio*18;
var complementoS = sexenio*25;

var complementoIdioma= 0;
switch(nivelIdiomas){
    case "A1":
    case "A2":
        complementoIdioma= 15;
        break;
    case "B1":
    case "B2":
        complementoIdioma= 15;
        break;
    case "C1":
    case "C2":
        complementoIdioma= 15;
        break;
    default:
        console.log("Nivel no valido");
}

var complementoTotal= complementoIdioma+complementoS+complementoT;
// Mostrar resultados
console.log("Trienios acumulados: " + trienios);
console.log("Sexenios acumulados: " + sexenios);
console.log("Complemento salarial por trienios: " + complementoTrienios + "€");
console.log("Complemento salarial por sexenios: " + complementoSexenios + "€");
console.log("Complemento salarial por idiomas: " + complementoIdiomas + "€");
console.log("Complemento salarial total: " + complementoTotal + "€");
