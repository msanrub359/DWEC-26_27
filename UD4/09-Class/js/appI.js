"use strict"; 
/*
Las clases son una mejora sintáctica sobra la herencia basada en prototipos
-Ofrecen una sintaxis más simple para crear las clases
-No utiliza la palabra function. 
-Utiliza la palabra class
-Las propiedades se asignan en un método constructor()
*/
//class
class Electro{
    //constructor
    constructor(nombre="Horno",precio=200, color='blue'){
        this.nombre=nombre;
        this.precio=precio;
        this.color=color;
        this.disponible=true;
    }
   
    //métodos 
    toString(){
        return `El electrodomestico es ${this.nombre} y el precio es ${this.precio} y tienen el color ${this.color}`;
    }
    

}


//Herencia
class DispElec extends Electro{ 
    //crear el constructor
    constructor(nom, precio, color, disco, ram){
        super(nom, precio,color); //propiedades de la clase base
        this.disco=disco;
        this.ram=ram;
    }
        
   toString(){
        return `${super.toString()}\n El disco duro es de ${this.disco} y la memoria es de ${this.ram}`;
    }
}

//cuerpo stript
const horno=new Electro();
const frigo=new Electro("Frigo", 200,'red');
console.log(frigo, horno);

const portatil=new DispElec("HP", 700, "white", "500Gb", '12Gb');
console.log(portatil);
console.log(portatil.toString());







