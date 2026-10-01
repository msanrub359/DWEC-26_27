"use strict"
"use strict"
//Permitir la entrada de un dato que contenga nombre y 2 apellidos
//Controlar que la entrada tiene tres palabras y no es vacío. Si esto
//ocurre, mostrar mensaje de error y volver a pedir los datos.

//Crear un array y en cada posición tendrá nombre, apellido1 y apellido2
//mostrar un mensaje indicando, "El nombre es ...., el primer apellido es .... y el
//segundo apellido es ..."
//Crear un usuario, utilizando el primer caracter del nombre, 3 primeras letras del primer
//apellidos y las 3 últimas del segundo apellido. Mostrar usuario

//entrada de dato
let nomApe = prompt("Introduzca nombre y dos apellidos");
//bucle para controlar la entrada
while (nomApe != null && (nomApe.trim().length == 0 || nomApe.split(" ").length != 3)) {
    nomApe = prompt("Error al introducir datos\nIntroduzca nombre y dos apellidos");
}
//Si no se ha pulsado el botón cancelar
if (nomApe != null) {
    //extraer el nombre y los apellidos
    const aDatos = nomApe.split(" ");
    document.write(`El nombre es ${aDatos[0]} el primer apellido es ${aDatos[1]} y el segundo apellido es ${aDatos[2]}`);
    //crear el nombre del usuario
    const usuario = `${aDatos[0].at(0)}${aDatos[1].slice(0,3)}${aDatos[2].slice(-3)}`
    document.write(`<br>Usuario = ${usuario.toLocaleLowerCase()}`);
}
