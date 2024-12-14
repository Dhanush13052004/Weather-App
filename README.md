# Weather-App
This Weather App is a simple, user-friendly application that allows users to check current weather data for a specified city. The app fetches real-time weather information from the OpenWeatherMap API and displays it in a readable format. The app includes features like temperature, humidity, weather descriptions, and wind speed. It also allows users to input the name of a city and get the latest weather details for that location.

## Key Features:

This Weather App allows users to input the name of any city to retrieve detailed weather information, including the temperature in Celsius, weather description (e.g., clear sky, rainy), humidity percentage, and wind speed. If the user enters an invalid city name or there is an issue with fetching the data, the app displays an appropriate error message. While the weather data is being fetched from the OpenWeatherMap API, a loading indicator is shown to keep the user informed. To improve performance and reduce unnecessary API calls, the app implements caching using localStorage. If the weather data for a city has been previously fetched and is still valid (not older than 10 minutes), it is retrieved from the cache, providing a quicker response time and reducing the need for repeated API requests.

## Technologies Used

- **React.js**: For building the user interface (UI) and managing the state.  
- **CSS**: For styling the app, making it visually appealing and responsive.  
- **OpenWeatherMap API**: Provides the weather data based on the city name entered by the user.
