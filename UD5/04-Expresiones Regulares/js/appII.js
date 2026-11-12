"use strict";

const ExpresionesDidacticas = (() => {
  // Expresión regular para validar el nombre de usuario
  //(?=.*[02468]) indica que debe contener al menos un dígito par.
  // (?!.*delete) indica que no debe contener la palabra "delete".
  // [\wáéíóúüñÁÉÍÓÚÜÑ]{8,20} indica que debe tener entre 8 y 20 caracteres alfanuméricos o acentuados.
  const patronUsuario =
    /^(?=.*[02468])(?!.*delete)[\wáéíóúüñÁÉÍÓÚÜÑ]{8,20}$/i;

  const init = () => {
    const criterios = [
      { elemento: document.querySelector("#criterio-longitud"), expresion: /^.{8,20}$/ },
      { elemento: document.querySelector("#criterio-caracteres"), expresion: /^[\wáéíóúüñÁÉÍÓÚÜÑ]+$/ },
      { elemento: document.querySelector("#criterio-par"), expresion: /[02468]/ },
      { elemento: document.querySelector("#criterio-delete"), expresion: /^(?!.*delete)/i }
    ];

    document.addEventListener("DOMContentLoaded", () => {
      const formulario = document.querySelector("#formBusqueda");
      const valor = document.querySelector("#valor");
      const mostrar = document.querySelector("#mostrar");

      document.querySelector("#patron-usuario").textContent = patronUsuario.toString();

      const usuarioCriterios = document.querySelector("#usuario-criterios");

      const listaCriterios = document.querySelector("#lista-criterios"); // Contenedor de la lista de criterios
      const completos = document.querySelector("#criterios-completos");  // Elemento que indica si todos los criterios se cumplen

      // Establecer eventos para el campo de entrada del nombre de usuario
      usuarioCriterios.addEventListener("focus", () => {
        listaCriterios.hidden = false;
        actualizarCriterios(usuarioCriterios, criterios, completos);
      });

      //
      usuarioCriterios.addEventListener("input", () => {
        actualizarCriterios(usuarioCriterios, criterios, completos);
      });

      // Establecer evento para el formulario de validación del nombre de usuario
      formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const usuario = valor.value;
        const coincide = patronUsuario.test(usuario);

        mostrar.textContent = coincide
          ? "Nombre de usuario válido."
          : "Nombre de usuario no válido.";
        mostrar.dataset.valid = String(coincide);
      });
    })

  }
  /**
   * @description Actualiza la lista de criterios según el valor del campo de entrada del nombre de usuario.
   */
  const actualizarCriterios = (usuarioCriterios, criterios, completos) => {

    let todosCumplidos = true; // Variable para verificar si todos los criterios se cumplen
    const usuario = usuarioCriterios.value; // Obtener el valor del campo de entrada del nombre de usuario

    criterios.forEach((criterio) => {
      // Con el campo vacío se muestran todos los criterios.
      if (usuario === "") {
        // Si no hay texto, mostramos el criterio.
        criterio.elemento.hidden = false;
      } else if (criterio.expresion.test(usuario)) {
        // Si el texto cumple el criterio, lo ocultamos.
        criterio.elemento.hidden = true;
      } else {
        // Si el texto no cumple el criterio, lo mostramos.
        criterio.elemento.hidden = false;
      }
    });

    // Actualizamos el estado del elemento que indica si todos los criterios se cumplen
    //every() devuelve true si todos los elementos del array cumplen la condición, en este caso, que estén ocultos (hidden).
    completos.hidden = !criterios.every((criterio) => criterio.elemento.hidden);


  };


  return { init };
})();

ExpresionesDidacticas.init();




