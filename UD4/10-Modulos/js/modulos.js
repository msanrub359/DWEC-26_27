"use strict"

export const mensaje="Hola a todos";

export const calcularMedia=()=>{
  return('Hola desde el módulo');
}

const division=()=>{ //no es exportable

}

export class Alumno {
  //campos privados
  #nombre;
  #apellidos;
  #edad;
  #modulos;
  constructor(nom, ape, edad) {
    this.nombre = nom; //usa el setter para la validación
    this.#apellidos = ape;
    this.edad = edad; //usa el setter para la validación
    this.#modulos=[];
  }
  get nombre() {
    console.log("getter");
    return this.#nombre;
  }
  set nombre(value) {
    console.log("setter");
    //controlar entrada de datos
   if (!value || value.trim() === "") {
    throw new Error ("Error, el nombre no puede estar vacío"); //generar un error
   }  
    this.#nombre = value;
  }
  get edad() {
    console.log("getter");
    return this.#edad;
  }
  set edad(value) {
    console.log("setter");
    //controlar entrada de datos
    if (typeof value !== "number" || value < 18) {
      throw new Error("El alumn@ debe ser mayor de edad");
    }
    this.#edad = value;
  }

  //método
  toString() {
    return `El nombre del alumno es ${this.#nombre} ${this.#apellidos} y tiene ${this.#edad} años<br>`;
  }

  // Método para añadir módulos
  addModulo(modulo) {
    if (!modulo || modulo.trim() === "") {
      throw new Error("El módulo no puede estar vacío");
    }
    this.#modulos.push(modulo);
  }

   // Método para listar módulos
  listarModulos() {
    return this.#modulos.join(", ") || "No tiene módulos asignados"; //join, convierte el array a string, concatenando todos los elementos separados por coma y espacio.
                                                                    //Si el array está vacío([]), el resultado es una cadena vacía
  }
}