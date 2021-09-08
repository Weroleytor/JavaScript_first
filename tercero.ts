function sumar(num) {
    return num.a + num.b + num.c;
}

const numeros = { a: 1, b: 2, c: 3};

console.log(sumar(numeros));


function sumar2(a, b, c) {
    return a + b + c;
}


console.log(sumar(numeros));


function sumar3({a, b, c}: {a: number; b: number; c: number}): number{
    return a + b + c;
}

console.log(sumar3({a: 1, b: 2, c:3}));

function saludar(persona: { nombre: string; edad: number}) {
    return `Hola ${persona.nombre}`;
}

console.log(saludar({ nombre: "Luis", edad: 22}))

interface Persona {
    nombre: string;
    edad: number;
}
function saludar2(persona: Persona) {

}


type Persona2 = {
    nombre: string;
    edad: number;
}


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





interface Perro {
    readonly raza: string;
}

const miCachorro: Perro = { raza: "Shitzu" };

console.log(`La raza de mi cachorro es: ${miCachorro.raza}`);

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
//Pedro.edad++;

console.log(Luis);
console.log(Pedro);



interface Direccion {
    nombre: string;
}