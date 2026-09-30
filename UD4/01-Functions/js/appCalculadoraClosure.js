"use strict"

function crearCalculadora() {
  let total = 0; // Variable privada que almacena el total



  // función declarativa

  function sumar(cantidad) {
    total += cantidad;
    return total;
  }

  // expresión de función
  const restar = function (cantidad) {
    total -= cantidad;
    return total;
  }
  // expresión de función arrow para obtener el valor actual del total
  const obtenerTotal = () => total;


  // función para reiniciar el valor total a 0
  const reiniciar = () => {
    total = 0;
    return total;
  }
  // Retornar un objeto con las funciones que queremos exponer
  return {
    sumar,
    restar,
    obtenerTotal,
    reiniciar
  };
}

// Crear una nueva calculadora
const calculadora = crearCalculadora();

console.log(calculadora.sumar(10));     // 10
console.log(calculadora.restar(4));     // 6
console.log(calculadora.obtenerTotal()); // 6
console.log(calculadora.reiniciar());   // 0
console.log(calculadora.sumar(5));      // 5
