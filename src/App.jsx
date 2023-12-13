import { useCallback, useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";
import ShowError from "./components/ShowError";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("New York");
  const [error, setError] = useState();
  const inputValue = useRef();

  const getWeatherData = useCallback(async (e) => {
    e.preventDefault();
    try {
      const apiKey = "f03f9c8183c747374c01f5a936e384ca";
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.cod == 200) {
        setWeatherData(data);
        setError(null);
        console.clear();
      }
      if (data.cod != 200) {
        setWeatherData(null);
        throw new Error("Failed to find a city, please try again!");
      }
    } catch (error) {
      setError(error.message);
    }
  });

  useEffect(() => {
    if (weatherData === null) {
      return;
    }
  }, [weatherData]);

  const handleCityData = useCallback(() => {
    setCity(inputValue.current.value);
  }, [weatherData]);

  return (
    <div className="flex flex-col items-center">
      <Header
        data={weatherData}
        getWeather={getWeatherData}
        getCity={handleCityData}
        input={inputValue}
      />
      {error && <ShowError errorInfo={error} />}
      {weatherData && <Weather data={weatherData} />}
      {weatherData && (
        <div className="flex flex-row w-full ">
          <Forecast data={weatherData} />
        </div>
      )}
    </div>
  );
}

export default App;
