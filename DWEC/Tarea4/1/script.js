document.addEventListener('DOMContentLoaded', function() {
    // Array con los nombres de los meses en español
    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    // Obtiene la fecha actual
    var fechaActual = new Date();

    // Fecha del próximo halving de Bitcoin (24 de abril de 2024)
    var proximoHalving = new Date('2024-04-24');

    // Calcula los días restantes para el próximo halving
    var diasRestantes = Math.floor((proximoHalving - fechaActual) / (1000 * 60 * 60 * 24));

    // Obtiene el nombre del mes actual
    var nombreMesActual = meses[fechaActual.getMonth()];

    // Construye el mensaje
    var mensaje = "Estamos a " + fechaActual.getDate() + " de " + nombreMesActual + " de " + fechaActual.getFullYear() + ", faltan " + diasRestantes + " días para el próximo halving de Bitcoin, que se espera para el 24 de abril de 2024.";

    // Muestra el mensaje en la página
    document.getElementById('mensaje').innerText = mensaje;
});
