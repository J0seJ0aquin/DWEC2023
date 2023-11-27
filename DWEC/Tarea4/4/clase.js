class Asignatura {
    constructor(nombre) {
        this.nombre = nombre;
        this.alumnos = [];
        this.maximo = 10;
    }

    modificarMaximo(nuevoMaximo) {
        this.maximo = nuevoMaximo;
        console.log(`Número máximo de alumnos modificado a ${nuevoMaximo}`);
    }

    agregarAlumno(alumno) {
        if (this.alumnos.length < this.maximo) {
            this.alumnos.push(alumno);
            console.log(`Alumno ${alumno} añadido a la asignatura.`);
        } else {
            console.error('Error: Se ha alcanzado el número máximo de alumnos.');
        }
    }

    listarAlumnos() {
        console.log(`Lista de alumnos en ${this.nombre}:`);
        this.alumnos.forEach((alumno, indice) => {
            console.log(`${indice + 1}. ${alumno}`);
        });
    }

    eliminarAlumno(indice) {
        if (indice >= 0 && indice < this.alumnos.length) {
            const alumnoEliminado = this.alumnos.splice(indice, 1);
            console.log(`Alumno ${alumnoEliminado} eliminado de la asignatura.`);
        } else {
            console.error('Error: Índice de alumno no válido.');
        }
    }
}

// Crear un objeto Asignatura
const miAsignatura = new Asignatura('Matemáticas');

// Modificar el número máximo de alumnos
miAsignatura.modificarMaximo(15);

// Agregar alumnos
miAsignatura.agregarAlumno('Juan');
miAsignatura.agregarAlumno('María');
miAsignatura.agregarAlumno('Pedro');

// Intentar agregar más alumnos del máximo permitido
miAsignatura.agregarAlumno('Ana');
miAsignatura.agregarAlumno('Carlos');

// Listar alumnos
miAsignatura.listarAlumnos();

// Eliminar un alumno por índice
miAsignatura.eliminarAlumno(1);

// Listar alumnos después de eliminar uno
miAsignatura.listarAlumnos();
