"use strict"
const MueveRaton = (() => {
    let cuadro;

    // Posición inicial
    let topPos = 100;
    let leftPos = 100;
    const step = 10; // cantidad de píxeles por tecla

    const init = () => {
        document.addEventListener("DOMContentLoaded", () => {
            cuadro = document.querySelector("#cuadro");
            if (!cuadro) {
                console.error("No se encontró el elemento #cuadro.");
                return;
            }
            // Evento del ratón: clic cambia color
            cuadro.addEventListener('click', () => {
                const colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16);
                cuadro.style.backgroundColor = colorAleatorio;
            });
            document.addEventListener("keydown", moverCuadro);
            // Evento al redimensionar la ventana
            window.addEventListener('resize', moverObjeto);
           
           
        })
    }
    const moverCuadro = (e) => {
        // Evento del teclado: mover cuadro

        switch (e.key) {
            case 'ArrowUp':
                topPos -= step;
                break;
            case 'ArrowDown':
                topPos += step;
                break;
            case 'ArrowLeft':
                leftPos -= step;
                break;
            case 'ArrowRight':
                leftPos += step;
                break;
            default:
                return;
        }
    
            moverObjeto();
    }

    // Función para mover el objeto en  posiciones dentro de la ventana
    const  moverObjeto = () => {
         const cuadroWidth = cuadro.offsetWidth; //devuelve el ancho del cuadrado, incluyendo bordes.
         const cuadroHeight = cuadro.offsetHeight; //devuelve el alto del cuadrado, incluyendo bordes.

        // Limitar la posición del cuadro para que no se salda de la pantalla
        //la función Math.min() y Math.max() se combinan para mantener los valores dentro de un rango permitido:
        //topPos no puede ser menor que 0 (parte superior de la pantalla),Este bloque limita la posición del cuadro 
        // para que no se salga de la pantalla.
        //window.innerHeight - cuadroHeight: posición máxima del borde superior del cuadro para que su borde inferior quede dentro de la ventana.
        //Math.min(topPos, ...): impide superar ese máximo.
        //Math.max(0, ...): impide que la posición sea negativa y el cuadro salga por arriba.
         topPos = Math.max(0, Math.min(topPos, window.innerHeight - cuadroHeight));
         leftPos = Math.max(0, Math.min(leftPos, window.innerWidth - cuadroWidth));

        // Actualizar posición del cuadro
        cuadro.style.top = topPos + "px";
        cuadro.style.left = leftPos + "px";
    }
    return {
        init
    }


})()


MueveRaton.init()



