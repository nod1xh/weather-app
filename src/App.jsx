import { useRef, useState } from "react";
import clearIcon from "./assets/icons/sun.svg";

const currentDate = new Date();
const options = { weekday: "long", day: "numeric", month: "long" };
const formattedDate = currentDate.toLocaleDateString("en-US", options);

export function WeatherIcon(iconCode) {
  let iconPath;

  if ((iconCode = "o1d")) {
    iconPath = clearIcon;
  }

  return <img src={iconPath} alt={`Weather Icon`} className="w-40 h-40" />;
}

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
      console.error("Error trying to fetch weather data:", error); // Ispisi nesto kasnije na ekranu
    }
  }

  function handleCityData() {
    setCity(inputValue.current.value);
  }

  return (
    <>
      {/* Div koji obuhvaca sve  */}
      <div className="flex flex-col items-center font-raleway text-white bg-[url('./assets/images/bgclouds.jpg')] w-screen h-screen bg-cover tracking-wider">
        {/* h1 & form */}
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
          <div className=" rounded-md bg-[#FDFDFD] bg-opacity-20 w-2/4 text-[#265e99] ">
            <div className="ml-5 ">
              <h1 className="mt-3 text-4xl font-sans font-semibold ">
                {weatherData.city.name}, {weatherData.city.country}
              </h1>
              <h2 className="text-xl">{formattedDate}</h2>
            </div>
            <div className="flex m-5">
              <div className="mt-5">
                <WeatherIcon iconCode={weatherData.list[0].weather[0].icon} />
              </div>
              <div className="mt-16 ">
                <p className="ml-2 block text-2xl">
                  {Math.floor(weatherData.list[0].main.temp)}&deg;C
                </p>
                <p className="ml-2 block">
                  {weatherData.list[0].weather[0].main}
                </p>
              </div>
            </div>
            {/* <div>Ostali podaci </div> */}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
