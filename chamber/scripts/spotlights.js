const spotlights = document.querySelector('#spotlights');

async function getMembers() {
    const res = await fetch('data/members.json');
    const data = await res.json();

    const members = data.members.filter(m =>
        m.membership === "Gold" || m.membership === "Silver"
    );

    const random = members.sort(() => 0.5 - Math.random()).slice(0, 3);

    spotlights.innerHTML = random.map(m => `
    <div class="spotlight">
      <img src="${m.image}" alt="${m.name}">
      <h3>${m.name}</h3>
      <p>${m.phone}</p>
      <p>${m.address}</p>
      <a href="${m.website}" target="_blank">Visit</a>
      <p>${m.membership}</p>
    </div>
  `).join('');
}

getMembers();