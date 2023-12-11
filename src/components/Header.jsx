import Weather from "./Weather";

export default function Header({ data, getWeather, getCity, input }) {
  return (
    <div className="flex flex-col items-center font-raleway text-white w-screen h-screen bg-cover tracking-wider">
      <div className="flex flex-col justify-center text-center w-2/4 my-3 rounded-md py-3 ">
        <div className="mb-10">
          <h1 className="mb-3 text-4xl font-extrabold text-[#80bfe8] text-left">
            WEATHER FORECAST
          </h1>
        </div>
        <div className="opacity-60 ">
          <form
            onSubmit={getWeather}
            className="flex justify-between w-full font-bold"
          >
            <input
              required
              onChange={getCity}
              ref={input}
              type="text"
              className="bg-white bg-opacity-60 p-1 rounded-xl border-none focus:outline-none w-9/12 font-light tracking-wider text-center text-[#00183a] text-bold"
            />
            <button className="rounded-md px-4 bg-[#80bfe8] hover:bg-[#56a0ee] mr-4">
              Get Weather
            </button>
          </form>
        </div>
      </div>
      {data && <Weather data={data} />}
    </div>
  );
}
