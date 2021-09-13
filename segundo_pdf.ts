//Funciones, Constructor signature
interface Transporte {
        nombre: string;   
    }
        class Caballo implements Transporte{
            constructor(public nombre: string) {}
    }
        class Automovil implements Transporte {
            constructor(public nombre: string) {}
    }
        type ConstructorDeTransporte = {
        new (nombre: string): Transporte;
    };

        function construirTransporte(ctr: ConstructorDeTransporte, nombre: string){
        return new ctr(nombre);
    }

    const miCaballo = construirTransporte(Caballo, "Paso Fino");
    const miAutomovil = construirTransporte(Automovil, "Toyota");
    
    console.log("Mi caballo se llama " + miCaballo.nombre);
    console.log("Mi automovil es un " + miAutomovil.nombre);


//Functiones, parámetros opcionales
function f(n: number) {
    console.log(n.toFixed()); //no se especifican argumentos
    console.log(n.toFixed(3)); //se especifica un argumento
}

function f2(n?: number){
    // ..
}

function f3(n = 10){
    // ..
}


//Parámetros opcionales en los callbacks
function miIterador(arr: any[], callback: (arg: any, index?: number) => void) {
    for(let i=0; i<=arr.length; i++){
        callback(arr[i], i);
    }
}

miIterador([1, 2, 3], (a) => console.log(a));
miIterador([1, 2, 3], (a, i) => console.log(a, i));

function miIterador2(arr: any[], callback: (arg: any, index?: number) => void) {
    for(let i=0; i<=arr.length; i++){
        //aquí es donde index es opcional o no
        callback(arr[i]);
    }
}


//Funciones overload
function longitud(a: any[]): number;
function longitud(x: string): number;
function longitud(x: any): number{
    return x.length;
}

console.log(longitud("Hola mundo"));
console.log(longitud([1, 2, 3, 4, 5]));


function calcularLongitud(x: any[] | string) {
    return x.length;
}

console.log(longitud("Hola mundo"));
console.log(longitud([1, 2, 3, 4, 5]));



//Funciones, uso de "this"
const usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function() {
        this.admin = true;
    },
};

console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);



const usuario2 = {
    id: 123,
    admin: false,
    volverseAdmin: () => {
        this.admin = true;
    },
};

console.log(usuario2.admin);
usuario.volverseAdmin();
console.log(usuario2.admin);



//Funciones, rest parametres
function multiplicar(n: number, ...m: number[]): number {
    return m.reduce((p, c) => {
        return p * c;
    }, n);
}

console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));



//Funciones, parameter destructuring
function sumar(num) {
    return num.a + num.b + num.c;
}
const numeros = { a: 1, b: 2, c: 3};
console.log(sumar(numeros));


function sumar2(a, b, c): number {
    return a + b + c;
}
console.log(sumar({ a: 1, b: 2, c: 3}));


function sumar3({a, b, c}: {a: number; b: number; c: number}): number{
    return a + b + c;
}
console.log(sumar3({a: 1, b: 2, c:3}));



//Object types
function saludar(persona: { nombre: string; edad: number}) {
    return `Hola ${persona.nombre}`;
}

console.log(saludar({ nombre: "Luis", edad: 22}))

//Puede ser nombrada como una interface
interface Persona {
    nombre: string;
    edad: number;
}
function saludar2(persona: Persona) {
    return `Hola ${persona.nombre}`;
}
console.log(saludar2({ nombre: "Elena", edad: 25}))

//O como un alias
type Persona2 = {
    nombre: string;
    edad: number;
}
function saludar3(persona: Persona) {
    return `Hola ${persona.nombre}`;
}
console.log(saludar3({ nombre: "Anabel", edad: 30}))



//Object types, property modifiers
//Propiedades opcionales
interface Computadora {
    os: 'Windows' | 'Linux' | 'Mac';
    monitor?: 'crt' | 'led'
    memoria: number;
    procesador: 'intel' | 'amd'
}

function imprimir(computador: Computadora) {
    console.log(`Sistema operativo: ${computador.os}`)
    console.log(`Memoria: ${computador.memoria}`)
    console.log(`Procesador: ${computador.procesador}`)
}

imprimir({
    os: 'Windows',
    memoria: 8,
    procesador: 'intel',
})



//Object types, readonly properties
interface Perro {
    readonly raza: string;
}

const miCachorro: Perro = { raza: "Shitzu" };

console.log(`La raza de mi cachorro es: ${miCachorro.raza}`);

//no se le puede asignar otro valor porque es "read only"
//miCachorro.raza = 'test';


interface Persona3 {
    edad: number;
}

interface EdadNo {
    readonly edad: number;
}

const Luis: Persona3 = { edad: 20 };

const Pedro: EdadNo = Luis;

Luis.edad++;
//Pedro.edad++; <-- esto genera un error porque es "read only"

console.log(Luis);
console.log(Pedro); //se actualiza el valor porque se "linkean"



//Object types, extender tipos
interface Direccion {
    nombre: string;
    calle: string;
    numero: number;
    ciudad: string;
    pais: string;
    codigoPostal: string;
}

interface DireccionDeApartamento {
    nombre: string;
    calle: string;
    numero: number;
    ciudad: string;
    pais: string;
    codigoPostal: string;
}

interface DireccionDeApartamento extends Direccion {
    unidad: string;
}


//Object types, extender múltiples tipos
interface Computadora2 {
    memoria: string;
    procesador: string;
    hdd: string;
}

interface SistemaOperativo {
    so: string;
    version: string;
}

interface Portatil extends Computadora2, SistemaOperativo {
    bateria: string;
    monitor: string;
    teclado: string;
}

interface Servidor extends Computadora2, SistemaOperativo {
    conexion: string;
}

const macbookPro: Portatil = {
    memoria: "16G",
    procesador: "intel",
    hdd: "1TB",
    so: "osx",
    version: "catalina",
    bateria: "litio",
    monitor: "17 pulgadas",
    teclado: "español",
};

const ubuntuServer: Servidor = {
    memoria: "64G",
    procesador: "intel",
    hdd: "4TB",
    so: "ubuntu",
    version: "tusty",
    conexion: "ethernet",
};



//Object types, intersection types
interface Computadora3 {
    memoria: string;
    procesador: string;
    hdd: string;
}

interface SistemaOperativo3 {
    so: string;
    version: string;
}

type Portatil3 = Computadora3 & SistemaOperativo3;

const macbookPro3: Portatil3 = {
    memoria: "16G",
    procesador: "intel",
    hdd: "1TB",
    so: "osx",
    version: "catalina",
};


//Object tyupes, interfaces vs intersections
interface Caja {
    contenido: any;
}

let x: Caja = {
    contenido: "hola mundo",
}

//mediante typeof podemos verificar si el tipo es string
if (typeof x.contenido === "string") {
    console.log(x.contenido.toLocaleLowerCase());
}

//mediante "as tipo" podemos decirle al compilador que esto es siempre string
console.log((x.contenido as string).toLocaleLowerCase());

interface CajaNumber {
    contenido: number;
}

interface CajaString {
    contenido: string;
}

interface CajaBoolean {
    contenido: boolean;
}

function setContenido(caja: CajaNumber, nuevoContenido: string): void;
function setContenido(caja: CajaString, nuevoContenido: number): void;
function setContenido(caja: CajaBoolean, nuevoContenido: boolean): void;
function setContenido(caja: { contenido: any }, nuevoContenido: any) {
    caja.contenido = nuevoContenido;
}


//¿Qué son los generics en typescript?
interface Caja2<T> {
    contenido: T;
}

let cajaDeString: Caja2<string> = { contenido: "hola mundo" };
let cajaDeNumero: Caja2<number> = { contenido: 100 };
let cajaDeFecha: Caja2<Date> = { contenido: new Date() };


//la interface caja se convierte en una interfaz reutilizable
//también podemos crear alias genericos
interface Cajita<T> {
    contenido: T;
}

let cajaDeString2: Cajita<string> = { contenido: "hola mundo" };
let cajaDeNumero2: Cajita<number> = { contenido: 100 };
let cajaDeFecha2: Cajita<Date> = { contenido: new Date() };


//Object types, array type
const imprimirTareas = (v: Array<string>) => {
    v.forEach((v) => {
        console.log(v);
    });
};

const misTareas: string[] = [
    "levantarse",
    "lavarse los dientes",
    "sacar al perro",
];

imprimirTareas(misTareas);


//Object types, readonlyarray type
const miLista: ReadonlyArray<string> = ["a", "b", "c"];

//miLista.push("d"); //esta línea generaría un error

//A diferencia de Array, no existe el constructor ReadonlyArray que pueda 
//ser utilizado. Por lo cual no se puede crear un arreglo ReadonlyArray de la 
//siguiente forma.
//const miLista2 = new ReadonlyArray('a','b','c'); 

//En lugar de ello podemos asignar un arreglo normal a uno de solo lectura.
const miLista3: ReadonlyArray<string> = ['a','b','c'];


//Object types, tuples
type Auto = [string, number];

const prius : Auto = ['Toyota', 2015]
const civic : Auto = ['Honda', 2016]

console.log('El Prius es marca: ', prius[0], ' y modelo: ', prius[1])
console.log('El Civic es marca: ', civic[0], ' y modelo: ', civic[1])


const prius2 : Auto = ['Toyota', 2015]

const [marca, modelo] = prius;

console.log("La marca del prius es: ", marca);
console.log("El modelo del prius es: ", modelo);


//Rest tuples
type StringNumberBooleans = [string, number, ...boolean[]];
const a: StringNumberBooleans = ["a", 1, true, false, true];

//Readonly tuples
type Auto2 = readonly [string, number];
const prius3: Auto2 = ["Toyota", 2014];
//prius3[0] = 'Honda'; //esta línea generaría un error porque es "read only"