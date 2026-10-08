"use strict";
// const juegoAdivinaNumero = (function () {
//   // Variables privadas
//   const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número entre 1 y 100
//   let intentos = 0;
  

//   // Función privada para verificar si ganó
//   const verificar =(numero) => {
//     intentos++;
//     if (numero === numeroSecreto) {
//       return ` ¡Felicidades! Adivinaste el número en ${intentos} intento(s).`;
//     } else if (numero < numeroSecreto) {
//       return " El número secreto es más alto.";
//     } else {
//       return " El número secreto es más bajo.";
//     }
//   }

//   // API pública
//   return {
//     adivinar: function (numero) {
//       if (typeof numero !== "number" || numero < 1 || numero > 100) {
//         return " Ingresa un número válido entre 1 y 100.";
//       }
//       return verificar(numero);
//     },

//     getIntentos: function () {
//       return intentos;
//     },
//   };
// })();

// let numero;
//  numero=prompt("Adivina el número entre 1 y 100 (Cancelar->Fin)");
//  console.log(numeroSecreto);
// while (numero!=null){
//     console.log(juegoAdivinaNumero.adivinar(Number(numero)));
//     numero=prompt("Adivina el número entre 1 y 100 (Cancelar->Fin)");
// }


const numeroSecreto = Math.floor(Math.random() * (100 -1 + 1)) + 1; // Número entre 1 y 100
let intentos = 0;
let numero;

// Función privada para verificar si ganó
const verificar = (numero) => {
  intentos++;
  if (numero === numeroSecreto) {
    
    return ` ¡Felicidades! Adivinaste el número en ${intentos} intento(s).`;
  } else if (numero < numeroSecreto) {
    return " El número secreto es más alto.";
  } else {
    return " El número secreto es más bajo.";
  }
};

const adivinar = (numero) => {
  if (typeof numero !== "number" || numero < 1 || numero > 100) {
    return " Ingresa un número válido entre 1 y 100.";
  }
  return verificar(numero);
};

const getIntentos = () => {
  return intentos;
};

//script
numero=prompt("Adivina el número entre 1 y 100 (Cancelar->Fin)");
while (numero!=null){
    console.log(adivinar(Number(numero)));
    numero=prompt("Adivina el número entre 1 y 100 (Cancelar->Fin)");
}

console.log(getIntentos()); // Muestra cuántos intentos llevas
