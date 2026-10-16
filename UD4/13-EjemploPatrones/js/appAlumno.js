"use strict"
export class Alumno {
    //contador estático
    static numAlumnos=0;
    //propiedades privadas
    #nombre;
    #apellidos;
    #edad;
    #modulos;
    constructor(nom, ape, edad) {
        this.nombre=nom; //saltan los setter
        this.apellidos=ape;
        this.edad=edad;
        this.#modulos=[];
        Alumno.numAlumnos++;
    }
    //getter y setter
    get nombre() {
        return this.#nombre;
    }
    
    set nombre(valor) {
        if (typeof valor !== 'string' || valor.trim() === '') {
            throw new Error('Nombre no válido');
        }
        this.#nombre = valor.toLocaleUpperCase();
    }
    get edad() {
        return this.#edad;
    }
    
    set edad(valor) {
        if (isNaN(valor) || valor < 0) {
            throw new Error('Edad tiene que ser un número o positivo');
        }
        this.#edad = valor;
    }
    get apellidos() {
        return this.#apellidos;
    }
    
    set apellidos(valor) {
        if (typeof valor !== 'string' || valor.trim() === '') {
            throw new Error('Apellidos debe ser cadena y no estar vacía');
        }
        this.#apellidos = valor.toLocaleUpperCase();
    }
    get modulos(){
        return [...this.#modulos];
    }
    
    //métodos
    addModulo(modulo){
        const aModulos=['DWEC', 'DIW', 'DWES', 'INGLES', 'IPE2', 'DAW'];
        //controlar que el parámetro no está vacío
        if(!modulo ||modulo.trim().length==0){
            throw new Error("El párametro módulo no puede estar vacío");
            
        }
        const existeMod= aModulos.find(mod=>mod ==modulo.toLocaleUpperCase());
        if (!existeMod){
            throw new Error ("El módulo no existe")
        }
        this.#modulos.push(modulo.toLocaleUpperCase());  //añadir el módulo

    }
    toString(){
        return `Nombre: ${this.#nombre} Apellidos ${this.#apellidos} Edad: ${this.#edad} Modulos: ${this.#modulos.join(" - ")}<br>`
    }
    // método estático
    static crearAlumno (nom, ape, edad){
        return new Alumno(nom, ape, edad)
    }
}
