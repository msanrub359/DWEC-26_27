"use strict"
//Ejemplos con la API Temporal

"use strict";

// ===============================
// FECHA Y HORA ACTUALES
// ===============================

// Fecha actual del sistema, sin hora ni zona horaria
const fechaHoy = Temporal.Now.plainDateISO();

// Fecha y hora actuales, sin zona horaria
const fechaHoraActual = Temporal.Now.plainDateTimeISO();

// Fecha y hora actuales, con zona horaria
const fechaHoraActualConZona = Temporal.Now.zonedDateTimeISO();
// Fecha y hora actuales, con zona horaria
const instantActual = Temporal.Now.instant();


document.write(`fechaHoy: ${fechaHoy.toString()}<br>`);
document.write(`fechaHoraActual: ${fechaHoraActual.toString()}<br>`);
document.write(`fechaHoraActualConZona: ${fechaHoraActualConZona.toString()}<br>`);
document.write(`instantActual: ${instantActual.toString()}<br>`);

// Hora en España
const espana = instantActual.toZonedDateTimeISO("Europe/Madrid");

// Hora en Toronto (Canadá)
const canada = instantActual.toZonedDateTimeISO("America/Toronto");

document.write(`España: ${espana.toPlainTime().toString()}<br>`);
document.write(`Canadá: ${canada.toPlainTime().toString()}<br>`);



//mostrar las propiedades de la fecha actual
document.write(`Día: ${fechaHoy.day}<br>`);
document.write(`Mes: ${fechaHoy.month}<br>`); // month utiliza valores de 1 a 12
document.write(`Año: ${fechaHoy.year}<br>`);


//mostrar los días que tiene un mes
document.write(`El mes ${fechaHoy.month} del año ${fechaHoy.year} tiene ${fechaHoy.daysInMonth} días<br>`);


// ===============================
// CREAR FECHAS Y HORAS
// ===============================

// Fecha determinada
const fechaParam = Temporal.PlainDate.from({
    year: 2025,
    month: 9,
    day: 25
});

// Hora determinada
const hora = Temporal.PlainTime.from({
    hour: 14,
    minute: 30,
    second: 0
});

// Fecha y hora determinadas
const fechaHora = Temporal.PlainDateTime.from({
    year: 2025,
    month: 9,
    day: 25,
    hour: 14,
    minute: 30,
    second: 0
});


// ===============================
// FORMATEAR FECHAS
// ===============================

const formatoCorto = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "short"
});


const formatoNombreMes = new Intl.DateTimeFormat("es-ES", {
    month: "long"
});

document.writeln(
    "<h3>Fechas con formatos locales utilizando Temporal</h3>"
);

document.writeln(
    `Fecha hoy (formato corto):
    ${formatoCorto.format(fechaHoy)} <br>`
);

document.writeln(
    `Mes actual:
    ${formatoNombreMes.format(fechaHoy)} <br>`
);

document.writeln(
    `Fecha (formato corto):
    ${formatoCorto.format(fechaParam)} <br>`
);



// ===============================
// SUMAR TIEMPO
// ===============================

document.writeln(
    "<h3>Sumar 1 mes y 10 días a una fecha</h3>"
);
// Sumar 1 mes y 10 días a la fechaParam
const futuro = fechaParam.add({
    months: 1,
    days: 10
});

document.writeln(
    `Fecha inicial: ${formatoCorto.format(fechaParam)} <br>
     Fecha resultante: ${formatoCorto.format(futuro)}`
);


// ===============================
// RESTAR TIEMPO
// ===============================

document.writeln(
    "<h3>Restar 2 meses a una fecha</h3>"
);

const pasado = fechaParam.subtract({
    months: 2
});

document.writeln(
    `Fecha inicial: ${formatoCorto.format(fechaParam)} <br>
     Fecha resultante: ${formatoCorto.format(pasado)}`
);


// ===============================
// DIFERENCIA ENTRE DOS FECHAS
// ===============================

const inicio = Temporal.PlainDate.from("2025-09-18");
const fin = Temporal.PlainDate.from("2027-12-05");

// ===============================
// since() devuelve un objeto Temporal.Duration con la diferencia entre dos fechas
// ===============================
//
const diferencia = fin.since(inicio, {
    largestUnit: "years", // "months" / "days" /"weeks" / "hours" / "minutes" / "seconds"
    smallestUnit: "days", // "years" / "months" / "weeks" / "hours" / "minutes" / "seconds"
    roundingMode: "halfExpand", // "ceil" / "floor" /  "trunc", "halfExpand"
    roundingIncrement: 1 // número entero positivo, por defecto 1
});

console.log(diferencia.toString());

document.writeln(
    `<br>Tiempo transcurrido entre
    ${formatoCorto.format(inicio)} y
    ${formatoCorto.format(fin)}:
    ${diferencia.years} años,
    ${diferencia.months} meses y
    ${diferencia.days} días`
);


