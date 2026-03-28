const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastDiv = document.querySelector('#forecast');

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Abu Dhabi&units=metric&appid=94532b22a29979947305ec9092a6a21f";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=Abu Dhabi&units=metric&appid=94532b22a29979947305ec9092a6a21f";

async function getWeather() {
    const res = await fetch(weatherURL);
    const data = await res.json();
    console.log(data)

    currentTemp.textContent = `${data.main.temp}°C`;
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    captionDesc.textContent = data.weather[0].description;
}

async function getForecast() {
    const res = await fetch(forecastURL);
    const data = await res.json();

    const days = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    forecastDiv.innerHTML = days.slice(0, 3)
        .map(day => `<p>${day.main.temp}°C</p>`)
        .join('');
}

getWeather();
getForecast();