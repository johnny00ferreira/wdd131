
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;


const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});
