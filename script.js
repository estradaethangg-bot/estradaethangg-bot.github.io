
let menuBtn = document.getElementById("menuBtn");
let navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("activo");
});

// Cerrar el menú al seleccionar una sección
let enlaces = document.querySelectorAll(".nav-links a");

enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        navLinks.classList.remove("activo");
    });
});
