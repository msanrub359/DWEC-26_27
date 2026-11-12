"use strict";

const appExpresionesRegulares = (() => {

  const init = () => {
    document.addEventListener("DOMContentLoaded", () => {
      // Tarjeta 01
      {
        const expresion = /mesa/;
        const formulario = document.querySelector('.regex-check[data-example="0"]');
        const tarjeta = formulario.closest(".regex-card"); // Obtener la tarjeta que contiene el formulario
        const patron = tarjeta.querySelector(".regex-pattern");

        patron.textContent = expresion.toString(); // Mostrar la expresión regular en el span correspondiente

        formulario.addEventListener("submit", (evento) => {
          comprobar(evento, expresion);
        });
      }

      // Tarjeta 02
      {
        const expresion = /^mesa$/i;
        const formulario = document.querySelector('.regex-check[data-example="1"]');
        const tarjeta = formulario.closest(".regex-card");
        const patron = tarjeta.querySelector(".regex-pattern");

        patron.textContent = expresion.toString();

        formulario.addEventListener("submit", (evento) => {
          comprobar(evento, expresion);
        });
      }

      // Tarjeta 03
      {
        const expresion = /^(mesa)*$/i;
        const formulario = document.querySelector('.regex-check[data-example="2"]');
        const tarjeta = formulario.closest(".regex-card");
        const patron = tarjeta.querySelector(".regex-pattern");

        patron.textContent = expresion.toString();

        formulario.addEventListener("submit", (evento) => {
          comprobar(evento, expresion);
        });
      }

      // Tarjeta 04
      {
        const expresion = new RegExp("^mesa$", "i");
        const formulario = document.querySelector('.regex-check[data-example="3"]');
        const tarjeta = formulario.closest(".regex-card");
        const patron = tarjeta.querySelector(".regex-pattern");

        patron.textContent = `new RegExp(${JSON.stringify(expresion.source)}, ${JSON.stringify(expresion.flags)})`;

        formulario.addEventListener("submit", (evento) => {
          comprobar(evento, expresion);
        });
      }

      // Tarjeta 05
      {
        const expresion = /^[a-zá-úñ\s]$/i;
        const formulario = document.querySelector('.regex-check[data-example="4"]');
        const tarjeta = formulario.closest(".regex-card");
        const patron = tarjeta.querySelector(".regex-pattern");

        patron.textContent = expresion.toString();

        formulario.addEventListener("submit", (evento) => {
          comprobar(evento, expresion);
        });
      }

      // Tarjeta 06
      {
        const expresion = /^[a-zá-úñ\s]{5,}$/i;
        const formulario = document.querySelector('.regex-check[data-example="5"]');
        const tarjeta = formulario.closest(".regex-card");
        const patron = tarjeta.querySelector(".regex-pattern");

        patron.textContent = expresion.toString();

        formulario.addEventListener("submit", (evento) => {
          comprobar(evento, expresion);
        });
      }

      // Tarjeta 07
      {
        const expresion = /^[0-9]{4}$/;
        const formulario = document.querySelector('.regex-check[data-example="6"]');
        const tarjeta = formulario.closest(".regex-card");
        const patron = tarjeta.querySelector(".regex-pattern");

        patron.textContent = expresion.toString();

        formulario.addEventListener("submit", (evento) => {
          comprobar(evento, expresion);
        });
      }

      // Tarjeta 08
      {
        const expresion = /^\d{4}$/;
        const formulario = document.querySelector('.regex-check[data-example="7"]');
        const tarjeta = formulario.closest(".regex-card");
        const patron = tarjeta.querySelector(".regex-pattern");

        patron.textContent = expresion.toString();

        formulario.addEventListener("submit", (evento) => {
          comprobar(evento, expresion);
        });
      }

      // Tarjeta 09
      {
        const expresion = /^[1-9][02468]$/;
        const formulario = document.querySelector('.regex-check[data-example="8"]');
        const tarjeta = formulario.closest(".regex-card");
        const patron = tarjeta.querySelector(".regex-pattern");

        patron.textContent = expresion.toString();

        formulario.addEventListener("submit", (evento) => {
          comprobar(evento, expresion);
        });
      }

      // Tarjeta 10
      {
        const expresion = /^([1-9]|1[0-5])$/;
        const formulario = document.querySelector('.regex-check[data-example="9"]');
        const tarjeta = formulario.closest(".regex-card");
        const patron = tarjeta.querySelector(".regex-pattern");

        patron.textContent = expresion.toString();

        formulario.addEventListener("submit", (evento) => {
          comprobar(evento, expresion);
        });
      }

      // Tarjeta 11
      {
        const expresion = /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
        const formulario = document.querySelector('.regex-check[data-example="10"]');
        const tarjeta = formulario.closest(".regex-card");
        const patron = tarjeta.querySelector(".regex-pattern");

        patron.textContent = expresion.toString();

        formulario.addEventListener("submit", (evento) => {
          comprobar(evento, expresion);
        });
      }

      // Tarjeta 12
      {
        const expresion = /^(0[1-9]|[1-2][0-9]|3[01])[\/](0[1-9]|1[0-2])[\/](198[3-9]|199[0-9]|20[0-4][0-9]|2050)$/;
        const formulario = document.querySelector('.regex-check[data-example="11"]');
        const tarjeta = formulario.closest(".regex-card");
        const patron = tarjeta.querySelector(".regex-pattern");

        patron.textContent = expresion.toString();

        formulario.addEventListener("submit", (evento) => {
          comprobar(evento, expresion);
        });
      }
    })

  }

  /**
   * @description Comprueba si el valor del input coincide con la expresión regular y muestra el resultado.
   * @param {Event} evento 
   * @param {RegExp} expresion 
   */
  const comprobar = (evento, expresion) => {
    evento.preventDefault();

    const formulario = evento.currentTarget; // Obtener el formulario que disparó el evento
    const entrada = formulario.querySelector("input");// Obtener el input dentro del formulario
    const resultado = formulario.querySelector(".regex-result"); // Obtener el span donde se mostrará el resultado
    const coincide = expresion.test(entrada.value); // Comprobar si el valor del input coincide con la expresión regular

    resultado.textContent = coincide
      ? "Sí, coincide."
      : "No coincide.";
    resultado.dataset.valid = String(coincide); // Establecer un atributo de datos para indicar si coincide o no
  }
  return { init }
})();
appExpresionesRegulares.init();





