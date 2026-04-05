// IMPORT JSON DATA
import { places } from "../data/discover.mjs";

// SELECT GRID CONTAINER
const grid = document.querySelector(".discover-grid");

// BUILD CARDS
places.forEach(place => {
  const card = document.createElement("section");
  card.classList.add("discover-card");

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button class="learn-more">Learn More</button>
  `;

  grid.appendChild(card);
});

// LAST VISIT MESSAGE
const message = document.querySelector("#visit-message");
const lastVisit = Number(localStorage.getItem("lastVisit"));
const now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const msInDay = 1000 * 60 * 60 * 24;
  const days = Math.floor((now - lastVisit) / msInDay);

  if (days < 1) {
    message.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    message.textContent = "You last visited 1 day ago.";
  } else {
    message.textContent = `You last visited ${days} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);
c