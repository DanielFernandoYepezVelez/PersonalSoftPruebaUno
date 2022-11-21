let peliculas = [
    {
        nombre: "Black Adam",
        duracion: 120,
        sinopsis: "Unos arqueólogos liberan de su tumba a Black Adam, quien llevaba 5000 años preso tras haber recibido los poderes de los dioses. De nuevo entre los humanos, Black Adam se dispone a imponer su justicia, muy diferente a la del mundo en el que despertó.",
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/Black%20adam%20ultimonuevo.jpg?alt=media&token=7c8222a5-6115-4845-ad0a-def8273414d9",
    },
    {
        nombre: "Erase Una Vez Un Genio",
        duracion: 60,
        sinopsis: "Mientras asiste a una conferencia en Estambul, la doctora Binnie se encuentra con un genio que le ofrece tres deseos a cambio de libertad. Primero, la académica cree que está alucinando; después, como experta en mitos, sabe que la oferta es engañosa.",
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/ERASE%20UNA%20VEZ%20UN%20GENIO1.jpg?alt=media&token=bd781c64-1978-466a-9bd8-d99cd1d50f64",
    },
    {
        nombre: "Estamos Hechos Para Amarnos",
        duracion: 70,
        sinopsis: "Un profesor de historia de unos 50 años descubre que está perdiendo la audición. Sin embargo, su mundo cambia cuando conoce a una viuda que ha dejado de hablar.",
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/ESTAMOS%20HECHOS%20PARA%20AMARNOS1.jpg?alt=media&token=f1f6d49b-ce12-48d4-a4d7-f6a7cd9d2041",
    },
    {
        nombre: "La Mujer Rey",
        duracion: 80,
        sinopsis :"En la década de 1820, en África, una unidad militar exclusivamente femenina del reino de Dahomey se prepara para luchar contra las tropas invasoras del Imperio de Oyo, cuyo propósito es esclavizar a la población conquistada.",
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/LA%20MUJER%20REY%20NUEVO%20POSTER1.jpg?alt=media&token=86e42cec-2ef0-4874-ba90-f0c084af94fb",
    },
    {
        nombre: "Super Mascota",
        duracion: 90,
        sinopsis: "El superperro Krypto une a un grupo de divertidos y descerebrados animales para que lo ayuden a rescatar a los superhéroes de la Liga de la Justicia, que han sido secuestrados.",
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/SUPERMASCOTASNUEVO.jpg?alt=media&token=f00e257a-16c3-4fca-aca8-378dd8b80445",
    },
    {
        nombre: "Vista Por Última Vez",
        duracion: 110,
        sinopsis: "La esposa de Will Spann desaparece en una estación de servicio. Desesperado y dispuesto a todo por encontrarla viva, Will emprende una búsqueda que lo conduce a enfrentarse a las fuerzas del orden y adentrarse en un camino hacia el abismo.",
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/VISTA%20POR%20ULTIMA%20VEZ1.jpg?alt=media&token=bafe34b8-a0a4-4d12-9158-dd104a8a920c",
    },
    {
        nombre: "Hallowen",
        duracion: 340,
        sinopsis: "Un psiquiatra sigue el camino sangriento de un psicópata que se ha escapado de una institución mental luego de estar internado 17 años y que huye a su pueblo natal.",
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=83a286db-d0dd-435f-aa46-7c735ef0904a",
    },
    {
        nombre: "Jeeppers",
        duracion: 40,
        sinopsis: "Trish Jenner y su hermano menor Derry cruzan EE.UU. en coche, en un viaje largo y aburrido cuya monotonía sólo es rota por sus continuas discusiones. De pronto, en mitad de ninguna parte, descubren una iglesia abandonada, cuyo tejado está cubierto por una espesa bandada de cuervos, y ven como un misterioso personaje arroja un bulto al interior de una gran boca del alcantarillado.En ese momento comienzan una huída aterradora, perseguidos por una de las criaturas más letales que se pueda imaginar.",
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/jeeppers.jpg?alt=media&token=fe45107b-78de-4564-a602-4ec56591d352",
    },
    {
        nombre: "Minions 2",
        duracion: 150,
        sinopsis: "En los años 70, Gru crece siendo un gran admirador de Los salvajes seis, un supergrupo de villanos. Para demostrarles que puede ser malvado, Gru idea un plan con la esperanza de formar parte de la banda. Por suerte, cuenta con la ayuda de sus fieles seguidores, los Minions, siempre dispuestos a sembrar el caos.",
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemadaniel-5b659.appspot.com/o/minions2posternuevo.jpg?alt=media&token=b279e5d5-68c8-4a8e-abe6-52210fbf065d",
    },
    {
        nombre: "One Piece",
        duracion: 140,
        sinopsis: "One Piece es la historia de un chico llamado Monkey D. Luffy, quién se inspiró en Shanks, un pirata que le salvó la vida, para convertirse en el Rey de los Piratas. Al comienzo de la serie, veinticuatro años antes de la historia actual, un pirata llamado Gol D.",
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
    let poster = document.createElement('img');
    let duracion = document.createElement('h6');
    let columna = document.createElement('div');
    let tarjeta = document.createElement('div');
    let sinopsis = document.createElement('p');

    // Agregando Contenido A La Etiquetas
    poster.src = pelicula['poster'];
    nombre.textContent = pelicula['nombre'];
    duracion.textContent = 'Duración: ' + pelicula["duracion"] + ' Minutos';
    sinopsis.textContent = pelicula['sinopsis'];

    // Agregando Estilos De Bootstrap A Las Etiquetas Anteriores
    columna.classList.add("col");
    tarjeta.classList.add('card', 'h-100', 'shadow', 'p-1');
    poster.classList.add('img-fluid', 'w-100');
    nombre.classList.add('text-center', 'fw-bold', 'underline');
    sinopsis.classList.add('text-justify', 'text-truncate', 'fw-bold');
    
    // Jerarquía De Etiquetas (Mostrar La Etiquetas En El DOM)
    etiquetaFila.appendChild(columna);
    columna.appendChild(tarjeta);
    tarjeta.appendChild(poster);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(duracion);
    tarjeta.appendChild(sinopsis);
});

let peliculaSeleccionada = {};

// Escuchando el evento del clic en alguna pelicula de la cartelera1
etiquetaFila.addEventListener("click", function(event) {
    if (event.target.classList.contains('img-fluid')) {
        // Obteniendo Los Datos De La Pelicula (Referencia Desde Padre Al Hijo)
        peliculaSeleccionada['imagen'] = event.target.parentElement.querySelector('img').src;
        peliculaSeleccionada['titulo'] = event.target.parentElement.querySelector('h3').textContent;
        peliculaSeleccionada['duracion'] = event.target.parentElement.querySelector('h6').textContent;
        peliculaSeleccionada['sinopsis'] = event.target.parentElement.querySelector('p').textContent;
       
        // Eviando Los Datos De La Pelicula Al Local Storage (Almacenamiento Local)
        localStorage.setItem('pelicula', JSON.stringify(peliculaSeleccionada));
        window.location.href = './src/views/verInfoPeliculas.html';
    }
});