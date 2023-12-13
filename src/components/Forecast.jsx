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
            temp={Math.floor(data.list[1].main.temp)}
            date={data.list[1].dt_txt}
            weathericon={data.list[1].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[2].main.temp)}
            date={data.list[2].dt_txt}
            weathericon={data.list[2].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[7].main.temp)}
            date={data.list[7].dt_txt}
            weathericon={data.list[7].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[8].main.temp)}
            date={data.list[8].dt_txt}
            weathericon={data.list[8].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[9].main.temp)}
            date={data.list[9].dt_txt}
            weathericon={data.list[9].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[10].main.temp)}
            date={data.list[10].dt_txt}
            weathericon={data.list[10].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[15].main.temp)}
            date={data.list[15].dt_txt}
            weathericon={data.list[15].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[16].main.temp)}
            date={data.list[16].dt_txt}
            weathericon={data.list[16].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[17].main.temp)}
            date={data.list[17].dt_txt}
            weathericon={data.list[17].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[23].main.temp)}
            date={data.list[23].dt_txt}
            weathericon={data.list[23].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[24].main.temp)}
            date={data.list[24].dt_txt}
            weathericon={data.list[24].weather[0].icon}
          ></ForecastCard>
          <ForecastCard
            temp={Math.floor(data.list[25].main.temp)}
            date={data.list[25].dt_txt}
            weathericon={data.list[25].weather[0].icon}
          ></ForecastCard>
        </div>
      </div>
    </>
  );
}
