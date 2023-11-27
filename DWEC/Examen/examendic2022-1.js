// Expresiones regulares para validar año y nivel de idiomas
var regexAño = /^(19\d\d|20[0-1]\d|2022)$/;
var regexNivelIdiomas = /^(A1|A2|B1|B2|C1|C2)$/;

// Pedir al usuario el año de inicio y el nivel de titulación
var añoInicio = prompt("Ingrese el año en que empezó a trabajar para la empresa (1900-2022):");

// Validar el formato del año
if (!regexAño.test(añoInicio)) {
    console.log("Año no válido. Debe ser un número de 4 cifras entre 1900 y 2022.");
    // Terminar la ejecución del programa
    process.exit();
}

var nivelIdiomas = prompt("Ingrese el nivel de titulación de idiomas (A1, A2, B1, B2, C1, C2):").toUpperCase();

// Validar el formato del nivel de idiomas
if (!regexNivelIdiomas.test(nivelIdiomas)) {
    console.log("Nivel de idiomas no válido. Debe ser A1, A2, B1, B2, C1 o C2.");
    // Terminar la ejecución del programa
    process.exit();
}
// Calcular trienios y sexenios
var añosTrabajados = new Date().getFullYear() - añoInicio;
var trienios = Math.floor(añosTrabajados / 3);
var sexenios = Math.floor(añosTrabajados / 6);

// Calcular complemento salarial
var complementoTrienios = trienios * 18;
var complementoSexenios = sexenios * 25;

var complementoIdiomas = 0;
switch (nivelIdiomas) {
    case "A1":
    case "A2":
        complementoIdiomas = 15;
        break;
    case "B1":
    case "B2":
        complementoIdiomas = 30;
        break;
    case "C1":
    case "C2":
        complementoIdiomas = 40;
        break;
    default:
        console.log("Nivel de idiomas no válido");
}

// Calcular el complemento total
var complementoTotal = complementoTrienios + complementoSexenios + complementoIdiomas;

// Mostrar resultados
console.log("Trienios acumulados: " + trienios);
console.log("Sexenios acumulados: " + sexenios);
console.log("Complemento salarial por trienios: " + complementoTrienios + "€");
console.log("Complemento salarial por sexenios: " + complementoSexenios + "€");
console.log("Complemento salarial por idiomas: " + complementoIdiomas + "€");
console.log("Complemento salarial total: " + complementoTotal + "€");
