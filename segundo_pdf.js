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
console.log("Mi automovil es un  " + miAutomovil.nombre);
