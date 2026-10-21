"use strict";

// DOMContentLoaded espera al DOM; load de window espera también a los recursos.
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM cargado");
  const boton = document.querySelector("#enviar");
  const formulario = document.querySelector("#form-register form");
  const nombre = document.querySelector("#nombreId");
  const apellidos = document.querySelector("#apellidosId");
  const datos = document.querySelector("#datos");
 

  if (!boton || !formulario || !nombre || !apellidos || !datos) {
    console.error("No se encontraron todos los elementos del formulario.");
    return;
  }

  // 1. addEventListener(tipo, función, opciones). El tipo no lleva "on".
  // Pasamos la función sin ejecutarla: mostrarPrimerClic, no mostrarPrimerClic().
  const mostrarPrimerClic = (evento) => {
    console.log(`Primer clic en el botón: ${evento.type}`);
  };

  // once elimina solo este manejador después de su primera ejecución.
  boton.addEventListener("click", mostrarPrimerClic, { once: true });

  // 2. submit permite enviar con el botón o con Enter desde un campo.
  formulario.addEventListener("submit", (evento) => {
    // Cancela el envío al servidor, evitando la recarga en TODOS los envíos.
    // preventDefault no detiene la propagación del evento.
    evento.preventDefault();
    datos.textContent = `El nombre es ${nombre.value} y los apellidos son ${apellidos.value}`;
    console.log("Formulario enviado sin recargar la página.");
  });

  // 3. Podemos registrar varios manejadores con addEventListener.
  // nombre.onfocus = funcion también es válido, pero una nueva asignación
  // a esa propiedad sustituiría al manejador anterior.
  nombre.addEventListener("focus", (evento) => {
    evento.currentTarget.style.backgroundColor = "lightcyan";
    console.log("El campo nombre ha recibido el foco.");
  });

  nombre.addEventListener("blur", (evento) => {
    evento.currentTarget.style.backgroundColor = "";
    console.log("El campo nombre ha perdido el foco.");
  });

  
  

  // Para retirar un manejador se necesita la misma referencia de función:
  // boton.removeEventListener("click", mostrarPrimerClic);
});
