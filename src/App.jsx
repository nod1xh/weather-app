import { useCallback, useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("New York");
  const [animate, setAnimate] = useState(false);
  const inputValue = useRef();

  async function getWeatherData() {
    try {
      const apiKey = "f03f9c8183c747374c01f5a936e384ca";
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
      setAnimate(true);

      console.log(data);
    } catch (error) {
      console.error("Error trying to fetch weather data:", error);
    }
  }

  const handleCityData = useCallback(() => {
    setCity(inputValue.current.value);
  }, []);

  function handleFetchData(e) {
    e.preventDefault();
    getWeatherData();
  }

  return (
    <div className="flex flex-col items-center">
      <Header
        data={weatherData}
        getWeather={handleFetchData}
        getCity={handleCityData}
        input={inputValue}
      />
      {weatherData && <Weather data={weatherData} animation={animate} />}
      {weatherData && (
        <div className="flex flex-row w-full ">
          <Forecast data={weatherData} animation={animate} />
        </div>
      )}
    </div>
  );
}

export default App;
