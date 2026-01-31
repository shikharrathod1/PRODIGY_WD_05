const API_KEY = "3f311e100bfde781d32327b5bf2f7751"; 

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

const locationEl = document.getElementById('location');
const temperatureEl = document.getElementById('temperature');
const descriptionEl = document.getElementById('description');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if(city !== "") {
        fetchWeather(city);
    }
});

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        if(!response.ok) throw new Error("City not found");
        const data = await response.json();

        locationEl.textContent = `Location: ${data.name}, ${data.sys.country}`;
        temperatureEl.textContent = `Temperature: ${data.main.temp} °C`;
        descriptionEl.textContent = `Condition: ${data.weather[0].description}`;
        humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
        windEl.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    } catch (error) {
        locationEl.textContent = "";
        temperatureEl.textContent = "";
        descriptionEl.textContent = "";
        humidityEl.textContent = "";
        windEl.textContent = "";
        alert(error.message);
    }
}
