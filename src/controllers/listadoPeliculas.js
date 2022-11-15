let peliculas = [
    {
        nombre: "Black Adam",
        duracion: 120,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/Black%20adam%20ultimonuevo.jpg?alt=media&token=7c8222a5-6115-4845-ad0a-def8273414d9",
    },
    {
        nombre: "Erase Una Vez Un Genio",
        duracion: 60,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/ERASE%20UNA%20VEZ%20UN%20GENIO1.jpg?alt=media&token=bd781c64-1978-466a-9bd8-d99cd1d50f64",
    },
    {
        nombre: "Estamos Hechos Para Amarnos",
        duracion: 70,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/ESTAMOS%20HECHOS%20PARA%20AMARNOS1.jpg?alt=media&token=f1f6d49b-ce12-48d4-a4d7-f6a7cd9d2041",
    },
    {
        nombre: "La Mujer Rey",
        duracion: 80,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/LA%20MUJER%20REY%20NUEVO%20POSTER1.jpg?alt=media&token=86e42cec-2ef0-4874-ba90-f0c084af94fb",
    },
    {
        nombre: "Super Mascota",
        duracion: 90,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/SUPERMASCOTASNUEVO.jpg?alt=media&token=f00e257a-16c3-4fca-aca8-378dd8b80445",
    },
    {
        nombre: "Vista Por Última Vez",
        duracion: 110,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/VISTA%20POR%20ULTIMA%20VEZ1.jpg?alt=media&token=bafe34b8-a0a4-4d12-9158-dd104a8a920c",
    },
    {
        nombre: "Hallowen",
        duracion: 340,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=83a286db-d0dd-435f-aa46-7c735ef0904a",
    },
    {
        nombre: "Jeeppers",
        duracion: 40,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/jeeppers.jpg?alt=media&token=fe45107b-78de-4564-a602-4ec56591d352",
    },
    {
        nombre: "Minions 2",
        duracion: 150,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/minions2posternuevo.jpg?alt=media&token=b279e5d5-68c8-4a8e-abe6-52210fbf065d",
    },
    {
        nombre: "One Piece",
        duracion: 140,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/onepiece.jpg?alt=media&token=2c47bd8d-70f5-44a6-bf25-2f87c61d4377",
    },
    /* {
        nombre:"Tadeo 3",
        duracion: 120,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/tadeo3nuevoposter.jpg?alt=media&token=468028cd-9712-4646-b2bb-82eec1764631",
    },
    {
        nombre: "Wakanda",
        duracion: 65,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/wakanda.jpg?alt=media&token=729f1bcd-02f5-4389-a6a8-562ff0f1db34",
    }, */
];

/* let fila = document.getElementById('fila');

peliculas.forEach(function(pelicula) {
    console.log(pelicula);
    // console.log(pelicula.poster);
    // console.log(pelicula['poster']);

    let foto = document.createElement("img");
    foto.src=pelicula['poster'];
    foto.classList.add('img-fluid', "w-100");

    fila.appendChild(foto);
}); */

/* Interactuando Con El DOM Y Bootstrap */
/* Etiqqueta De Referencia Donde Voy A Renderizar La Información */
let etiquetaFila = document.getElementById('fila');

/* Recorrer Mi Arreglo De Peliculas De Forma Imperativa */
peliculas.forEach(function(pelicula) {
    // TRAVERSING = Crear Etiquetas De HTML Desde JS
    let nombre = document.createElement('h3');
    let duracion = document.createElement('p');
    let poster = document.createElement('img');
    let columna = document.createElement('div');
    let tarjeta = document.createElement('div');

    // Agregando Contenido A La Etiquetas
    poster.src = pelicula['poster'];
    nombre.textContent = pelicula['nombre'];
    duracion.textContent = 'Duración: ' + pelicula["duracion"] + ' Minutos';

    // Agregando Estilos De Bootstrap A Las Etiquetas Anteriores
    columna.classList.add("col");
    tarjeta.classList.add('card', 'h-100', 'shadow');
    poster.classList.add('img-fluid', 'w-100');
    nombre.classList.add('text-center', 'fw-bold');
    
    // Jerarquía De Etiquetas (Mostrar La Etiquetas En El DOM)
    etiquetaFila.appendChild(columna);
    columna.appendChild(tarjeta);
    
    tarjeta.appendChild(poster);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(duracion);
});
