function longitud(a: any[]): number;
function longitud(x: string): number;
function longitud(x: any): number{
    return x.length;
}


console.log(longitud("Hola mundo"));
console.log(longitud([1, 2, 3, 4, 5]));