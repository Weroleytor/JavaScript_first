function saludar2(nombre){
    return "hola, " + nombre;
}

console.log(saludar("Geovany"));

let esVerdadero2 = true;
console.log(esVerdadero);

let futbolista3: [string, string];
futbolista = ['Messi', '34'];

console.log(`El nombre es ${futbolista[0]}`);
console.log(`La edad es ${futbolista[1]}`);

enum MarcasDeAutos {
    Toyota = 100,
    Chevrolet,
    Ford
}

let tacoma: MarcasDeAutos = MarcasDeAutos.Toyota;
console.log(tacoma);

let stringOne = MarcasDeAutos[1];
let stringTwo = MarcasDeAutos[MarcasDeAutos.Chevrolet];

console.log(MarcasDeAutos[0])
console.log(MarcasDeAutos[1])

console.log(stringOne);
console.log(stringTwo);

function imprimirId(id: number | string | undefined) {
    console.log(`El id es ${id}`);
}

imprimirId(1);
imprimirId('abc');
imprimirId(undefined);

function imprimirEtiqueta(etiqueta: {label: string}) {
    console.log(etiqueta.label);
}

let miEtiqueta = { numero: 10, label: "Esta es mi etiqueta"};
imprimirEtiqueta(miEtiqueta);