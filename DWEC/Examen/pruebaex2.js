class Paquete{
    constructor(descripcion,peso){
        this.descripcion=descripcion;
        this.peso=peso;
    }
}

class OrgPaquetes{
    constructor(){this.paquetes=[];}

    añadirPaquete(){
        this.paquetes.push((descripcion,peso));
        console.log("Añadido")
    }
    
    listarPaquete(){
        if(this.paquetes.length===0){console.log("Erro, no hay pequetes");}
        else{
            this.paquetes.forEach((Paquete, index) =>{
                console.log(`Numero: ${index}, Descripcion: ${paquete.descripcion}, Peso: ${paquete.peso}`)
            });
        }
    }

    borrarPaquete(numeroPaquete){
        if(!isNaN(numeroPaquete) || numeroPaquete < 0 || numeroPaquete >=this.paquetes.length){console.log("No existe")}
        else{
            this.paquetes.splice(numeroPaquete,1);
            console.log("Borrado con exito")
        }
    }
}

const organizador=new OrgPaquetes();

// Expresiones regulares para validar comandos y pesos
const regexComando = /^[ALBFQalbfq]$/;
const regexPeso = /^\d{1,2}(\.\d{1})?$/;

//MENU
while(true){
    const comando = prompt("Ingrese un comando (A para añadir, L para listar, B para borrar, F para filtrar, Q para salir):").toUpperCase();

    if (!regexComando.test(comando)) {
        console.log("Comando no válido. Intente de nuevo.");
        continue;
    }

    switch(comando){
        case 'A':
            const descripcion=prompt("Ingrese Descripcion");
            const peso=prompt("Ingrese Peso");

            if(!regexPeso.test(peso)){console.log("Formato de peso incorrecto");continue;}
            
            organizador.añadirPaquete(descripcion, parseFloat(peso));
            break;

        case 'L': organizador.listarPaquetes(); break;

        case 'B': 
            const numeroPaquete = parseInt(prompt("Ingrese el número del paquete que desea borrar:"));
            organizador.borrarPaquete(numeroPaquete);
            break;

        case 'F':
            const pesoFiltro=prompt("Ingrese el peso mínimo para filtrar paquetes:");

            if(!regexPeso.test(pesoFiltro)){console.log("Error");continue;}

            organizador.filtrarYOrdenarPaquetes(parseFloat(pesoFiltro));
            break;

        case 'Q': console.log("Saliendo"); ProcessingInstruction.exit();
    }
}