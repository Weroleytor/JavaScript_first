var _this = this;
var Caballo = /** @class */ (function () {
    function Caballo(nombre) {
        this.nombre = nombre;
    }
    return Caballo;
}());
var Automovil = /** @class */ (function () {
    function Automovil(nombre) {
        this.nombre = nombre;
    }
    return Automovil;
}());
function construirTransporte(ctr, nombre) {
    return new ctr(nombre);
}
var miCaballo = construirTransporte(Caballo, "Paso Fino");
var miAutomovil = construirTransporte(Automovil, "Toyota");
console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi automovil es un " + miAutomovil.nombre);
//Functiones, parámetros opcionales
function f(n) {
    console.log(n.toFixed()); //no se especifican argumentos
    console.log(n.toFixed(3)); //se especifica un argumento
}
function f2(n) {
    // ..
}
function f3(n) {
    if (n === void 0) { n = 10; }
    // ..
}
//Parámetros opcionales en los callbacks
function miIterador(arr, callback) {
    for (var i = 0; i <= arr.length; i++) {
        callback(arr[i], i);
    }
}
miIterador([1, 2, 3], function (a) { return console.log(a); });
miIterador([1, 2, 3], function (a, i) { return console.log(a, i); });
function miIterador2(arr, callback) {
    for (var i = 0; i <= arr.length; i++) {
        //aquí es donde index es opcional o no
        callback(arr[i]);
    }
}
function longitud(x) {
    return x.length;
}
console.log(longitud("Hola mundo"));
console.log(longitud([1, 2, 3, 4, 5]));
function calcularLongitud(x) {
    return x.length;
}
console.log(longitud("Hola mundo"));
console.log(longitud([1, 2, 3, 4, 5]));
//Funciones, uso de "this"
var usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true;
    }
};
console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);
var usuario2 = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        _this.admin = true;
    }
};
console.log(usuario2.admin);
usuario.volverseAdmin();
console.log(usuario2.admin);
//Funciones, rest parametres
function multiplicar(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.reduce(function (p, c) {
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
var numeros = { a: 1, b: 2, c: 3 };
console.log(sumar(numeros));
function sumar2(a, b, c) {
    return a + b + c;
}
console.log(sumar({ a: 1, b: 2, c: 3 }));
function sumar3(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar3({ a: 1, b: 2, c: 3 }));
//Object types
function saludar(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar({ nombre: "Luis", edad: 22 }));
function saludar2(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar2({ nombre: "Elena", edad: 25 }));
function saludar3(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar3({ nombre: "Anabel", edad: 30 }));
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
//Pedro.edad++; <-- esto genera un error porque es "read only"
console.log(Luis);
console.log(Pedro); //se actualiza el valor porque se "linkean"
var macbookPro = {
    memoria: "16G",
    procesador: "intel",
    hdd: "1TB",
    so: "osx",
    version: "catalina",
    bateria: "litio",
    monitor: "17 pulgadas",
    teclado: "español"
};
var ubuntuServer = {
    memoria: "64G",
    procesador: "intel",
    hdd: "4TB",
    so: "ubuntu",
    version: "tusty",
    conexion: "ethernet"
};
var macbookPro3 = {
    memoria: "16G",
    procesador: "intel",
    hdd: "1TB",
    so: "osx",
    version: "catalina"
};
var x = {
    contenido: "hola mundo"
};
//mediante typeof podemos verificar si el tipo es string
if (typeof x.contenido === "string") {
    console.log(x.contenido.toLocaleLowerCase());
}
//mediante "as tipo" podemos decirle al compilador que esto es siempre string
console.log(x.contenido.toLocaleLowerCase());
function setContenido(caja, nuevoContenido) {
    caja.contenido = nuevoContenido;
}
var cajaDeString = { contenido: "hola mundo" };
var cajaDeNumero = { contenido: 100 };
var cajaDeFecha = { contenido: new Date() };
var cajaDeString2 = { contenido: "hola mundo" };
var cajaDeNumero2 = { contenido: 100 };
var cajaDeFecha2 = { contenido: new Date() };
//Object types, array type
var imprimirTareas = function (v) {
    v.forEach(function (v) {
        console.log(v);
    });
};
var misTareas = [
    "levantarse",
    "lavarse los dientes",
    "sacar al perro",
];
imprimirTareas(misTareas);
//Object types, readonlyarray type
var miLista = ["a", "b", "c"];
//miLista.push("d"); //esta línea generaría un error
//A diferencia de Array, no existe el constructor ReadonlyArray que pueda 
//ser utilizado. Por lo cual no se puede crear un arreglo ReadonlyArray de la 
//siguiente forma.
//const miLista2 = new ReadonlyArray('a','b','c'); 
//En lugar de ello podemos asignar un arreglo normal a uno de solo lectura.
var miLista3 = ['a', 'b', 'c'];
var prius = ['Toyota', 2015];
var civic = ['Honda', 2016];
console.log('El Prius es marca: ', prius[0], ' y modelo: ', prius[1]);
console.log('El Civic es marca: ', civic[0], ' y modelo: ', civic[1]);
var prius2 = ['Toyota', 2015];
var marca = prius[0], modelo = prius[1];
console.log("La marca del prius es: ", marca);
console.log("El modelo del prius es: ", modelo);
var a = ["a", 1, true, false, true];
var prius3 = ["Toyota", 2014];
//prius3[0] = 'Honda'; //esta línea generaría un error porque es "read only"
