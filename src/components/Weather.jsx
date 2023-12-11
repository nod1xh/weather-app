import WeatherIcon from "./WeatherIcon";
import { formattedDate } from "../utils/utility";
import WeatherStatus from "./WeatherStatus";

export default function Weather({ data }) {
  return (
    <div className=" rounded-md  w-2/4 text-[#00183a] ">
      <div className=" w-1/2">
        <h1 className="mt-3 text-4xl font-sans font-semibold ">
          {data.city.name}, {data.city.country}
        </h1>
        <h2 className="text-xl">{formattedDate}</h2>
      </div>
      <div className="flex m-5 justify-between">
        <div>
          <WeatherIcon icon={data.list[0].weather[0].icon} />
        </div>
        <WeatherStatus data={data} />
      </div>
    </div>
  );
}
