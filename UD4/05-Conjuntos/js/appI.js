"use strict"
/**
 * SET (CONJUNTOS)
 * ---------------------------------------------------------
 * Un Set es una colección de valores únicos.
 *
 * A diferencia de los arrays:
 * - No permite valores duplicados.
 * - Mantiene el orden de inserción.
 * - Permite comprobar fácilmente si un valor existe.
 *
 * Los duplicados se eliminan automáticamente.
 */

// =========================================================
// 1. CREAR UN SET
// =========================================================

// Podemos crear un Set pasando un iterable, por ejemplo un array.
const conjuntoI = new Set(["ana", "Ana"]);
const conjuntoII = new Set([1, 2, 3]);

console.log(conjuntoI);


console.log(conjuntoII);



// =========================================================
// 2. CREAR UN SET A PARTIR DE UN ARRAY
// =========================================================

const aNumeros = [1, 2, 3, 3, 2, 1];

const conjuntoIII = new Set(aNumeros);

console.log(conjuntoIII);  // Set(3) { 1, 2, 3 }

// Los valores duplicados se eliminan automáticamente.


// =========================================================
// 3. CREAR UN SET CON add()
// =========================================================

const conjuntoIV = new Set();

conjuntoIV
    .add(1)
    .add(2)
    .add(3);

console.log(conjuntoIV); // Set(3) { 1, 2, 3 }


// =========================================================
// 4. AÑADIR ELEMENTOS
// =========================================================

conjuntoI.add("Carlos");

console.log(conjuntoI); // Set(3) { "ana", "Ana", "Carlos" }

// Si intentamos añadir un valor que ya existe,
// no se crea un duplicado.

conjuntoI.add("Ana");

console.log(conjuntoI); // Set(3) { "ana", "Ana", "Carlos" }


// =========================================================
// 5. ELIMINAR ELEMENTOS
// =========================================================

// delete() elimina un elemento.
// Devuelve true si lo ha encontrado y eliminado.
// Devuelve false si el elemento no existía.

console.log(conjuntoI.delete("ana")); // true

console.log(conjuntoI.delete("Pedro")); // false

console.log(conjuntoI);


// =========================================================
// 6. COMPROBAR SI EXISTE UN ELEMENTO
// =========================================================

// has() devuelve true o false.

console.log(conjuntoIV.has(2)); // true

console.log(conjuntoIV.has(20)); // false


// =========================================================
// 7. CONOCER EL NÚMERO DE ELEMENTOS
// =========================================================

console.log(conjuntoIV.size); // 3


// =========================================================
// 8. RECORRER UN SET
// =========================================================

conjuntoIV.forEach(function(elemento) {
    console.log(elemento);
});

// También podemos utilizar for...of:

for (const elemento of conjuntoIV) {
    console.log(elemento);
}


// =========================================================
// 9. ELIMINAR TODOS LOS ELEMENTOS
// =========================================================

// clear() elimina todos los elementos.

// conjuntoIV.clear();

// console.log(conjuntoIV); // Set(0) {}


// =========================================================
// 10. CONVERTIR UN SET EN ARRAY
// =========================================================

const aNum = [...conjuntoIV];

console.log(aNum);
// [1, 2, 3]

console.log(Array.isArray(aNum));
// true


// =========================================================
// 11. EJEMPLO PRÁCTICO:
//     ELIMINAR DUPLICADOS DE UN ARRAY
// =========================================================

const nombres = [
    "Ana",
    "Luis",
    "Ana",
    "Marta",
    "Luis"
];

const nombresSinDuplicados = [...new Set(nombres)];

console.log(nombresSinDuplicados); // ["Ana", "Luis", "Marta"]

