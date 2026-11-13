"use strict";


const PintarInputsModule = (() => {
  let pintar = false;
  let colorOrig = "";

  /**
   * @description Inicializar eventos al cargar el DOM
   */
  const init = () => {
    establecerEventos();
  };

  /**
   * description Establecer eventos a todos los inputs
   */
  const establecerEventos = () => {
    const elementosInput = document.querySelectorAll("input"); // Todos los inputs
    console.log("Inputs encontrados:", elementosInput);

    elementosInput.forEach((element) => {
      element.addEventListener("mouseover", overMouse);
      element.addEventListener("mouseout", outMouse);
      element.addEventListener("mousedown", downMouse);
      element.addEventListener("mouseup", upMouse);
      element.addEventListener("mousemove", moveMouse);
      element.addEventListener("click", clickMouse);
      element.addEventListener("dblclick", dobleClickMouse);
      element.addEventListener("contextmenu", contextmenuMouse);

    });
  };

  /** Evento: el ratón entra en el input */
  const overMouse = (e) => {
    e.currentTarget.style.background = "#608ae5";
  };

  /** Evento: el ratón sale del input */
  const outMouse = (e) => {
    e.currentTarget.style.background = "";
  };


  /** Evento: se pulsa un botón del ratón */
  const downMouse = (e) => {

    console.log(`mousedown: button=${e.button}, buttons=${e.buttons}`);

    if (e.button ===0) { // botón izquierdo
      pintar = true;
      colorOrig = e.currentTarget.style.background; // guardar color original

    }
  };

  /** Evento: se suelta el botón del ratón */
  const upMouse = (e) => {
    pintar = false;
    e.currentTarget.style.background = colorOrig; // restaurar color original
  };

  document.addEventListener("mouseup", () => {
    pintar = false;
  });

  /** Evento: se mueve el ratón sobre el input */
  const moveMouse = (e) => {
    if (pintar) {
      e.currentTarget.style.background = "yellow";
    }
  };
  /**
   * @description Al hacer click mostrar las coordenadas del ratón
   */
  const clickMouse = (e) => {
    console.log(`click: ${e.currentTarget.id}, coordenadas=(${e.clientX}, ${e.clientY})`);
  }
  /**
   * @description Al hacer doble click
   */
  const dobleClickMouse = (e) => {
    console.log(`dblclick: ${e.currentTarget.id}`);
  }
  /**
   * @description Al pulsar el botón derecho
   */
  const contextmenuMouse = (e) => {
    console.log(`contextmenu: ${e.currentTarget.id}`);
  }
  // Exponer solo init públicamente
  return { init };
})();

document.addEventListener("DOMContentLoaded", PintarInputsModule.init);
