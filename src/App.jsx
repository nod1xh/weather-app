import { useRef, useState } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("New York");
  const inputValue = useRef();

  async function getWeatherData() {
    try {
      const apiKey = "f03f9c8183c747374c01f5a936e384ca";
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);

      console.log(data);
    } catch (error) {
      console.error("Error trying to fetch weather data:", error);
    }
  }

  function handleCityData() {
    setCity(inputValue.current.value);
  }

  function handleFetchData(e) {
    e.preventDefault();
    getWeatherData();
  }

  return (
    <>
      <Header
        data={weatherData}
        getWeather={handleFetchData}
        getCity={handleCityData}
        input={inputValue}
      />
    </>
  );
}

export default App;
