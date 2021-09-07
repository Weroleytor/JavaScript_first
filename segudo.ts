
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
    