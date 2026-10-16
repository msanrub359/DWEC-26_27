"use strict";
/**
 * @description. Generar un array bidimensional 4*4 con números aleatorios de 1 al 99
 * Mostrar el array por filas y columnas con for primitivo y forEach.
 * La creación del array se realizará en una función y cada iteración en otra función diferente
 *
 */

//declaraciones
const aNumeros=[];

//declaración de funciones
/**
 * @description función para crear el array 4*4
 */
const crear=()=>{
    //crear el array bidimensional 4*4
    for (let fila = 0; fila < 4; fila++) {
        aNumeros[fila]=[]; //crear el array bidimensional
        for (let col = 0; col < 4; col++) {
            aNumeros[fila].push(Math.floor(Math.random()*99)+1)
           
        }
        
    }
}
/**
 * @description función que recorre y muestra el array con for tradicional
 */
const mostrarArrayFor=()=>{
    //crear el array bidimensional 4*4
    for (let fila = 0; fila < aNumeros.length; fila++) {
        for (let col = 0; col < aNumeros[fila].length; col++) {
           document.write(`${aNumeros.at(fila).at(col)} `)
           //document.write(`${aNumeros[fila][col]} `)
        }
        document.write("<br>")
    }
}
/**
 * @description mostrar array con forEcah
 */
const mostrarArrayForEach=()=>{
    //crear el array bidimensional 4*4
    aNumeros.forEach(fila =>{
        fila.forEach(elemento=>{
            document.write(`${elemento} `);
        })
               
        document.write("<br>")
    })
}
/**
 * @description Eliminar una fila
 */
const eliminarFila=(fila)=>{
    aNumeros.splice(fila-1,1); //elimina la fila
    //borrar el primer elemento de una fila
    // aNumeros[fila-1].splice(0,1)
    
}
//insertar una fila en la posición indicada, con 4 elementos
const insertarFila=(fila)=>{
    aNumeros.splice(fila-1,0,[1,2,3,4]); //añadir una fila
    //insertar el primer elemento de una fila
    // aNumeros[fila-1].splice(0,0,100)
    
}
//extraer una fila a un nuevo array
const copiarFila=(fila)=>{
    return [...aNumeros[fila-1]]; //spread
}
//destructuring
const mostrarPrimerasFilas=()=>{
    //crear dos arrays
    const [aFila1,aFila2] =aNumeros; //destructuring
    document.write(`aFila1 ${aFila1.join(' - ')}<br>`);
    document.write(`aFila2 ${aFila2.join(' - ')}<br>`);

}
//body del script
crear();
document.write("<h2> Array con for tradicional</h2>")
mostrarArrayFor();
document.write("<h2> Array con forEach</h2>")
mostrarArrayForEach();
eliminarFila(1);
document.write("<h2> Eliminado una fila</h2>")
mostrarArrayForEach();
insertarFila(2);
document.write("<h2> Insertar una fila</h2>")
mostrarArrayForEach();
const copyFila=copiarFila(1); //array extraida
document.write(`copyFila ->${copyFila.join(' - ')}<br>` )
mostrarPrimerasFilas();