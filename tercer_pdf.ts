class Punto {
    x: number;
    y: number;
    a; // cualquier tipo
    b = 0; // tipo numero
}

const miPunto = new Punto();
miPunto.x = 0;
miPunto.y = 0;


class Saludo {
    readonly nombre: string = "mundo";
    constructor(nuevoNombre: string) {
        if (!!nuevoNombre) {
            this.nombre = nuevoNombre; // correcto, asignación es valida dentro del constructor
        }
    }

    asignarNuevoNombre(nuevoNombre: string){
        //this.nombre = nuevoNombre; //error, no se puede asignar valor fuera del constructor
    }
}

const miNombre = new Saludo("Elio"); // correcto, asignación mediante el constructor
//miNombre.nombre = "Alejandro"; // error, no se puede asignar valor fuera del constructor


class Punto2 {
    x: number;
    y: number;

    // asignar normal utilizando valores por default
    constructor(x = 10, y = 10) {
        this.x = x;
        this.y = y;
    }
}

let miPunto2 = new Punto2();
console.log(miPunto2.x);
console.log(miPunto2.y);


class Punto3 {
    // uso de sobrecarga
    constructor(x: number, y: number);
    constructor(s: string);
    constructor(xs: number | string, y?: number) {

    }
}


class Figura {
    lados = 0;
}

class Circulo extends Figura {
    constructor() {
        //this.lados = 2; // esto generará un error
        super();
        // a partir de este punto se puede utilizar this
    }
}


class Video {
    titulo: string;

    constructor(titulo: string) {
        this.titulo = titulo;
    }

    reproducir(): void {
        console.log(`${this.titulo} se está reproducioendo`);
    }
}

const miVideo = new Video("año nuevo");
miVideo.reproducir();


let titulo = "mi graduacion"; // (1)

class Video2 {
    titulo: string; // (2)

    asignarTitulo(nuevoTitulo: string){
        titulo = nuevoTitulo; // esto hace referencia a (1)
        this.titulo = nuevoTitulo; // esto hace referencia a (2)
    }
}


class Desfile {
    private _participantes = 0;

    get participantes(): number {
        return this._participantes;
    }

    set participantes(v: number) {
        this._participantes = v;
    }
}

const desfileHoy = new Desfile();
desfileHoy.participantes = 100;
console.log(desfileHoy.participantes); // 100


interface Encendible {
    encender(): void;
}

class Television implements Encendible{ // se generará un error mientras no se haya definido el método de la interface encender
    encender(): void {
        console.log("El televisor se ha encendido");
    }
}

interface Verificable {
    verificar(nombre: string): boolean;
}

class NombreVerificable implements Verificable {
    verificar(nombre): boolean { // nombre se convierte en un parámetro typo any
        return nombre.toLowerCase();
    }
}


class Animal {
    moverse() {
        console.log("El animal se mueve");
    }
}

class Perro extends Animal {
    ladrar() {
        console.log("El perro ladra");
    }
}

const miPerro = new Perro();
miPerro.moverse();
miPerro.ladrar();


class Padre {
    saludar() {
        console.log("Hola");
    }
}

class Hijo extends Padre {
    saludar(nombre?: string) {
        if (!!nombre) {
            console.log(`Hola ${nombre}`);
        } else {
            super.saludar();
        }
    }
}

const hijo = new Hijo();
hijo.saludar();
hijo.saludar("Luis");

const h : Padre = new Hijo();


class Definicion {
    nombre = "definicion";
    constructor() {
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

class Implementacion extends Definicion {}
const d = new Implementacion();


class Saludo2 {
    public saludar() {
        console.log("Saludar!");
    }
}

const inst = new Saludo2();
inst.saludar();



class Saludo3 {
    protected getDestinatario() {
        return "amigos";
    }
}

class SaludoEspecial extends Saludo3 {
    saludar() {
        console.log(`Hola ${this.getDestinatario()}`); // accedemos al método protected
    }
}

const saludo: SaludoEspecial = new SaludoEspecial(); 
saludo.saludar();
//saludo.getDestinatario(); //error, no se tiene acceso de forma pública


class Base {
    protected m = 10;
}

class Derivada extends Base {
    m = 15;
}

const d2 = new Derivada();
console.log(d2.m);


class Base2 {
    protected x: number = 1;
}

class Derivada2 extends Base2 {
    protected x: number = 5;
}

class Derivada3 extends Base2{
    imprimirx(c1: Derivada3){ // Si reemplazamos Derivada2 por Derivada1 esto generará un error ya que esta fuera de su scope
       
        console.log(c1.x);
    }
}


class Base4 {
    private x = 0;
}

class Derivada4 extends Base4 {
    imprimirX() {
        // console.log(this.x); //esta linea generará un error
    }
}

const b4 = new Base4();
//console.log(b4.x); // esta linea también generará un error


class A {
    private x = 10;

    public imprimirX(otra: A){
        console.log(otra.x); // podemos acceder a una propiedad privada de otra instancia
    }
}

const b = new A();

b.imprimirX(new A());


class MiClase {
    
}







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