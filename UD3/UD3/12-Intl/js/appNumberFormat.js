//Formater con Int.NumberFormat
"use strict"

const numero1=1123456.789;
const numero2=0.12345678;
const numero3=1123456;
const numero4=1234578.123456

//formatos
const formatoNumero=new Intl.NumberFormat("es-ES",{
    style: "decimal",
    minimumFractionDigits:2,
    maximumFractionDigits:2
})
const formatoMoneda=new Intl.NumberFormat("es-ES",{
    style: "currency",
    currency:"EUR",
    minimumFractionDigits:1,
    maximumFractionDigits:1
});
const formatoPorcentaje=new Intl.NumberFormat("es-ES",{
    style: "percent",     
    maximumFractionDigits:2
});

//mostrar números con formatos
document.write(`Número 1 (formato de número): ${formatoNumero.format(numero1)}<br>`);
document.write(`Número 1 (formato de moneda): ${formatoMoneda.format(numero1)}<br>`);
document.write(`Número 1 (formato de porcentaje): ${formatoPorcentaje.format(numero1/100)}<br>`);
document.write(`Número 2 (formato de número): ${formatoNumero.format(numero2)}<br>`);
document.write(`Número 2 (formato de moneda): ${formatoMoneda.format(numero2)}<br>`);
document.write(`Número 2 (formato de porcentaje): ${formatoPorcentaje.format(numero2/100)}<br>`);
document.write(`Número 3 (formato de número): ${formatoNumero.format(numero3)}<br>`);
document.write(`Número 3 (formato de moneda): ${formatoMoneda.format(numero3)}<br>`);
document.write(`Número 3 (formato de porcentaje): ${formatoPorcentaje.format(numero3/100)}<br>`);
document.write(`Número 4 (formato de número): ${formatoNumero.format(numero4)}<br>`);
document.write(`Número 4 (formato de moneda): ${formatoMoneda.format(numero4)}<br>`);
document.write(`Número 4 (formato de porcentaje): ${formatoPorcentaje.format(numero4/100)}<br>`);