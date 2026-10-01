"use strict";
let ventana;
function crearVent(){
    if (ventana == undefined || ventana.closed){
   
    ventana =open("",`ventana`, "width=200,heigth=300");
    console.log(ventana);
    //dibujar un botón
    ventana.document.write("<h1>Ventana secundaria</h1>");
    ventana.document.write("<button onclick='self.close()'>Cerrar Ventana secundaria</button>");
    }else{
        alert("La ventana secundaria ya está abierta")
    }
}

//crear función cerrar ventana
function cerrarVent(){
     //cierra la ventana principal

   if (ventana == undefined || ventana.closed){
        close();
    }else if (confirm("Ventana secundaria abierta\n¿Desea cerrar la ventana secundaria?")){
        ventana.close(); //cerrar la ventana secundaria
        close(); //cerrar ventana principal
    }else{
        alert("No se cierra la ventana principal");
        ventana.focus(); //recibe el foco la ventana secundaria
    }
}    




