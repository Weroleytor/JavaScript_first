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