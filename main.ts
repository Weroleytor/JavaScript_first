//1.- Saludar
function saludar(nombre){
    return "shola, " + nombre;
}

console.log(saludar("Ulises Heraldez"));


//2.- Tipos, Boolean
let esVerdadero = true;
console.log(esVerdadero);

let futbolista: [string, string];
futbolista = ['Messi', '34'];

console.log(`El nombre es ${futbolista[0]}`);
console.log(`La edad es ${futbolista[1]}`);


//3.- Tipos, Number
let entero: number = 6;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;


//4.- Tipos, String
let marca: string = 'Toyota';
let modelo: string = "Tacoma";


//uso del caracter backtick
let nombre: string = "Raul";
let apellido: string = "Jimenez";
let impresion: string = `
Nombre: ${nombre}
Apellido: ${apellido}
`;

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