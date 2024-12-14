const CACHE_EXPIRATION_TIME = 600000; 


const isCacheValid = (cacheKey) => {
  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    const currentTime = Date.now();
    return currentTime - parsedData.timestamp < CACHE_EXPIRATION_TIME; 
  }
  return false;
};

export const fetchWeather = async (city, apiKey) => {
  const cacheKey = `weatherData_${city}`;
  if (isCacheValid(cacheKey)) {
    const cachedData = JSON.parse(localStorage.getItem(cacheKey));
    return cachedData.data; 
  }
  
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );
  const data = await response.json();

  if (data.cod === 200) {
    localStorage.setItem(
      cacheKey,
      JSON.stringify({
        data,
        timestamp: Date.now(), 
      })
    );
  }

  return data;
};
