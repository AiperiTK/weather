document.getElementById('weather-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const cityInput = document.getElementById('city');
    const city = cityInput.value.trim();

    if (city !== '') {
        getWeather(city);
    } else {
        alert('Пожалуйста, введите название города.');
    }
});

function getWeather(city) {
    const apiKey = 'd1fe023138da6a77c6fe304b65620c22';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Ошибка при получении данных о погоде:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <p>Температура: ${data.main.temp}°C</p>
        <p>Влажность: ${data.main.humidity}%</p>
        <p>Описание: ${data.weather[0].description}</p>
    `;
}

getWeather('Osh');