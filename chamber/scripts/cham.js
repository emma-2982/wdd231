
// MOBILE MENU TOGGLE
const menuButton = document.querySelector("#menu-toggle");
const navList = document.querySelector("#primary-nav ul");

menuButton.addEventListener("click", () => {
    navList.classList.toggle("open");
});

// FOOTER DATES
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// STUDENT NAME
document.getElementById("student-name").textContent = "Emmanuel";

