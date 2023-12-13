import "animate.css";

export default function Header({ getWeather, getCity, input }) {
  return (
    <div className="flex flex-col items-center w-2/4 mt-5 mb-10 font-raleway text-white tracking-wider animate-fadeIn">
      <div className="flex flex-col justify-center text-center w-full my-3 rounded-md py-3 ">
        <div className="mb-10">
          <h1 className="mb-3 text-4xl font-extrabold text-[#80bfe8] text-left uppercase">
            weather app
          </h1>
        </div>
        <div className="opacity-60 ">
          <form
            onSubmit={getWeather}
            className="flex justify-between w-full font-bold"
          >
            <input
              required
              onInput={getCity}
              ref={input}
              type="text"
              className="bg-white bg-opacity-60 p-1 rounded-xl border-none focus:outline-none w-9/12 font-light tracking-wider text-center text-[#00183a] text-bold"
            />
            <button className="rounded-md px-4 bg-[#80bfe8] hover:bg-[#56a0ee]">
              Get Weather
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
