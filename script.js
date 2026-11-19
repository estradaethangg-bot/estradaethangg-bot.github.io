
document.addEventListener("DOMContentLoaded", function() {

    // =====================================
    // MENU DE NAVEGACION
    // =====================================

    let menuBtn = document.getElementById("menuBtn");
    let navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function() {
            navLinks.classList.toggle("activo");
        });

        let enlaces = document.querySelectorAll(".nav-links a");

        enlaces.forEach(function(enlace) {
            enlace.addEventListener("click", function() {
                navLinks.classList.remove("activo");
            });
        });

    }


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
            imagenes = galeria.dataset.imagenes
                .split(",")
                .map(function(nombre) {
                    return nombre.trim();
                })
                .filter(function(nombre) {
                    return nombre !== "";
                });
        }

        let posicion = 0;

        function mostrarImagen() {

            if (!imagen || !anterior || !siguiente || !contador || imagenes.length === 0) {

                if (contador) contador.textContent = "0 / 0";
                if (anterior) anterior.style.display = "none";
                if (siguiente) siguiente.style.display = "none";

                return;
            }

            imagen.src = imagenes[posicion];

            contador.textContent =
                (posicion + 1) + " / " + imagenes.length;

            anterior.style.display = "flex";
            siguiente.style.display = "flex";
        }


        // IMAGEN ANTERIOR
        if (anterior) {

            anterior.addEventListener("click", function() {

                if (imagenes.length <= 1) return;

                posicion--;

                if (posicion < 0) {
                    posicion = imagenes.length - 1;
                }

                mostrarImagen();

            });

        }


        // IMAGEN SIGUIENTE
        if (siguiente) {

            siguiente.addEventListener("click", function() {

                if (imagenes.length <= 1) return;

                posicion++;

                if (posicion >= imagenes.length) {
                    posicion = 0;
                }

                mostrarImagen();

            });

        }

        mostrarImagen();

    });

});
