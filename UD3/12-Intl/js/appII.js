"use strict";


//Ejemplos con Intl.RelativeTimeFormat()

const rtf = new Intl.RelativeTimeFormat('es-ES', { numeric: 'auto' });  
const rtf2 = new Intl.RelativeTimeFormat('es-ES', { numeric: 'always' });

document.writeln(`<h3>Fechas relativas con formatos locales utilizando Intl.RelativeTimeFormat</h3>`);  
document.writeln(`(numeric: 'auto'): ${rtf.format(0, 'day')} <br>`);
document.writeln(`(numeric: 'always'): ${rtf2.format(5, 'day')} <br>`);
document.writeln(`${rtf.format(-1, 'day')} <br>`);     