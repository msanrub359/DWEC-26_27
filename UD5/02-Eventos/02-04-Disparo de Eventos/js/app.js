"use strict"
/**
 * captura, el evento se propaga desde el documento raíz hacía el elemento objetivo. De arriba hacia abajo en el DOM
 * burbujeo, el evento se propaga desde el elemento objetivo hacía el documento raíz. De abajo hacia arriba. Propagación por defecto
 */
const EventoPropagacionModule = (() => {

  const init = () => {
    // Descomenta la función que quieras probar
    eventoCaptura();
    //eventoBurbujeo();
  };

  /** 
   * Ejemplo de eventos en fase de captura
   */
  const eventoCaptura = () => {
    const capaPrincipal = document.querySelector("#capaPrincipal");
    const capaSecundaria = document.querySelector("#capaSecundaria");

    // true -> fase de captura
    capaPrincipal.addEventListener("click", () => {
      alert("Capa principal - Captura");
    }, { capture: true });

    capaSecundaria.addEventListener("click", () => {
      alert("Capa secundaria - Captura");
    }, { capture: true });
  };

  /** 
   * Ejemplo de eventos en fase de burbujeo
   */
  const eventoBurbujeo = () => {
    const capaPrincipal = document.querySelector("#capaPrincipal");
    const capaSecundaria = document.querySelector("#capaSecundaria");

    // false o sin argumento -> fase de burbuja
    capaPrincipal.addEventListener("click", () => {
      alert("Capa principal - Burbuja");
    });

    capaSecundaria.addEventListener("click", (event) => {
      alert("Capa secundaria - Burbuja");
      // Detiene la propagación hacia los elementos padres
       event.stopPropagation();
    });
  };

  return { init};

})();


// Iniciar módulo
document.addEventListener("DOMContentLoaded", EventoPropagacionModule.init());
