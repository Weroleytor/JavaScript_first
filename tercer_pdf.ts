class Saludo {
    protected getDestinatario() {
        return "amigos";
    }
}

class SaludoEspecial extends Saludo {
    saludar() {
        console.log(`Hola ${this.getDestinatario()}`);
    }
}

const saludo: SaludoEspecial = new SaludoEspecial();
saludo.saludar();
//saludo.getDestinatario();


class Base {
    protected m = 10;
}

class Derivada extends Base {
    m = 15;
}

const d = new Derivada();
console.log(d.m);



class Caja<T>{
    contenido: T;

    constructor(value: T) {
        this.contenido = value;
        console.log(this.contenido);
    }
}

type Juguete = {
    nombre: string;
};

const misJuguetes: Juguete[] = [];
misJuguetes.push({ nombre: "Pelota" });
misJuguetes.push({ nombre: "Consola" });

const miCajaDeJuguetes: Caja<Juguete[]> = new Caja(misJuguetes);

type Maquillaje = {
    nombre: string;
};

const miMaquillaje: Maquillaje[] = [];
miMaquillaje.push({ nombre: "Sombras" });
miMaquillaje.push({ nombre: "Labial" });

const MiCajaDeMaquillaje: Caja<Maquillaje[]> = new Caja(miMaquillaje);


class Caja2 {
    contenido = "";
    contenido2 = "Test";
    set(valor: string) {
        this.contenido = valor;
        return this;
    }
}

const miCaja2: Caja2 = new Caja2();
const valorRetornado = miCaja2.set("Joyas");
console.log(miCaja2);
console.log(valorRetornado);