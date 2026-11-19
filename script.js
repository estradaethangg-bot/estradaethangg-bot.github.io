```javascript
// =====================================
// MENU DE NAVEGACION
// =====================================

let menuBtn = document.getElementById("menuBtn");
let navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("activo");
});

let enlaces = document.querySelectorAll(".nav-links a");

enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        navLinks.classList.remove("activo");
    });
});


// =====================================
// GALERIAS DE PROYECTOS
// =====================================

document.querySelectorAll("[data-galeria]").forEach(function(galeria) {

    let imagen = galeria.querySelector(".proyecto-img");
    let anterior = galeria.querySelector(".anterior");
    let siguiente = galeria.querySelector(".siguiente");
    let contador = galeria.querySelector(".galeria-contador");

    // Obtener los nombres de las imágenes
    let imagenes = galeria.dataset.imagenes
        ? galeria.dataset.imagenes.split(",")
        : [];

    let posicion = 0;

    function mostrarImagen() {

        // Si no hay imágenes, ocultar las flechas
        if (imagenes.length === 0 || !imagen) {

            contador.textContent = "0 / 0";

            anterior.style.display = "none";
            siguiente.style.display = "none";

            return;
        }

        // Mostrar la imagen seleccionada
        imagen.src = imagenes[posicion];

        // Actualizar contador
        contador.textContent =
            (posicion + 1) + " / " + imagenes.length;

        // Mostrar flechas solamente si hay varias imágenes
        anterior.style.display =
            imagenes.length > 1 ? "flex" : "none";

        siguiente.style.display =
            imagenes.length > 1 ? "flex" : "none";
    }


    // BOTON ANTERIOR
    anterior.addEventListener("click", function() {

        posicion--;

        if (posicion < 0) {
            posicion = imagenes.length - 1;
        }

        mostrarImagen();
    });


    // BOTON SIGUIENTE
    siguiente.addEventListener("click", function() {

        posicion++;

        if (posicion >= imagenes.length) {
            posicion = 0;
        }

        mostrarImagen();
    });


    // Mostrar primera imagen al cargar la página
    mostrarImagen();

});
```
