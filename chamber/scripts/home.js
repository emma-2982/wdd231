const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');



const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=94532b22a29979947305ec9092a6a21f";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            displayResults(data);
        } else {
            throw Error(await response.text());

        }
    } catch (error) {
        console.log(error)
    }
}
// Display results in HTML
function displayResults(data) {
    // Temperature
    currentTemp.textContent = `${data.main.temp}°F`;

    // Weather icon
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    // Description
    captionDesc.textContent = data.weather[0].description;
}
// function displayResults(data) {
//     currentTemp.innerHTML = `${data._____}&deg;F`;
//     const iconsrc = `https://openweathermap.org/img/w/${______}.___`;
//     let desc = data.weather[0].______;
//     weatherIcon.setAttribute('___', _____);
//     weatherIcon.setAttribute('___', _____);
//     captionDesc.textContent = `${desc}`;
// }

apiFetch();