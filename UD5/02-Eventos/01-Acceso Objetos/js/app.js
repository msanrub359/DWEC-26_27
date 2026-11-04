"use strict";

const acceso = () => {
  console.log("=== Acceso a elementos del DOM ===");

  // Ambos métodos reciben un selector CSS: #id, .clase, etiqueta, [atributo]...
  // querySelector devuelve el PRIMER elemento que coincide o null si no hay ninguno.
  console.log("--- querySelector: un elemento ---");

  // Selector por ID.
  const nombre = document.querySelector("#nombreId");
  console.log({ nombre });
  console.log(`Valor del nombre: ${nombre.value }`);

  // Aunque hay varios inputs, querySelector solo devuelve el primero.
  const primerInput = document.querySelector("input");
  console.log({ primerInput });
  console.log(`¿Es el mismo elemento?: ${nombre === primerInput}`);

  // querySelectorAll devuelve TODOS los elementos que coinciden, en orden del DOM.
  // Devuelve un NodeList estático: su lista no se actualiza al añadir o quitar elementos.
  // No es un array, pero permite usar índices, length y forEach.
  console.log("--- querySelectorAll: una colección ---");

  // Selector por atributo: inputs cuyo atributo name vale "nombre".
  const nombres = document.querySelectorAll("[name='nombre']");
  console.log({ nombres });
  console.log(`Valor del segundo campo: ${nombres[1].value }`);

  // Selector por etiqueta.
  const inputs = document.querySelectorAll("input");
  console.log({ inputs });
  console.log(`Cantidad de inputs: ${inputs.length}`);

  // Selector por clase y recorrido de todos los resultados.
  const controles = document.querySelectorAll(".controls");
  console.log({ controles });
  controles.forEach((control, indice) => {
    console.log(`Control ${indice}: id=${control.id}, valor=${control.value}`);
  });

  

};

// El HTML carga este script después del formulario: sus elementos ya existen.
acceso();
