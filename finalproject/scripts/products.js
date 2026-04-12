const grid = document.querySelector("#products-grid");
const searchInput = document.querySelector("#search");
const modal = document.querySelector("#cakeModal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");

let cakes = [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

/* FOOTER YEAR */
document.querySelector("#year").textContent = new Date().getFullYear();

/* HAMBURGER MENU */
const menuBtn = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuBtn.classList.toggle("open");
});

/* FETCH DATA */
async function loadCakes() {
    try {
        const response = await fetch("data/cakes.json");

        if (!response.ok) {
            throw new Error("Failed to load data");
        }

        cakes = await response.json();
        displayCakes(cakes);

    } catch (error) {
        grid.innerHTML = "<p>Unable to load cakes. Try again later.</p>";
        console.error(error);
    }
}

/* DISPLAY PRODUCTS */
function displayCakes(list) {
    grid.innerHTML = "";

    list.forEach(cake => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${cake.image}" alt="${cake.name}" loading="lazy">
            <h3>${cake.name}</h3>
            <p>${cake.price}</p>
            <p>⭐ ${cake.rating}</p>
            <button data-id="${cake.id}">View Details</button>
        `;

        grid.appendChild(card);
    });

    /* ADD EVENT LISTENERS */
    document.querySelectorAll("button[data-id]").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.target.dataset.id;
            openModal(id);
        });
    });
}

/* MODAL */
function openModal(id) {
    const cake = cakes.find(c => c.id == id);

    modalContent.innerHTML = `
        <h2>${cake.name}</h2>
        <img src="${cake.image}" alt="${cake.name}" style="width:100%;border-radius:10px;">
        <p>${cake.description}</p>
        <p><strong>Price:</strong> ${cake.price}</p>
        <p><strong>Rating:</strong> ⭐ ${cake.rating}</p>
    `;

    modal.showModal();
}

closeModal.addEventListener("click", () => {
    modal.close();
});

/* SEARCH FUNCTION */
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = cakes.filter(cake =>
        cake.name.toLowerCase().includes(value)
    );

    displayCakes(filtered);
});

/* INIT */
loadCakes();