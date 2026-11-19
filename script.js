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

    let imagenes = [];

    if (galeria.dataset.imagenes) {
        imagenes = galeria.dataset.imagenes.split(",");
    }

    let posicion = 0;

    function mostrarImagen() {

        if (!imagen || imagenes.length === 0) {
            contador.textContent = "0 / 0";
            anterior.style.display = "none";
            siguiente.style.display = "none";
            return;
        }

        imagen.src = imagenes[posicion];

        contador.textContent =
            (posicion + 1) + " / " + imagenes.length;

        anterior.style.display = "flex";
        siguiente.style.display = "flex";
    }

    // IMAGEN ANTERIOR
    anterior.addEventListener("click", function() {

        if (imagenes.length <= 1) return;

        posicion--;

        if (posicion < 0) {
            posicion = imagenes.length - 1;
        }

        mostrarImagen();
    });

    // IMAGEN SIGUIENTE
    siguiente.addEventListener("click", function() {

        if (imagenes.length <= 1) return;

        posicion++;

        if (posicion >= imagenes.length) {
            posicion = 0;
        }

        mostrarImagen();
    });

    mostrarImagen();

});
```
