"use strict"
/**
 * @description Destructuring, nos permite extraer datos de objetos o arrays y
 * asignarlos a una variable o constante
 * 
 */
//declaraciones

const aAnimales=['león', 'perro', 'gato', 'elefante'];

//asignar el valor del índice 1 a la variable animalPerro
const animalPerro=aAnimales[1];
const animalPerroII=aAnimales.at(1); //Lo mismo que la línea anterior, pero con el método at() que permite acceder a un índice de un array
//destucturing
const [animalI,animalII]=aAnimales ; //destructuring, extrae los dos primeros elementos del array y los almacena en las variables animalI y animalII
const[,,animalIII]=aAnimales; //destructuring, extrae el tercer elemento del array y lo almacena en la variable animalIII

const [animalIV, ...restoAnimales]=aAnimales; //destructuring, extrae el primer elemento del array y lo almacena en la variable animalIV y el resto de elementos en la variable restoAnimales   

//mostrar los valores de las variables en un objeto, para que se vea el nombre de la variable y su valor
console.log({animalPerro}, {animalPerroII}, {animalI}, {animalII}, {animalIII}, {animalIV}, {restoAnimales}); 




