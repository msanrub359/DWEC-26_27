"use strict";
//declarar variables locales o globales al script
let numero,
    resultado = 1;

//bucle for para mostrar los números del 1 al 20
console.log('----MOSTRAR NÚMEROS DEL 1 AL 20 ----');
for (let numero = 1; numero <=20; numero++) {
   console.log(`El número es ${numero}`);

}

// console.log('----MOSTRAR NÚMEROS PARES DEL 1 AL 20 ----');
for (let numero = 2; numero <=20; numero+=2) {
     console.log(`El número es ${numero}`);

 }
 
console.log('----MOSTRAR múltiplación de los números introducidos ----');

console.log("----MOSTRAR múltiplación con while----");

//bucle while

numero = prompt("Bucle I. Introduzca número (0->Fin)");
while (numero != 0) {
   resultado*=numero;
   numero = prompt("Bucle I. Introduzca número 0->Fin");
}
console.log(`La multiplicación de los números es ${resultado}`);

//bucle do while
console.log("----MOSTRAR múltiplación con do while----");

resultado=1; //inicializar

do {
  numero = prompt("Bucle II. Introduzca número 0->Fin");
  if (numero != 0) {
    resultado *= numero;
  }
} while (numero != 0);
console.log(`La multiplicación de los números es ${resultado}`);



//Bucle poco óptimo porque repite una comprobación innecesaria
console.log("----MOSTRAR múltiplicación con while poco eficiente I----");
numero =1; //inicializar la variable
resultado=1; //inicializar

while (numero != 0) {
  numero = prompt("Bucle III. Introduzca número (0->Fin)");
  if (numero!=0){
    resultado*=numero;
  }
 }
console.log(`La multiplicación de los números es ${resultado}`);


//! Bucle poco óptimo desde el punto de vista de la programación estructurada:
//! la salida del bucle debería estar en su condición (cabecera del while),
//! no "escondida" dentro del cuerpo mediante un break.
//! Funciona, pero dificulta ver de un vistazo cuándo termina el bucle.

console.log("----MOSTRAR múltiplicación con bucle poco óptimo por utilizar break---");
resultado=1; //inicializar

numero = prompt("Bucle IV.Introduzca número (0->Fin)");
while (true) {
  if (numero !=0){
    resultado*=numero;
  }else{
    break;
  }
   
   numero = prompt("Bucle IV.Introduzca número (0->Fin)");
}
console.log(`La multiplicación de los números es ${resultado}`);

