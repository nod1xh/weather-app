import ForecastCard from "./ForecastCard";
import "animate.css";

export default function Forecast({ data }) {
  return (
    <>
      <div className="flex flex-col m-10 animate-fadeIn">
        <div className=" text-2xl text-[#00183a]">
          <h1>Forecast</h1>
        </div>
        <div className="flex flex-row">
          <ForecastCard
            temp={Math.floor(data.list[6].main.temp)}
            date={data.list[6].dt_txt}
            weathericon={data.list[6].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[8].main.temp)}
            date={data.list[8].dt_txt}
            weathericon={data.list[8].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[10].main.temp)}
            date={data.list[10].dt_txt}
            weathericon={data.list[10].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[14].main.temp)}
            date={data.list[14].dt_txt}
            weathericon={data.list[14].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[16].main.temp)}
            date={data.list[16].dt_txt}
            weathericon={data.list[16].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[18].main.temp)}
            date={data.list[18].dt_txt}
            weathericon={data.list[18].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[22].main.temp)}
            date={data.list[22].dt_txt}
            weathericon={data.list[22].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[24].main.temp)}
            date={data.list[24].dt_txt}
            weathericon={data.list[24].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[26].main.temp)}
            date={data.list[26].dt_txt}
            weathericon={data.list[26].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[30].main.temp)}
            date={data.list[30].dt_txt}
            weathericon={data.list[30].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[32].main.temp)}
            date={data.list[32].dt_txt}
            weathericon={data.list[32].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[34].main.temp)}
            date={data.list[34].dt_txt}
            weathericon={data.list[34].weather[0].icon}
          ></ForecastCard>
        </div>
      </div>
    </>
  );
}
