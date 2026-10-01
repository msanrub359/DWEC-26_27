"use strict"
//abrir una ventana
let ventana, numVent=1;
function crearVent(){
   // ventana = window.open("https://www.iestrassierra.com");
    //ventana =open("https://www.iestrassierra.com");
    ventana =open("",`ventana ${numVent++}`, "width=200,heigth=300");
    console.log(ventana);
    //dibujar un botón
    ventana.document.write("<h1>Ventana secundaria</h1>");
    ventana.document.write("<button onclick='self.close()'>Cerrar Ventana secundaria</button>");
}

//crear función cerrar ventana
function cerrarVent(){
    close(); //cierra la ventana principal
}



