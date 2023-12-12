import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastCard({ date, weathericon, temp }) {
  const icon = "w-20 h-20 block";

  return (
    <div className="py-5 mr-2">
      <div className="text-center rounded-md bg-opacity-50 bg-[#fdfdfd] p-3 flex flex-col items-center">
        <p>{date}</p>
        <WeatherIcon icon={weathericon} className={icon} />
        <p>Temperature: {Math.floor(temp)}&deg;C</p>
      </div>
    </div>
  );
}
