// Obteniendo Datos Del Local Storage
let peliculaLocalStorage = JSON.parse(localStorage.getItem('pelicula'));

// Asociar Las Etiquetas De HTML Y JS
let etiquetaImagenPelicula = document.getElementById('imagenPelicula');
let etiquetaNombrePelicula = document.getElementById('nombrePelicula');
let etiquetaDuracionPelicula = document.getElementById('nombrePelicula');
let etiquetaSinopsisPelicula = document.getElementById('sinopsisPelicula');

etiquetaImagenPelicula.src = peliculaLocalStorage['imagen'];
etiquetaNombrePelicula.textContent = peliculaLocalStorage['titulo'];
etiquetaDuracionPelicula.textContent = peliculaLocalStorage['duracion'];
etiquetaSinopsisPelicula.textContent = peliculaLocalStorage['sinopsis'];

console.log(peliculaLocalStorage);