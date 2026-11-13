"use strict"

const appValidacionFrm = (() => {
    let formulario, provincia, radios, spinner, exito
    const init = () => {
        document.addEventListener("DOMContentLoaded", () => {
            //establecer objetos
            formulario = document.querySelector("#frmFirst");
            const inputs = document.querySelectorAll(".classInput");
            provincia = document.querySelector("#provincia");
            radios = document.querySelectorAll("[type='radio']");
            spinner =document.querySelector(".loader");
            exito =document.querySelector(".exito");

            //establecer eventos
            formulario.addEventListener("submit", envioDatos);
            formulario.addEventListener("reset", resetFormulario);
            //establecer evento de los inputs
            inputs.forEach(elemento => {
                elemento.addEventListener("input", ()=>{
                    comprobarCampo(elemento)
            });
                elemento.addEventListener("blur", ()=>{
                    comprobarCampo(elemento)
            });
            })
            //establecer evento de provincia
            provincia.addEventListener("change", (e)=>{
                comprobarCampo(e.target)
            });
            //establecer evento a los radios
            radios.forEach(radio => {
                radio.addEventListener("change", () => {
                    validarRadio();
                })
            });


        })

    }
    /**
     * @description comprobar datos, mostrar spinner, datos y span
     * @param {Event} e
     */
    const envioDatos = (e) => {
        e.preventDefault(); //cancelar el evento submit
        //seleccionar todos los input y select
        formulario.querySelectorAll(".classTexto").forEach (elemento=>{
            comprobarCampo(elemento)
        })
        const formularioValido =formulario.checkValidity(); 
        const radiosValidos = validarRadio();
         if (!formularioValido || !radiosValidos){ //Si no sse cumplen las validaciones sale de envio Datos
            return
         }
         //seguimos con el envío
         spinner.style.display="block";
         exito.style.display="block";
         //mostrar los datos del formulario en consola
         const datos=new FormData(formulario);
         console.log(`Datos enviados ${Object.fromEntries(datos)}`);
         exito.textContent="Enviando datos..."
         //temporizador
         setTimeout(()=>{
            spinner.style.display="none";
            exito.style.display="none";
            formulario.reset(); //limpiar
         },3000)
    }
    /**
     * @description Limpiar el formulario
     */
    const resetFormulario = () => {
        const elementosBorrados = document.querySelectorAll(".error");
        elementosBorrados.forEach(elemento => {
            elemento.textContent = ""
        });
        //otra forma
        // document.querySelectorAll(".error").forEach(elemento => {
        //     elemento.textContent = ""
        // });
    }

    const comprobarCampo = (elemento) => {
        const error = document.querySelector(`#error${elemento.id}`);
        //comprobación

        switch (true) {
            case elemento.validity.valid: //cumple criterios de validación
                error.textContent = "";
                break;
            case elemento.validity.valueMissing: //datos requeridos
                error.textContent = "El campo es requerido";
                break;
            case elemento.validity.rangeUnderflow: //controlar el min
                error.textContent = `Debe ser mayor o igual que ${elemento.min}`;
                break
            case elemento.validity.rangeOverflow: //controlar el max
                error.textContent = `Debe ser menor o igual que ${elemento.max}`;
                break
            case elemento.validity.tooShort: //controlar el minLength
                error.textContent = `Demasiado corto, mínimo ${elemento.minLength}caracteres`;
                break
            case elemento.validity.tooLong: //controlar el maxLength
                error.textContent = `Demasiado largo, máximo ${elemento.maxLength}caracteres`;
                break
            case elemento.validity.patternMismatch: //controlar el pattern (expresiones regulares)
                error.textContent = `El formato no coincide con el patrón diseñado`;
                break
            default:
                error.textContent = 'El dato no es correcto'
                break;
        }


    }
    /**
     * @description verificar si hay un radio seleccionado
     * @returns {boolean} true si hay radio seleccionado o false si no hay radios seleccionados
     */
    const validarRadio = () => {
        const seleccionado = [...radios].some(radio => radio.checked);
        const errorTipo = document.querySelector("#errortipo");
        errorTipo.textContent = seleccionado ? "" : "Dato requerido";
        return seleccionado
    }
    return { init }
})();
appValidacionFrm.init();