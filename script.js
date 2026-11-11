
// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const isOpen = navMenu.classList.contains("open");

    menuToggle.textContent = isOpen ? "×" : "☰";

    menuToggle.setAttribute("aria-expanded", String(isOpen));

});

// Close navigation after clicking a link
navMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});

// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();
