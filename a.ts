interface Transporte {
    nombre: string;   
}
    class Caballo2 implements Transporte{
        constructor(public nombre: string) {}
}
    class Automovil2 implements Transporte {
        constructor(public nombre: string) {}
}
    type ConstructorDeTransporte2 = {
    new (nombre: string): Transporte;
};

    function construirTransporte(ctr: ConstructorDeTransporte, nombre: string)
    return new ctr(nombre);
}

const miCaballo2 = construirTransporte(Caballo, "Paso Fino");
const miAutomovil2 = construirTransporte(Automovil, "Toyota");

console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi automovil es un  " + miAutomovil.nombre);