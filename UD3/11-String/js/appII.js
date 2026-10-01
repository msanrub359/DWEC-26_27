//recorrer un array

const cadena = "Estamos en clase de JavaScript";

//recorrer la cadena
for (let index = 0; index < cadena.length; index++) {
    if (cadena.at(index) != " ") { //si el carácter no es espacio en blanco
        if (index == cadena.length - 1) { //si es el último carácter no mostrar la coma
            document.write(`${cadena.at(index)}`)
        }else{
           document.write(`${cadena.at(index)},`); 
        }
    }



}

