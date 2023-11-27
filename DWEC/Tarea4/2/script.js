document.addEventListener('DOMContentLoaded', function() {
    var nombres = [];

    function agregarNombre() {
        var inputElement = document.getElementById('nombreInput');
        var nombre = inputElement.value.trim();

        if (nombre === '') {
            // Si se introduce una cadena vacía, finaliza y muestra la información
            mostrarInformacion();
        } else if (!validarNombre(nombre)) {
            // Si el nombre no cumple con el formato, muestra un mensaje de error
            alert('Formato de nombre incorrecto. Debe ser "Nombre Apellido".');
        } else {
            // Agrega el nombre al array
            nombres.push(nombre);
            inputElement.value = ''; // Limpia el input
        }
    }

    function validarNombre(nombre) {
        // Expresión regular para validar el formato "Nombre Apellido"
        var regex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
        return regex.test(nombre);
    }

    function mostrarInformacion() {
        // Muestra la información en la página
        var primerNombre = nombres[0];
        var ultimoNombre = nombres[nombres.length - 1];

        // Encuentra el nombre + apellido de mayor longitud
        var nombreMasLargo = nombres.reduce(function (nombre1, nombre2) {
            return nombre1.length > nombre2.length ? nombre1 : nombre2;
        });

        // Calcula la media aritmética de las longitudes
        var longitudMedia = Math.floor(nombres.reduce(function (total, nombre) {
            return total + nombre.length;
        }, 0) / nombres.length);

        // Muestra la información en la página
        document.getElementById('primerNombre').innerText = 'Primer nombre introducido: ' + primerNombre;
        document.getElementById('ultimoNombre').innerText = 'Último nombre introducido: ' + ultimoNombre;
        document.getElementById('nombreMasLargo').innerText = 'Nombre más largo: ' + nombreMasLargo;
        document.getElementById('longitudMedia').innerText = 'Longitud media de los nombres: ' + longitudMedia;

        // Deshabilita el input y el botón después de mostrar la información
        document.getElementById('nombreInput').disabled = true;
        document.querySelector('button').disabled = true;
    }
});
