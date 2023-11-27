class Paquete {
    constructor(descripcion, peso) {
        this.descripcion = descripcion;
        this.peso = peso;
    }
}

class OrganizadorPaquetes {
    constructor() {
        this.paquetes = [];
    }

    añadirPaquete(descripcion, peso) {
        this.paquetes.push(new Paquete(descripcion, peso));
        console.log("Paquete añadido correctamente.");
    }

    listarPaquetes() {
        if (this.paquetes.length === 0) {
            console.log("No hay paquetes añadidos.");
        } else {
            this.paquetes.forEach((paquete, index) => {
                console.log(`Número: ${index}, Descripción: ${paquete.descripcion}, Peso: ${paquete.peso}`);
            });
        }
    }

    borrarPaquete(numeroPaquete) {
        if (isNaN(numeroPaquete) || numeroPaquete < 0 || numeroPaquete >= this.paquetes.length) {
            console.log("Número de paquete no válido.");
        } else {
            this.paquetes.splice(numeroPaquete, 1);
            console.log("Paquete borrado correctamente.");
        }
    }

    filtrarYOrdenarPaquetes(pesoFiltro) {
        // Filtrar paquetes
        const paquetesFiltrados = this.paquetes.filter(paquete => paquete.peso >= pesoFiltro);

        // Ordenar paquetes por peso de mayor a menor
        paquetesFiltrados.sort((a, b) => b.peso - a.peso);

        // Mostrar paquetes filtrados
        if (paquetesFiltrados.length === 0) {
            console.log("No hay paquetes con el peso especificado o superior.");
        } else {
            console.log("Paquetes filtrados por peso:");
            paquetesFiltrados.forEach((paquete, index) => {
                console.log(`Número: ${index}, Descripción: ${paquete.descripcion}, Peso: ${paquete.peso}`);
            });
        }
    }
}

const organizador = new OrganizadorPaquetes();

// Expresiones regulares para validar comandos y pesos
const regexComando = /^[ALBFQalbfq]$/;
const regexPeso = /^\d{1,2}(\.\d{1})?$/;

// Menú principal
while (true) {
    const comando = prompt("Ingrese un comando (A para añadir, L para listar, B para borrar, F para filtrar, Q para salir):").toUpperCase();

    if (!regexComando.test(comando)) {
        console.log("Comando no válido. Intente de nuevo.");
        continue;
    }

    switch (comando) {
        case 'A':
            const descripcion = prompt("Ingrese la descripción del paquete:");
            const peso = prompt("Ingrese el peso del paquete (ejemplo: 12.5):");

            if (!regexPeso.test(peso)) {
                console.log("Formato de peso incorrecto. Debe ser un número de 1 o 2 cifras en la parte entera, un punto y un solo dígito en la parte decimal.");
                continue;
            }

            organizador.añadirPaquete(descripcion, parseFloat(peso));
            break;
        case 'L':
            organizador.listarPaquetes();
            break;
        case 'B':
            const numeroPaquete = parseInt(prompt("Ingrese el número del paquete que desea borrar:"));
            organizador.borrarPaquete(numeroPaquete);
            break;
        case 'F':
            const pesoFiltro = prompt("Ingrese el peso mínimo para filtrar paquetes:");

            if (!regexPeso.test(pesoFiltro)) {
                console.log("Formato de peso incorrecto. Debe ser un número de 1 o 2 cifras en la parte entera, un punto y un solo dígito en la parte decimal.");
                continue;
            }

            organizador.filtrarYOrdenarPaquetes(parseFloat(pesoFiltro));
            break;
        case 'Q':
            console.log("Saliendo del programa.");
            // Terminar la ejecución del programa
            process.exit();
    }
}

