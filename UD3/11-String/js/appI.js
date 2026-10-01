"use strict"

//genera el abecedario
for (let codigo = 65; codigo <= 90; codigo++) {
    document.write(`${String.fromCharCode(codigo)} `);
    //mostrar Ñ
    if (codigo==78){
        document.write(`${String.fromCharCode(209)} `);
    }
    
}
// genera 20 letras de forma aleatoria
document.write("<h3> Generar abeceradio aleatorio</h3>")
for (let i = 0; i <= 20; i++) {
    let codigo=Math.floor(Math.random()*(90-65+1)) +65
    document.write(`${String.fromCharCode(codigo)} `);
       
}
