let pass = 1234;
let user = 'admin';

const uIngresado = prompt('Ingresa usuario: ');
const cIngresada =parseInt(prompt('Ingresa tu clave'));

if( user === uIngresado && pass === cIngresada ){
    alert('Bienvenido al sistema...');
}else {
    alert('Error al ingresar credenciales...');
}