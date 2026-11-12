"use strict";

const ExpresionesPattern = (() => {
  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      const formulario = document.querySelector("#formBusqueda");
      const valor = document.querySelector("#valor");
      const mostrar = document.querySelector("#mostrar");
      const usuarioCriterios = document.querySelector("#usuario-criterios");
      const listaCriterios = document.querySelector("#lista-criterios");
      const completos = document.querySelector("#criterios-completos");

      // pattern recibe un texto, sin barras delimitadoras ni la bandera i.
      // Duplicamos las barras para escribir \w dentro de una cadena.
      const patronUsuario = "^(?=.*[02468])(?!.*[dD][eE][lL][eE][tT][eE])[\\wáéíóúüñÁÉÍÓÚÜÑ]{8,20}$";
      valor.pattern = patronUsuario;
      usuarioCriterios.pattern = patronUsuario;
      document.querySelector("#patron-usuario").textContent = valor.pattern;
      valor.title = 'Entre 8 y 20 letras, números o guiones bajos, con un dígito par y sin "delete".';
      usuarioCriterios.title = valor.title;

      const criterios = [
        { elemento: document.querySelector("#criterio-longitud"), patron: ".{8,20}" },
        { elemento: document.querySelector("#criterio-caracteres"), patron: "[\\wáéíóúüñÁÉÍÓÚÜÑ]+" },
        { elemento: document.querySelector("#criterio-par"), patron: ".*[02468].*" },
        { elemento: document.querySelector("#criterio-delete"), patron: "(?!.*[dD][eE][lL][eE][tT][eE]).*", mostrarEnVacio: false }
      ];

      usuarioCriterios.addEventListener("focus", () => {
        listaCriterios.hidden = false;
        actualizarCriterios(usuarioCriterios, criterios, completos);
      });

      usuarioCriterios.addEventListener("input", () => {
        actualizarCriterios(usuarioCriterios, criterios, completos);
      });

      formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        // El navegador valida el pattern asignado al campo.
        if (valor.validity.valueMissing) {
          mostrar.textContent = "Introduce un nombre de usuario.";
          mostrar.dataset.valid = "false";
        } else if (valor.validity.patternMismatch) {
          mostrar.textContent = "Nombre de usuario no válido.";
          mostrar.dataset.valid = "false";
        } else {
          mostrar.textContent = "Nombre de usuario válido.";
          mostrar.dataset.valid = "true";
        }
      });
    });
  };

  const actualizarCriterios = (usuarioCriterios, criterios, completos) => {
    // Campo auxiliar para comprobar cada patrón por separado.
    // No se añade al HTML: solo usamos su validación nativa.
    const comprobador = document.createElement("input");
    comprobador.type = "text";
    comprobador.value = usuarioCriterios.value;
    let todosCumplidos = true;

    for (const criterio of criterios) {
      comprobador.pattern = criterio.patron;

      if (usuarioCriterios.value === "" && criterio.mostrarEnVacio === false) {
        // Sin texto no aparece la palabra prohibida: ocultamos este criterio.
        criterio.elemento.hidden = true;
      } else if (usuarioCriterios.value === "") {
        criterio.elemento.hidden = false;
      } else if (comprobador.validity.patternMismatch) {
        // El texto no cumple este patrón: mostramos el criterio pendiente.
        criterio.elemento.hidden = false;
      } else {
        // El texto cumple este patrón: ocultamos el criterio.
        criterio.elemento.hidden = true;
      }

      if (criterio.elemento.hidden === false) {
        todosCumplidos = false;
      }
    }

    if (todosCumplidos) {
      completos.hidden = false;
    } else {
      completos.hidden = true;
    }
  };

  return { init };
})();

ExpresionesPattern.init();

