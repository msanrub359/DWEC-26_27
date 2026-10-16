"use strict"
/**
 * @description Diferencias entre la iteración de arrays con forEach y map
 */
//declaraciones

const aNumeros=[1,2,3,4]

//crear dos arrays, recorriendo conforEach y map
const aNumerosForEach=aNumeros.forEach(numero=>{
    console.log("forEach",numero*2);
    return numero*2
}); //aNumerosForEachsería un array

// const aNumerosMap=aNumeros.map(numero=>{
//     console.log("Map",numero*2);
//      return numero*2
// });
const aNumerosMap=aNumeros.map(numero=>numero*2)


//cuerpo script

console.log({aNumerosForEach});
console.log({aNumerosMap});
