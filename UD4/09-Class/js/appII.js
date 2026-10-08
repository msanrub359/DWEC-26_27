"use strict";
//variables y métodos static.
// static en métodos y propiedades significa que pertenecen a la clase, no a los objetos individuales.
//Son útiles para contadores, constantes, utilidades o constructores alternativos.
class Electro{
     //
     static contador=0; //propiedad estática
    //constructor
    constructor(nombre="Horno",precio=200, color='blue'){
        this.nombre=nombre;
        this.precio=precio;
        this.color=color;
        this.disponible=true;
        Electro.contador++;
    }
   
    //métodos 
    toString(){
        return `El electrodomestico es ${this.nombre} y el precio es ${this.precio} y tienen el color ${this.color}`;
    }
    

    static crearElectro(nombre, precio, color) {
        return new Electro(nombre, precio, color);
      }
    static mostrarContador(){
      return `Se han creado ${Electro.contador} electrodomésticos.` 
    }
    
}

//cuerpo stript
const frigo= new Electro();
const frigoStatic = Electro.crearElectro("Frigo Static", 300,'blue');
console.log(Electro.contador);
console.log(Electro.mostrarContador());
console.log( frigoStatic);
console.log(frigoStatic.toString());
