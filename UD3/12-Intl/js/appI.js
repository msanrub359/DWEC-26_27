//Ejemplos con Intl.NumberFormat()

//declaración variables y constantes
const numero1=123456.789;
const numero2=0.123456789;
const numero3=123456789;
const numero4=123456789.123456789;

//formatos
const formatoNumero = new Intl.NumberFormat('es-ES', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 });
const formatoMoneda = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
const formatoPorcentaje = new Intl.NumberFormat('es-ES', { style: 'percent', maximumFractionDigits: 2 }); 

//mostrar números con formatos más legibles  
document.writeln(`<h3>Números con formatos locales utilizando Intl.NumberFormat</h3>`);
document.writeln(`Número 1 (formato número): ${formatoNumero.format(numero1)} <br>`);
document.writeln(`Número 2 (formato número): ${formatoNumero.format(numero2)} <br>`);
document.writeln(`Número 3 (formato número): ${formatoNumero.format(numero3)} <br>`);
document.writeln(`Número 4 (formato número): ${formatoNumero.format(numero4)} <br>`);
document.writeln(`Número 1 (formato moneda): ${formatoMoneda.format(numero1)} <br>`);
document.writeln(`Número 2 (formato moneda): ${formatoMoneda.format(numero2)} <br>`);
document.writeln(`Número 3 (formato moneda): ${formatoMoneda.format(numero3)} <br>`);
document.writeln(`Número 4 (formato moneda): ${formatoMoneda.format(numero4)} <br>`);
document.writeln(`Número 1 (formato porcentaje): ${formatoPorcentaje.format(numero1 / 100)} <br>`
);
document.writeln(`Número 2 (formato porcentaje): ${formatoPorcentaje.format(numero2 / 100)} <br>`);
document.writeln(`Número 3 (formato porcentaje): ${formatoPorcentaje.format(numero3 / 100)} <br>`);
document.writeln(`Número 4 (formato porcentaje): ${formatoPorcentaje.format(numero4 / 100)} <br>`);