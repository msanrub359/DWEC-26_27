"use strict"
/* 
Solicitar un número positivo y realizar las siguientes operaciones:
-  Validar que el número sea positivo, no puede estar vacío y si se pulsa 
el botón Cancelar, se termina el script. Las operaciones invalidas se
 notificarán al usuario
 -Calcular y mostrar en consola la suma de todos los números comprendidos entre
 1 y el número solicitado.
 -Mostrar resultado por consola
 - mostrar los pares desde 1 hasta el número
*/

// Declaración de variables
let numero, suma=0;

//body del script
numero=prompt("Introduzca un número positivo");
//bucle para comprobar que el número es correcto
while ( numero!=null && (numero <0 || numero=="")){
   numero=prompt("¡¡Error, número incorrecto!!\n Vuelva a introducir un número positivo"); 
}
//Calcular la suma desde el 1 hasta el número introducido
if (numero!=null){
    for (let index =1; index <= numero; index++) {
        suma+=index;
        
    };
    //mostrar el resultado
    console.log(`La suma  desde 1 hasta ${numero} es ${suma}`);
  //mostrar los pares
   for (let index = 2; index <= numero; index+=2) {
    console.log(`Número par: ${index}`);
    
   }
};
console.log('Fin del script');

