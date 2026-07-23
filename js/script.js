<<<<<<< HEAD
//=====================================
// CARGABOT
//=====================================

// Cambiar fondo del menú al hacer scroll

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

=======
//=====================================
// CARGABOT
//=====================================

// Cambiar fondo del menú al hacer scroll

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

>>>>>>> 2a82998 (Agregado favicon y corregido logo)
});