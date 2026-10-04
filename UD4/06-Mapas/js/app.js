"use strict"
/**
 * MAP (MAPAS)
 * ---------------------------------------------------------
 * Un Map es una colección de pares clave-valor.
 *
 * Cada elemento tiene:
 *
 *      clave  →  valor
 *
 * Características principales:
 * - Las claves no pueden estar duplicadas.
 * - Las claves pueden ser de cualquier tipo.
 * - Mantiene el orden de inserción.
 * - Permite añadir, modificar, buscar y eliminar elementos.
 */


// =========================================================
// 1. CREAR UN MAP
// =========================================================

const agenda = new Map([
    ["María", 11111111],
    ["José", 22222222],
    ["Juan", 33333333]
]);

console.log(agenda);


// =========================================================
// 2. RECORRER UN MAP
// =========================================================

// Al recorrer directamente un Map obtenemos pares
// [clave, valor].

for (const datos of agenda) {
    console.log(datos);
}

// Resultado:
// ["María", 11111111]
// ["José", 22222222]
// ["Juan", 33333333]


// =========================================================
// 3. OBTENER CLAVE Y VALOR POR SEPARADO
// =========================================================

for (const [nombre, telefono] of agenda) {
    console.log(`El teléfono de ${nombre} es ${telefono}`);
}


// =========================================================
// 4. OBTENER SOLO LAS CLAVES
// =========================================================

for (const nombre of agenda.keys()) {
    console.log(`Nombre: ${nombre}`);
}


// =========================================================
// 5. OBTENER SOLO LOS VALORES
// =========================================================

for (const telefono of agenda.values()) {
    console.log(`Teléfono: ${telefono}`);
}


// =========================================================
// 6. AÑADIR UN ELEMENTO
// =========================================================

// set() añade un nuevo par clave-valor.

agenda.set("Olga", 3434343);

console.log(agenda);


// =========================================================
// 7. MODIFICAR UN ELEMENTO
// =========================================================

// Si la clave ya existe, set() NO crea un nuevo elemento.
// Simplemente modifica su valor.

agenda.set("María", 888888);

console.log(agenda);

// María ahora tiene el teléfono 888888.


// =========================================================
// 8. COMPROBAR SI EXISTE UNA CLAVE
// =========================================================

if (agenda.has("Juan")) {
    console.log("Juan existe en la agenda");
} else {
    console.log("Juan no existe en la agenda");
}

// Las claves distinguen mayúsculas y minúsculas.

console.log(agenda.has("Juan"));
// true

console.log(agenda.has("juan"));
// false


// =========================================================
// 9. OBTENER EL VALOR DE UNA CLAVE
// =========================================================

console.log(
    `El teléfono de Juan es ${agenda.get("Juan")}`
);

// Si la clave no existe, get() devuelve undefined.

console.log(agenda.get("Pedro"));
// undefined


// =========================================================
// 10. ELIMINAR UN ELEMENTO
// =========================================================

// delete() elimina el elemento cuya clave indicamos.

agenda.delete("Olga");

console.log(agenda);


// =========================================================
// 11. TAMAÑO DEL MAP
// =========================================================

console.log(`El tamaño de la agenda es ${agenda.size}`);


// =========================================================
// 12. ELIMINAR TODOS LOS ELEMENTOS
// =========================================================

// clear() elimina todos los elementos.

// agenda.clear();

// console.log(agenda); // Map(0) {}


// =========================================================
// 13. RECORRER CON forEach()
// =========================================================

agenda.forEach((telefono, nombre) => {
    console.log(`${nombre}: ${telefono}`);
});


// =========================================================
// 14. CONVERTIR UN MAP EN ARRAY
// =========================================================

// El spread operator convierte las entradas del Map
// en un array de pares [clave, valor].

const aAgenda = [...agenda];

console.log(aAgenda);


// Resultado aproximado:
//
// [
//     ["María", 888888],
//     ["José", 22222222],
//     ["Juan", 33333333]
// ]
