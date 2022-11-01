let nombres = ["Sara", "Dani", "Fernanda", "Camila", "Paula"];

// Programación IMPERATIVA
for (let index = 0; index < nombres.length; index++) {
    const element = nombres[index];   
    console.log(nombres);
    console.log(nombres[index]);
    console.log(element);
    console.log("Hola Bebe, ¿Cuantos Novios Tienes? " + index);
}
console.log("========================");

// Programación DECLARATIVA
// Reescribir Un Ciclo For En Js
nombres.forEach(function(nombre) {
    console.log(nombre);
});
console.log("========================");

nombres.forEach(nombre => console.log(nombre));
console.log("========================");

// nombres.forEach(console.log);
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach(function(numero) {
    let suma = numero + 10;
    console.log(suma);
});
console.log("========================");

let salarios = [3500000, 500000, 800000];

salarios.forEach(function(salario) {
   let iva = salario * 0.1;
   let salarioFinal = salario - iva;
   console.log(salarioFinal); 
})
console.log("========================");

let promedio;
let acumulador = 0;
let calificaciones = [3.5, 4, 2, 1.5, 3];

calificaciones.forEach(function(calificacion) {
    acumulador += calificacion; 
});

promedio = acumulador / calificaciones.length;
console.log(promedio);

console.log("========================");







