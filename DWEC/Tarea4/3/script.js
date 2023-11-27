function cuentaAtras(tiempo, unidad) {
    // Convierte minutos a segundos si la unidad es 'M'
    if (unidad === 'M') {
        tiempo *= 60;
    }

    document.write("Faltan " + tiempo + " segundos<br>");

    var intervalo = setInterval(function() {
        tiempo--;

        if (tiempo > 0) {
            document.write("Faltan " + tiempo + " segundos<br>");
        } else {
            document.write("¡Cuenta atrás finalizada!");
            clearInterval(intervalo);
        }
    }, 1000);
}

// Ejemplo de uso: cuenta atrás de 2 minutos
cuentaAtras(2, 'M');
