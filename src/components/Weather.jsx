import WeatherIcon from "./WeatherIcon";

const currentDate = new Date();
const options = { weekday: "long", day: "numeric", month: "long" };
const formattedDate = currentDate.toLocaleDateString("en-US", options);

export default function Weather({ city, country, iconCode, temp, main }) {
  return (
    <div className=" rounded-md bg-[#FDFDFD] bg-opacity-20 w-2/4 text-[#265e99] ">
      <div className="ml-5 ">
        <h1 className="mt-3 text-4xl font-sans font-semibold ">
          {city}, {country}
        </h1>
        <h2 className="text-xl">{formattedDate}</h2>
      </div>
      <div className="flex m-5">
        <div className="mt-5">
          <WeatherIcon icon={iconCode} />
        </div>
        <div className="mt-16 ">
          <p className="ml-2 block text-2xl">{Math.floor(temp)}&deg;C</p>
          <p className="ml-2 block">{main}</p>
        </div>
      </div>
      {/* <div>Ostali podaci </div> */}
    </div>
  );
}
