import React from "react";

export default function WeatherStatus({ data }) {
  return (
    <div className="rounded-md bg-opacity-20 bg-[#fdfdfd] flex flex-col items-center w-2/4 text-[#00183a] sms:w-full xl:w-full xxl:w-full">
      <div className="flex w-full xxl:p-10">
        <p className="status">
          <span>{Math.floor(data.list[0].main.temp)}&deg;C</span>
          Temperature
        </p>
        <p className="status">
          <span> {Math.floor(data.list[0].main.temp_min)}&deg;C </span>
          Min
        </p>
        <p className="text-center status">
          <span>{Math.ceil(data.list[0].main.temp_max)}&deg;C</span>
          Max
        </p>
      </div>
      <div className="flex w-full xxl:p-10">
        <p className="status">
          <span>{data.list[0].weather[0].main}</span>
          Description
        </p>
        <p className="text-center status">
          <span className="">{Math.floor(data.list[0].wind.speed)}km/h</span>
          Wind
        </p>
        <p className="status">
          <span>{data.list[0].main.humidity}%</span>
          Humidity
        </p>
      </div>
    </div>
  );
}
