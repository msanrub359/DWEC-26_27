"use strict"
import { Alumno } from "./appAlumno.js";
import { IES} from "./appIES.js";
//

/**
 * @description Añadir alumnos en la tabla
 */
const addAlumnos=(instituto)=>{
    let nomAlu=prompt("Introduzca el nombre del alumno. Cancelar=Salir");
    while (nomAlu !=null){
        const apeAlu=prompt("Introduzca los apellidos del alumno");
        const edadAlu=Number(prompt("Introduzca la edad del alumno"));
        //añadir el alumno al array
        // aAlumnos.push(Alumno.crearAlumno(nomAlu, apeAlu,edadAlu));
        // //añadir módulos
        // //aAlumnos[aAlumnos.length-1]
        // aAlumnos.at(-1).addModulo("DWEc");
        // aAlumnos.at(-1).addModulo("DIW");
        const alumno=Alumno.crearAlumno(nomAlu, apeAlu,edadAlu);
        alumno.addModulo("DWEc");
        alumno.addModulo("DIW")
        instituto.addAlumno(alumno)

        nomAlu=prompt("Introduzca el nombre del alumno. Cancelar=Salir");
    }

}

const mostrarAlumnos = (instituto) =>{
    instituto.alumnos.sort((a,b)=> b.edad - a.edad); //ordena por edad descendente
  
    return instituto.alumnos.map(alumno=>alumno.toString()).join("");
}
//body script
try {
    const instituto = new IES("Trassierra")
    addAlumnos(instituto);
    document.querySelector("#mostrar").innerHTML=mostrarAlumnos(instituto);
} catch (error) {
    console.error(`Error!! ${error}`)
}

