import WeatherIcon from "./WeatherIcon";
import { formattedDate } from "../utils/utility";

export default function Weather({ data }) {
  return (
    <div className=" rounded-md  w-2/4 text-[#265e99] ">
      <div className="ml-5 w-1/2">
        <h1 className="mt-3 text-4xl font-sans font-semibold ">
          {data.city.name}, {data.city.country}
        </h1>
        <h2 className="text-xl">{formattedDate}</h2>
      </div>
      <div className="flex m-5 justify-between">
        <div className="mt-5">
          <WeatherIcon icon={data.list[0].weather[0].icon} />
          <div className="inline-block">
            <p className="ml-2 text-2xl">
              {Math.floor(data.list[0].main.temp)}&deg;C
            </p>
            <p className="ml-2 ">{data.list[0].weather[0].main}</p>
          </div>
        </div>
        <div className=" rounded-md bg-[#FDFDFD] bg-opacity-20 ">
          <p>Max: {Math.ceil(data.list[0].main.temp_max)} &deg;C</p>
          <p>Min: {Math.floor(data.list[0].main.temp_min)} &deg;C</p>
          <p>Wind: {data.list[0].wind.speed} km/h </p>
          <p>Rain: </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
