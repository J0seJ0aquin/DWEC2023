
let ej1=[];
for(let i=1; i<10; i++){
    ej1[i]=i;
}

let ej2=[];
for(let i=1; i<10; i++){
    ej2[i]=Math.floor(Math.random()*100-1);
}

let ej3= ej2;

ej2.sort((a,b) => a-b);


//Ejercicio 7

let clasificaciones=[Ana, Oswaldo, Raul, Celia, Maria, Antonio];
console.log(clasificaciones);


//Ejercicio 8

let coches=[];
coches.push({
    fabricante:"Toyota",
    modelo: "Yaris",
    precio: "25500"
})
coches.push({
    fabricante:"Toyota",
    modelo: "Auris",
    precio: "27500"
})
coches.push({
    fabricante:"Toyota",
    modelo: "Avensis",
    precio: "30000"
})

coches.sort(function(a,b){
    if(a.precio>b.precio)return -1
    else return -1
})
console.log(coches)

coches.sort(function(a,b){
    if(a.fabricante>b.fabricante)return -1
    else {
        if (a.precio > b.precio) return -1
        else return 1
    }
})
console.log(coches)