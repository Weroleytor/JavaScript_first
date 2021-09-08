function sumar(num) {
    return num.a + num.b + num.c;
}
var numeros = { a: 1, b: 2, c: 3 };
console.log(sumar(numeros));
function sumar2(a, b, c) {
    return a + b + c;
}
console.log(sumar(numeros));
function sumar3(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar3({ a: 1, b: 2, c: 3 }));
function saludar(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar({ nombre: "Luis", edad: 22 }));
function saludar2(persona) {
}
function imprimir(computador) {
    console.log("Sistema operativo: " + computador.os);
    console.log("Memoria: " + computador.memoria);
    console.log("Procesador: " + computador.procesador);
}
imprimir({
    os: 'Windows',
    memoria: 8,
    procesador: 'intel'
});
var miCachorro = { raza: "Shitzu" };
console.log("La raza de mi cachorro es: " + miCachorro.raza);
var Luis = { edad: 20 };
var Pedro = Luis;
Luis.edad++;
//Pedro.edad++;
console.log(Luis);
console.log(Pedro);
