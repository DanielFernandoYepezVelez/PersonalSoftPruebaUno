// Datos De Entrada Con JavaScript

// DATOS PRIMITIVOS
let nombreUsuario="Daniel Fernando Yepez Vélez";
let edad=29;
let hinchaRojo=false;
let estatura=1.70;
let deuda=-100;

console.log(nombreUsuario);
/* Estructura De Datos Multiples */

/* Arreglos De Datos (Definición)*/
/* Es una variable especial que almacena varios 
datos en una sola posición de memoria */

/* En los arreglos todos los datos son del mismo tipo (Buenas Prácticas) */
let numeros=[1,2,3,4,5];
let nombres=["juan", "carlos", "maria"];
let descuentos=[true, true, false];

console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);

/* Objetos Son Variables Especiales */
/* Permiten almacenar varios datos de distinto tipo en una sola variable */
let persona={
    nombre:"Daniel Fernando",
    edad:29,
    hinchaDelMedellin:"Poderoso Medellin",
    estatura:1.63
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.hinchaDelMedellin);
console.log(persona.estatura);