"use strict";
//propiedades y métodos privados
// Encapsulación real: los datos no pueden ser leídos ni modificados desde fuera.

// Seguridad: se evita manipular directamente el estado interno del objeto.

// Control: el acceso debe hacerse a través de métodos públicos (getters/setters).

// Mantenibilidad: se puede cambiar la implementación interna sin afectar a quien usa la clase.

//getter y setter, se utilizan para asignar y extraer datos de las propiedades
//de un objeto. son métodos especiales que permiten acceder y modificar los atributos
// de un objeto de manera controlada. Sirven para encapsular el acceso a los datos internos de un objeto.
//Es importante tener en cuenta que el nombre de los getters/setters

class Alumno {
  //campos privados
  #nombre;
  #apellidos;
  #edad;
  #modulos;
  
  constructor(nom, ape, edad) {
    this.nombre = nom; //usa el setter para la validación
    this.#apellidos = ape;
    this.edad = edad; //usa el setter para la validación
    this.#modulos = [];
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

//cuerpo script
try {
  const alumno = new Alumno("Pepe", "Pérez Rodríguez", 18);
  console.log(alumno.toString());

  alumno.addModulo("Matemáticas");
  alumno.addModulo("Programación");
  console.log(alumno.listarModulos());

  console.log(`¿Es instancia de Alumno? ${alumno instanceof Alumno}`);
} catch (error) {
  console.error("Error:", error.message);
}
