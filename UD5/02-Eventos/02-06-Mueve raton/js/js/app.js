"use strict"

const appMoverCuadrado = (() => {
    let cuadrado, topPos = 100, leftPos = 100;
    const salto = 10; //cantidad de pixeles por tecla 

    const init = () => {
        document.addEventListener("DOMContentLoaded", () => {
            //Establecer objeto al cuadrado
            cuadrado = document.querySelector("#cuadro");
            //establecer el evento click al cuadrado para cambiar de color
            cuadrado.addEventListener("click", () => {
                const color = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
                console.log(color);
                cuadrado.style.backgroundColor = color;
            })
            //establecer al documento el evento keydown
            document.addEventListener("keydown", moverCuadrado)
        })


    }
    const moverCuadrado = (e) => {
        console.log(e);
        switch (e.key) {
            case 'ArrowUp':
                topPos -= salto;
                break
            case 'ArrowDown':
                topPos += salto;
                break
            case 'ArrowLeft':
                leftPos -= salto;
                break
             case 'ArrowRight':
                leftPos += salto;
                break
            default:
                return
        }
        //Actualizar posición del cuadrado
        posicionar();
    }
    const posicionar=()=>{
        const cuadradoWidth= cuadrado.offsetWidth; //devolver el ancho del cuadrado incluyendo bordes
        const cuadradoHeight = cuadrado.offsetHeight //devolver el alto del cuadrado incluyendo bordes

        topPos=Math.max(0,Math.min(topPos, window.innerHeight-cuadradoHeight))
        leftPos=Math.max(0,Math.min(leftPos, window.innerWidth-cuadradoWidth))

        cuadrado.style.top=`${topPos}px`;
        cuadrado.style.left=`${leftPos}px`;
        console.log(cuadrado.style.top);
    }
    
    return { init }
})();

appMoverCuadrado.init();


