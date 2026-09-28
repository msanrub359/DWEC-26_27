"use strict"
<<<<<<< HEAD
let numVent=1;
//abrir subventana
function crearVent(){
     const ventana=window.open("", `secundaria${numVent}`, "width=200,height=200");
   // const ventana=window.open("", `secundaria`); //Se instancia en el mismo objeto
    // console.log(ventana);
    // //añadir título y botón a la ventana secundaria
   
    ventana.document.writeln(`<h1>Ventana secundaria ${numVent++}</h1>`);
    ventana.document.writeln("<button type='button' onclick='self.close()'>Cerrar ventana</button>")
   
=======
>>>>>>> 4a5037d3d64b17ac2f97f10d04a3ddb797a82aea

