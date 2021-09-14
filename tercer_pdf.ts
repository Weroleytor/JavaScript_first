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