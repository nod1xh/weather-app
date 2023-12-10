import { useRef, useState } from "react";
import Weather from "./components/Weather";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("New York");
  const inputValue = useRef();

  async function getWeatherData(e) {
    e.preventDefault();

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

  return (
    <>
      <div className="flex flex-col items-center font-raleway text-white bg-[url('./assets/images/bgclouds.jpg')] w-screen h-screen bg-cover tracking-wider">
        <div className="flex flex-col justify-center text-center w-2/4 my-3 rounded-md py-3 ">
          <div className="mb-10">
            <h1 className="mb-3 text-2xl font-extrabold ">WEATHER FORECAST</h1>
          </div>
          <div className="opacity-60">
            <form
              onSubmit={getWeatherData}
              className="flex justify-between w-full font-bold"
            >
              <input
                required
                onChange={handleCityData}
                ref={inputValue}
                type="text"
                className="bg-white bg-opacity-60 p-1 rounded-xl border-none focus:outline-none w-9/12 font-light tracking-wider text-center text-[#00183a] text-bold"
              />
              <button className=" rounded-md px-4 bg-[#dfa87f] hover:bg-[#cf725d] ">
                Get Weather
              </button>
            </form>
          </div>
        </div>
        {weatherData && (
          <Weather
            city={weatherData.city.name}
            country={weatherData.city.country}
            iconCode={weatherData.list[0].weather[0].icon}
            temp={Math.floor(weatherData.list[0].main.temp)}
            main={weatherData.list[0].weather[0].main}
          />
        )}
      </div>
    </>
  );
}

export default App;
