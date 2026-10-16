export class IES{
    static instancia=null
    #nombre;
    #alumnos;
    constructor(nom){
        if (IES.instancia){
            return IES.instancia
        }
        this.nombre=nom;
        this.#alumnos=[];
        //almacena la instancia creada en la variable estática
        IES.instancia=this;
    }
    get nombre() {
        return this.#nombre;
    }
    
    set nombre(valor) {
        if (typeof valor !== 'string' || valor.trim() === '') {
            throw new Error('Nombre no válido');
        }
        this.#nombre = valor;
    }
    get alumnos(){
        return this.#alumnos
    }

    addAlumno(alumno){
        this.#alumnos.push(alumno)
    }
}
