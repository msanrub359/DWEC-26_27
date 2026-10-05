"use script"
/**
 * @description Realizar un script que permita crear un array de 20
 * números, rango -500 a 1500, que permita simular transacciones de dinero
 * los números negativos son gastos y los positivos ingresos
 * Utiliza el método find para encontrar la primera transacción con un gasto
 * Utiliza el método some para verificar si hay una transacción con un ingreso mayor de 900
 * Utiliza el método reduce para calcular el saldo total
 * Utiliza el método sort para ordenar las transacciones de forma descendente (mayor a menor)
 */

//declarar array
const aNumeros = [];
const formatoMoneda = new Intl.NumberFormat('es-ES', {
     style: 'currency',
     currency: 'EUR',
     useGrouping: true });

/**
 * @description rellenar el array con números entre -500 y 1500
 */
const rellenarArray = () => { //rellenar el array
 for (let i = 0; i < 20; i++) {
    aNumeros.push(Math.floor(Math.random() * (1500 - (-500) + 1)) + (- 500));
  }
};

/**
 * @description muestra el contenido del array
 * @param {string} texto será el mensaje a visualizar
 */
const mostrarArray = (texto) => {
  document.write(`${aNumeros.join(', ')}<br>`)
};

/**
 * @description muestra los resultados de los métodos find, some, reduce, sort
 * @returns {string} retorna mensajes
 */
const mostrarDatos = () => {
  //utilizando find para encontrar la primera transacción con un gasto
  const primerGasto = aNumeros.find((elemento) => elemento < 0);
  //utilizando some para verificar si hay una transacción con un ingreso mayor de 900
  const ingresoMayor900 = aNumeros.some((elemento) => elemento > 900);
  //utilizando reduce para calcular el saldo total
  const saldoTotal = aNumeros.reduce((acumulador, elemento) => acumulador + elemento, 0);

  return `Primer gasto: ${formatoMoneda.format(primerGasto)}<br>Hay ingreso mayor de 900: ${ingresoMayor900 ? 'Sí' : 'No'}<br>Saldo total: ${formatoMoneda.format(saldoTotal)}<br>`;
};

//script
rellenarArray();
mostrarArray("Transacciones");
document.write(mostrarDatos());
//ordenar el array de forma descendente
aNumeros.sort((a, b) => b - a);
mostrarArray('Transacciones ordenadas')
