import { useRef, useState } from "react";

const currentDate = new Date();
const options = { weekday: "long", day: "numeric", month: "short" };
const formattedDate = currentDate.toLocaleDateString("en-US", options);

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
      <div className="flex flex-col items-center font-raleway text-white bg-[url('./assets/images/newestbg.jpg')] w-screen h-screen bg-cover tracking-wider">
        {/* h1 & form */}
        <div className="flex flex-col justify-center text-center w-2/4 my-3 rounded-md py-3 ">
          <div className="mb-40">
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
                Get location
              </button>
            </form>
          </div>
        </div>
        {weatherData && (
          <div className="relative rounded-md bg-[#FDFDFD] bg-opacity-20 w-2/4 p-32 ">
            <div className="absolute inset-x-0 top-0 h-16 text-center">
              <h1 className="mt-3 text-4xl font-sans font-semibold">
                {weatherData.city.name}
              </h1>
              <h2>{formattedDate}</h2>
            </div>
            <div>
              <p>Temp: {Math.floor(weatherData.list[0].main.temp)}</p>
              <p>Humidity: {Math.floor(weatherData.list[0].main.humidity)}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
