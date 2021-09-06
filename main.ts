//1.- Saludar
function saludar(nombre){
    return "shola, " + nombre;
}

console.log(saludar("Ulises Heraldez"));


//2.- Tipos, Boolean
let esVerdadero = true;
console.log(esVerdadero);

let futbolista: [string, number];
futbolista = ['Messi', 34];

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


//5.- Tipos, Arrays
let listaDeNumeros: number[] = [1, 2, 3];
listaDeNumeros.push(1);

let listaDeNumeros: Array<number> = [1, 2, 3];


//6.- Tipos, Tuples
let futbolista: [string, number];
futbolista = ['Messi', 34];

console.log(`El nombre es ${futbolista[0]}`);
console.log(`La edad es ${futbolista[1]}`);


//7.- Tipos, Enums
enum MarcasDeAutos {
    Toyota = 100,
    Chevrolet,
    Ford
}

let tacoma: MarcasDeAutos = MarcasDeAutos.Toyota;
console.log(tacoma);

console.log(MarcasDeAutos[0]);

let stringOne = MarcasDeAutos[1];
let stringTwo = MarcasDeAutos[MarcasDeAutos.Chevrolet];

console.log(MarcasDeAutos[0])
console.log(MarcasDeAutos[1])


//8.- Tipos, Any
let variableSinTipo: any = 'Hola Ulises';
variableSinTipo = 100;


//9.- Tipos, Unknown
let valorDesconocido: unknown = 4;
valorDesconocido = true;


//10.- Tipos, Void
function saludar2(): void{
    console.log("Hola Mundo... Cruel");
}

saludar2();


//11.- Tipos, Null y Undefined
let variableSinDefinir: undefined = undefined;
let variableNula: null = null;


//12.- Tipos, Never
//Esta función no tiene un punto final ya que dispara una excepción
// function error(mensaje: string): never {
//     throw new Error(mensaje);
// }

// //Esta función no tiene un punto final ya que dispara un error
// function fallo(): never {
//     return error("Reportar fallo");
// }

// //Esta función no finaliza ya que posee un loop infinito
// function loopInfinito(): Never {
//     while(true){}
// }


//13.- Tipos, objects
declare function crear(o: object): void;

crear({ prop: 0});
crear(null);
crear(undefined);
crear([]);

//False es un tipo primitivo, por lo cual se generará un error
//crear(false);


//14.- Tipos, Union
function imprimirId(id: number | string) {
    console.log(`El id es ${id}`);
}

imprimirId(1);
imprimirId('abc');


//15.- Uniones
function imprimirId2(id: number | string) {
    if (typeof id === "string") {
        console.log(`El id es ${(id as string).toUpperCase()}`)
    } else{
        console.log(`El id es ${(id as string).fixed()}`)
    }
}

imprimirId2('este_es_mi_id');
imprimirId2(100.234234123);


//16.- Tipos, Type Assertion
let algunValor: unknown = "esto es un string";
let longitudDelString: number = (algunValor as string).length;

let algunValor2: unknown = "este es un string";
let longitudDelString2: number = (<string>algunValor).length;


//17.- Tipos, Functions
function saludar3(nombre: string){
    console.log(`Hola ${nombre}`);
}

saludar3("Nubia");


//18.- Tipos de valor de retorno de la función
function elevarAlCuadrado(base: number): number{
    return base * base;
}

let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);


//19.- Funciones Anónimas
const nombres = ["Juan", "Pedro", "Luis"];

nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});

nombres.forEach((s) => {
    console.log(s.toUpperCase());
});


//20.- Tipos, Aliases
type Punto = {
    x: number;
    y: number;
}

function imprimirCoordenada(punto: Punto) {
    console.log(`La coordenada x es : ${punto.x}`);
    console.log(`La coordenada y es : ${punto.y}`);
}

imprimirCoordenada({x: 10, y: 25})


//21.- Tipos, Interfaces
interface Etiqueta {
    label: string;
}

function imprimirEtiqueta(etiqueta: {label: string}) {
    console.log(etiqueta.label);
}

let miEtiqueta = { numero: 10, label: "Esta es mi etiqueta"};
imprimirEtiqueta(miEtiqueta);


//22.- Propiedades opcionales de las interfaces
interface Cuadrado {
    color?: string;
    ancho: number;
}

function crearCuadrado(cuadrado: Cuadrado): { area: number } {
    const area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}

crearCuadrado({ ancho: 10 });


//23.- Propiedades de solo lectura de las interfaces
interface Punto2 { 
    readonly x: number;
    readonly y: number;
}

let punto1: Punto = { x: 10, y: 20};
punto1.x = 20;


//24.- Tipos, Interfaces vs Types
interface Transporte {
    nombre: string;
}

type Figura = {
    nombre: string;
}

//Extender una interface
interface Auto extends Transporte{
    ruedas: number;
}

//Extender un type
type Cuadrado2 = Figura & {
    lados: 4;
}


//25.- Tipos, Literales
function imprimir(estadoCivil: 'soltero' | 'casado') {
    console.log(estadoCivil);
}

imprimir('soltero');


//26.- Funciones como expresiones
function saludar4(fn: (a: string) => void) {
    fn("Hola Mundo");
}

function imprimirEnConsola(s: string) {
    console.log(s);
}

saludar(imprimirEnConsola);