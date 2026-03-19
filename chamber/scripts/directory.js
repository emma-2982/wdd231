
async function getMembers() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    const container = document.querySelector('#directory');
    container.innerHTML = ""; 

    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-card');

        card.innerHTML = `
            <img src="./images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p class="level">Membership Level: ${member.membership}</p>
        `;

        container.appendChild(card);
    });
}


const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');
const directory = document.querySelector('#directory');

gridBtn.addEventListener('click', () => {
    directory.classList.add('grid');
    directory.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    directory.classList.add('list');
    directory.classList.remove('grid');
});


getMembers();
