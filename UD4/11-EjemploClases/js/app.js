"use strict"
import { Alumno } from "./appAlumno.js";
//
const aAlumnos=[];
/**
 * @description Añadir alumnos en la tabla
 */
const addAlumnos=()=>{
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
        aAlumnos.push(alumno)

        nomAlu=prompt("Introduzca el nombre del alumno. Cancelar=Salir");
    }

}

const mostrarAlumnos = () =>{
    aAlumnos.sort((a,b)=> b.edad - a.edad); //ordena por edad descendente
  
    return aAlumnos.map(alumno=>alumno.toString()).join("");
}
//body script
try {
    addAlumnos();
    document.querySelector("#mostrar").innerHTML=mostrarAlumnos();
} catch (error) {
    console.error(`Error!! ${error}`)
}

