import React from "react";

export default function WeatherStatus({ data }) {
  return (
    <div className="rounded-md bg-opacity-20 bg-[#FDFDFD] flex flex-col items-center w-2/3 text-[#00183a]">
      <div className="flex justify-between w-full">
        <p>
          <span>{Math.floor(data.list[0].main.temp)}&deg;C</span>
          Temperature
        </p>
        <p>
          <span> {Math.floor(data.list[0].main.temp_min)}&deg;C </span>
          Min
        </p>
        <p className="text-center">
          <span>{Math.ceil(data.list[0].main.temp_max)}&deg;C</span>
          Max
        </p>
      </div>
      <div className="flex justify-between w-full">
        <p>
          <span>{data.list[0].weather[0].main}</span>
          Description
        </p>
        <p className="text-center">
          <span className="block">
            {Math.floor(data.list[0].wind.speed)}km/h
          </span>
          Wind
        </p>
        <p>
          <span>{data.list[0].main.humidity}%</span>
          Humidity
        </p>
      </div>
    </div>
  );
}
