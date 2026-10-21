"use strict";

// La función autoejecutada mantiene privados los manejadores y expone solo init.
// const PintarInputsModule = (() => {
//   const init = () => {
//     const formulario = document.querySelector("#form-register form");
//     if (!formulario) {
//       console.error("No se encontró el formulario.");
//       return;
//     }

//     const inputs = formulario.querySelectorAll("input");
//     console.log("Inputs encontrados:", inputs);

//     // Evitamos que el envío (también con Enter) recargue la demostración.
//     formulario.addEventListener("submit", (evento) => evento.preventDefault());

//     inputs.forEach((input) => {
//       // mouseenter/mouseleave detectan entrada/salida y no burbujean.
//       // mouseover/mouseout sí burbujean y también pueden dispararse al pasar
//       // entre un contenedor y sus hijos. En estos inputs la diferencia no se aprecia.
//       input.addEventListener("mouseenter", (evento) => {

//         actualizarColor(evento.buttons);
//         console.log(`mouseenter: ${evento.currentTarget.id}`);
//       });

//       input.addEventListener("mouseleave", (evento) => {

//         actualizarColor();
//         console.log(`mouseleave: ${evento.currentTarget.id}`);
//       });

//       // mousedown: se pulsa un botón; mouseup: se suelta.
//       // button indica QUÉ botón cambió: 0=principal, 1=central, 2=secundario.
//       // buttons indica CUÁLES siguen pulsados: no usa los mismos valores.
//       input.addEventListener("mousedown", (evento) => {
//         actualizarColor(evento.buttons);
//         console.log(`mousedown: button=${evento.button}, buttons=${evento.buttons}`);
//       });

//       input.addEventListener("mouseup", (evento) => {
//         actualizarColor(evento.buttons);
//         console.log(`mouseup: button=${evento.button}, buttons=${evento.buttons}`);
//       });

//       // mousemove se dispara muchas veces al mover el ratón dentro del input.
//       // No necesita una variable global: buttons refleja el estado actual.
//       input.addEventListener("mousemove", (evento) => {
//         actualizarColor(evento.buttons);
//         // clientX/Y: coordenadas respecto al área visible del navegador.
//         // pageX/Y: coordenadas respecto al documento, incluido el desplazamiento.
//         // Descomenta para explorarlas (genera muchos mensajes):
//         // console.log({ x: evento.clientX, y: evento.clientY });
//       });

//       // Clic principal habitual: mousedown → mouseup → click.
//       // Un doble clic genera dos click y después un dblclick.
//       input.addEventListener("click", (evento) => {
//         console.log(`click: ${evento.currentTarget.id}, coordenadas=(${evento.clientX}, ${evento.clientY})`);
//       });

//       input.addEventListener("dblclick", (evento) => {
//         console.log(`dblclick: ${evento.currentTarget.id}`);
//       });

//       // El clic secundario suele abrir el menú contextual.
//       // No cancelamos su acción predeterminada para poder observarla.
//       input.addEventListener("contextmenu", (evento) => {
//         console.log(`contextmenu: ${evento.currentTarget.id}`);
//       });


//     });
//   };

//   return { init };
// })();
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

    if (e.buttons === 1) { // botón izquierdo
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
