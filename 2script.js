async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey ='5b0e1a291ce094041ed92b4eab8ea529'; // Replace with your OpenWeatherMap API key

  if (!city) {
    document.getElementById('weatherOutput').innerHTML = <p>Please enter a city name.</p>;
    return;
  }

  const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      document.getElementById('weatherOutput').innerHTML = <p>City not found. Please try again.</p>;
      return;
    }

    const weatherHTML = `
      <h2>${data.name}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].main}</p>
      <p><strong>Description:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
    `;

    document.getElementById('weatherOutput').innerHTML = weatherHTML;

  } catch (error) {
    document.getElementById('weatherOutput').innerHTML = <p>Error fetching data. Please try again later.</p>;
  }
}