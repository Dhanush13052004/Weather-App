import React, { useState } from "react";
import { fetchWeather } from "./services/weatherService"; 
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY; 

  const handleFetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const data = await fetchWeather(city, apiKey);

      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        setError(data.message || "Error fetching weather data.");
        setWeatherData(null);
      }
    } catch (err) {
      setError("Unable to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Weather App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="city-input"
        />
        <button onClick={handleFetchWeather} className="fetch-button">
          Get Weather
        </button>
      </div>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {Math.round(weatherData.main.temp)}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
        </div>
      )}
    </div>
  );
}

export default App;
