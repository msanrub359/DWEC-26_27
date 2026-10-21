"use strict";

// Módulo para manejar eventos de teclado en inputs
const TecladoInputsModule = (() => {

  

  // Establecer eventos a todos los inputs
  const establecerEventos = () => {
    const formulario = document.querySelector("#form-register form");
    if (!formulario) {
      console.error("No se encontró el formulario.");
      return;
    }
    const elementosInput = formulario.querySelectorAll("input");
    console.log("Inputs encontrados:", elementosInput);

    elementosInput.forEach((element) => {
      element.addEventListener("keydown", keyDownHandler);
      element.addEventListener("keyup", keyUpHandler);
      element.addEventListener("input", inputHandler);
      element.addEventListener("change", changeHandler);
    });

    // El navegador comprueba pattern antes de emitir submit.
    // Cancelamos el envío para mantener abierta la demostración.
    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();
      console.log("Formulario válido: envío sin recargar la página.");
    });
  };

  /** Evento: cuando se pulsa cualquier tecla */
  const keyDownHandler = (e) => {

    // keydown ocurre antes de la acción predeterminada de la tecla.
    // key: significado de la tecla ("a", "A", "Enter", "ArrowLeft"...).
    // code: posición física ("KeyA", "Enter"...), independiente del carácter.
    // repeat: true en las repeticiones al mantener una tecla pulsada.
    // ctrlKey, altKey, shiftKey y metaKey indican modificadores pulsados.
    // No usamos keyCode ni which: son propiedades obsoletas.
    console.log("keydown", {
      key: e.key,
      code: e.code,
      repeat: e.repeat,
      ctrl: e.ctrlKey,
      alt: e.altKey,
      shift: e.shiftKey,
      meta: e.metaKey,
      valorAntes: e.currentTarget.value,
    });

    console.log(e.altKey);
    // Atajo local: Alt + flecha arriba selecciona el texto del campo.
    if (e.altKey && e.key == 'ArrowUp') {
      
      if (!e.repeat) { //Si no se pulsa repetidamente la tecla
        e.currentTarget.select();
      }
    }

   
  };



  // keyup: al soltar la tecla, incluso si no escribe ningún carácter.
  const keyUpHandler = (e) => {
    console.log(`keyup -> ${e.target.value}`, e);
  };

  // input: edición del usuario, también al pegar con el menú contextual.
  // Asignar .value desde JavaScript no dispara input automáticamente.
  const inputHandler = (e) => {
    console.log(`input -> ${e.target.value}`, e);

  };
 const changeHandler = (e) => {
    console.log(`change -> ${e.target.value}`, e);

  };
  // Al escribir un carácter, la secuencia habitual es:
  // keydown → beforeinput → input → keyup.
  // Flechas y modificadores no suelen cambiar el valor ni producir input.
  // keypress es obsoleto: usamos keydown/keyup y, para el contenido, input.

  // Inicializar eventos al cargar el DOM
  const init = () => {
    establecerEventos();
  };
  // Exponer solo init públicamente
  return { init };

})();

// Iniciar módulo
// Pasamos la referencia a init, sin ejecutarla antes de que el DOM esté listo.
document.addEventListener("DOMContentLoaded", TecladoInputsModule.init);
