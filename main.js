//1.- Saludar
function saludar(nombre) {
    return "shola, " + nombre;
}
console.log(saludar("Ulises Heraldez"));
//2.- Tipos, Boolean
var esVerdadero = true;
console.log(esVerdadero);
var futbolista;
futbolista = ['Messi', 34];
console.log("El nombre es " + futbolista[0]);
console.log("La edad es " + futbolista[1]);
//3.- Tipos, Number
var entero = 6;
var hexadecimal = 0xf00d;
var binario = 10;
var octal = 484;
//4.- Tipos, String
var marca = 'Toyota';
var modelo = "Tacoma";
//uso del caracter backtick
var nombre = "Raul";
var apellido = "Jimenez";
var impresion = "\nNombre: " + nombre + "\nApellido: " + apellido + "\n";
//5.- Tipos, Arrays
var listaDeNumeros = [1, 2, 3];
listaDeNumeros.push(1);
var listaDeNumeros = [1, 2, 3];
//6.- Tipos, Tuples
var futbolista;
futbolista = ['Messi', 34];
console.log("El nombre es " + futbolista[0]);
console.log("La edad es " + futbolista[1]);
//7.- Tipos, Enums
var MarcasDeAutos;
(function (MarcasDeAutos) {
    MarcasDeAutos[MarcasDeAutos["Toyota"] = 100] = "Toyota";
    MarcasDeAutos[MarcasDeAutos["Chevrolet"] = 101] = "Chevrolet";
    MarcasDeAutos[MarcasDeAutos["Ford"] = 102] = "Ford";
})(MarcasDeAutos || (MarcasDeAutos = {}));
var tacoma = MarcasDeAutos.Toyota;
console.log(tacoma);
console.log(MarcasDeAutos[0]);
var stringOne = MarcasDeAutos[1];
var stringTwo = MarcasDeAutos[MarcasDeAutos.Chevrolet];
console.log(MarcasDeAutos[0]);
console.log(MarcasDeAutos[1]);
//8.- Tipos, Any
var variableSinTipo = 'Hola Ulises';
variableSinTipo = 100;
//9.- Tipos, Unknown
var valorDesconocido = 4;
valorDesconocido = true;
//10.- Tipos, Void
function saludar2() {
    console.log("Hola Mundo... Cruel");
}
saludar2();
//11.- Tipos, Null y Undefined
var variableSinDefinir = undefined;
var variableNula = null;
crear({ prop: 0 });
crear(null);
crear(undefined);
crear([]);
//False es un tipo primitivo, por lo cual se generará un error
//crear(false);
//14.- Tipos, Union
function imprimirId(id) {
    console.log("El id es " + id);
}
imprimirId(1);
imprimirId('abc');
//15.- Uniones
function imprimirId2(id) {
    if (typeof id === "string") {
        console.log("El id es " + id.toUpperCase());
    }
    else {
        console.log("El id es " + id.fixed());
    }
}
imprimirId2('este_es_mi_id');
imprimirId2(100.234234123);
//16.- Tipos, Type Assertion
var algunValor = "esto es un string";
var longitudDelString = algunValor.length;
var algunValor2 = "este es un string";
var longitudDelString2 = algunValor.length;
//17.- Tipos, Functions
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3("Nubia");
//18.- Tipos de valor de retorno de la función
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
//19.- Funciones Anónimas
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenada(punto) {
    console.log("La coordenada x es : " + punto.x);
    console.log("La coordenada y es : " + punto.y);
}
imprimirCoordenada({ x: 10, y: 25 });
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
function crearCuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
crearCuadrado({ ancho: 10 });
var punto1 = { x: 10, y: 20 };
punto1.x = 20;
//25.- Tipos, Literales
function imprimir(estadoCivil) {
    console.log(estadoCivil);
}
imprimir('soltero');
//26.- Funciones como expresiones
function saludar4(fn) {
    fn("Hola Mundo");
}
function imprimirEnConsola(s) {
    console.log(s);
}
saludar(imprimirEnConsola);
