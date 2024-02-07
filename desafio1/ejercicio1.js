const cf = prompt('Ingresa costos fijos');
const pv = prompt('Ingresa precio de venta');
const cv = prompt('Ingresa los costos variables');

const calculo = cf / (pv-cv);
alert('El punto de equilibrio es: ' + calculo);

