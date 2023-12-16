import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastCard({ date, weathericon, temp }) {
  const icon = "w-20 h-20  lg:w-10 lg:h-10";

  return (
    <div className="py-5 lg:mr-2 sms:m-0 sms:mb-3 sms:p-0 ">
      <div className="text-center rounded-md bg-opacity-50 bg-[#fdfdfd] lg:p-1 lg:text-xs flex flex-col items-center sms:text-sm sms:p-0 sm:p-2 md:px-20 md:text-base xl:text-sm">
        <p>{date}</p>
        <WeatherIcon icon={weathericon} className={icon} />
        <p>Temperature: {Math.floor(temp)}&deg;C</p>
      </div>
    </div>
  );
}
