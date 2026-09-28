//Ejemplos con Intl RelativeTimeFormat();

const formatoI= new Intl.RelativeTimeFormat("es-ES",{
    numeric:"auto"
});
const formatoII= new Intl.RelativeTimeFormat("es-ES",{
    numeric:"always"
});

document.write(`Formato numeric(auto): ${formatoI.format(0, "day")}<br>`);
document.write(`Formato numeric(always): ${formatoII.format(-5, "month")}<br>`);
document.write(`Formato numeric(auto): ${formatoI.format(-1, "day")}<br>`);