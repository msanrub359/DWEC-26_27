"use strict"
//Ejemplos con la API Temporal

//declaración variables y constantes
//Fecha actual y hora actual con zona horaria
const fechaActualconZona = Temporal.Now.zonedDateTimeISO(); //Devuelve un ZonedDateTime, que incluye fecha, hora y zona horaria
//Fecha actual sin zona horaria
const fechaActualsinZona= Temporal.Now.plainDateISO();
//Hora actual sin zona horaria
const HoraActualsinZona= Temporal.Now.plainTimeISO();
//Fecha y hora actual sin zonaa horaria
const FechaHoraActualsinZona= Temporal.Now.plainDateTimeISO();

//Fecha y hora actual
const fechaInstan = Temporal.Now.instant();
//mostrar fechas y horas
document.write(`Fecha actual con Zona horaria: ${fechaActualconZona}<br>`)
document.write(`Fecha actual sin Zona horaria: ${fechaActualsinZona}<br>`)
document.write(`Hora actual sin Zona horaria: ${HoraActualsinZona}<br>`)
document.write(`Fecha y Hora actual sin Zona horaria: ${FechaHoraActualsinZona}<br>`)
document.write(`Fecha y Hora actual con instal: ${fechaInstan}<br>`)
//mostrar la hora de España
const horaEspania= fechaInstan.toZonedDateTimeISO("Europe/Madrid")
document.write(`La hora actual en España es: ${horaEspania}<br>`)
//mostrar la hora en Canadá
const horaCanada= fechaInstan.toZonedDateTimeISO("America/Toronto")
document.write(`La hora actual en Canadá es: ${horaCanada}<br>`)

document.write(`Desglose de fecha con temporal ${fechaActualconZona.day}, ${fechaActualconZona.month}, ${fechaActualconZona.year}<br>`); //mes 1-12



// // Sumar 24 días a la fecha actual
/// Sumar 10 días
document.writeln(`<h3>Sumar 1 mes y 10 días a una fecha</h3>`);
const futuro = fechaActualconZona.add({ months:1, days: 10 }); //months, weeks, years, hours, minutes, seconds, miliseconds
document.writeln(`Fecha ${fechaActualconZona}:  ${futuro}`); 

// // Restar 2 meses
document.writeln(`<h3>Restar 2 meses a una fecha</h3>`);

const pasado = fechaActualconZona.subtract({ months: 2 });
document.writeln(`Fecha ${fechaActualconZona}:  ${pasado}`); 

// // Calcular los días que hay entre dos fechas

const inicio = Temporal.PlainDate.from('2026-09-28');
const fin = Temporal.PlainDate.from('2027-05-22');
const diferencia= fin.since(inicio, {largestUnit:'month'}, {smallesUnit:'hours'}) //smallesUnit (controla la unidad más pequeña) para horas, minutos, segundos
console.log(diferencia.toString());

document.writeln(`<br>Los días transcurridos entre ${inicio} y ${fin}:  ${diferencia.years} años, ${diferencia.months} meses, ${diferencia.days} días`); 
document.writeln(`<br>Los días transcurridos entre ${inicio} y ${fin}:   ${diferencia.months} meses, ${diferencia.days} días, ${diferencia.hours} horas`); 


