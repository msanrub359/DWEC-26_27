"use strict"
/**
 * @description copias de arrays se realizan por referencia. Para realizar copias por valor, utilizaremos spread
 * Spread permite simplificar la recogida de valores en una estructura de datos. El Spread se represanta con:...
 * 
 * 
 */
//declaraciones

//script
const aNumeros=[1,2,3,,4,"María"];
const aCopia=aNumeros; //copia por referencia, no es una copia real, si modificamos aNumeros, también se modifica aCopia
const aCopiaSpread=[...aNumeros]; //copia por valor, si modificamos aNumeros, no se modifica aCopiaSpread
const aCopiaSpreadII=["uno", "dos", ...aNumeros, "seis"]; //
const aCopiaSlice=aNumeros.slice(); //copia por valor, si modificamos aNumeros, no se modifica aCopiaSlice

aNumeros.push(100); //añadir un elemento al array aNumeros

console.log({aCopia}, {aNumeros}, {aCopiaSpread}, {aCopiaSpreadII}, {aCopiaSlice});



