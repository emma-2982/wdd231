// Set timestamp on page load
document.getElementById("timestamp").value = new Date().toISOString();

// Modal Logic
const buttons = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll(".modal");
const closes = document.querySelectorAll(".close");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const modal = document.getElementById(btn.dataset.modal);
        modal.style.display = "block";
    });
});

closes.forEach(close => {
    close.addEventListener("click", () => {
        close.parentElement.parentElement.style.display = "none";
    });
});

window.addEventListener("click", (e) => {
    modals.forEach(modal => {
        if (e.target === modal) modal.style.display = "none";
    });
});