function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleDarkMode() {
    const body = document.body;
    const darkModeIconDesktop = document.getElementById("desktop-dark-mode-icon");
    const darkModeIconHamburger = document.getElementById("hamburger-dark-mode-icon");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        darkModeIconDesktop.src = "./assets/dark.png";
        darkModeIconHamburger.src = "dark.png";
    } else {
        darkModeIconDesktop.src = "./assets/white.png";
        darkModeIconHamburger.src = "./assets/white.png";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggleDesktop = document.getElementById("desktop-dark-mode-toggle");
    const darkModeToggleHamburger = document.getElementById("hamburger-dark-mode-toggle");

    darkModeToggleDesktop.addEventListener("click", toggleDarkMode);
    darkModeToggleHamburger.addEventListener("click", toggleDarkMode);
});
