/* eslint-disable react/prop-types */
import "animate.css";
import WeatherIcon from "./WeatherIcon";
import { formattedDate } from "../utils/utility";
import WeatherStatus from "./WeatherStatus";

export default function Weather({ data }) {
  const icon =
    "xl:w-46 xl:h-46 inline sms:w-32 sms:h-32 xl:mr-4 xxl:w-52 xxl:h-52";

  return (
    <div className="flex rounded-md lg:w-3/4 text-[#00183a] animate__animated animate__fadeIn sms:flex-col sms:items-center sms:w-full md:flex-col md:items-center xl:w-2/4 xl:flex xl:justify-between xl:flex-row xl:py-20 xxl:w-3/4 xxl:justify-evenly">
      <div className="sms:w-full text-center xl:w-1/4 xxl:text-center bg-opacity-20 rounded-md">
        <h1 className="mt-3 lg:text-2xl font-sans font-semibold xxl:text-4xl">
          {data.city.name}, {data.city.country}
        </h1>
        <h2 className="text-md xxl:text-xl">{formattedDate}</h2>
      </div>
      <div className="flex md:w-3/4 lg:justify-center md:flex-col md:items-center xl:flex-row sms:flex-col">
        <div className="sms:flex sms:justify-center">
          <WeatherIcon icon={data.list[0].weather[0].icon} className={icon} />
        </div>
        <WeatherStatus data={data} />
      </div>
    </div>
  );
}
