/* eslint-disable react/prop-types */
import "animate.css";

export default function Header({ getWeather, getCity, input }) {
  return (
    <div className="flex flex-col items-center lg:w-2/4 mt-5 mb-10 font-raleway text-white tracking-wider animate-fadeIn sms:w-full xxl:w-3/4">
      <div className="flex flex-col justify-center text-center w-full my-3 rounded-md py-3 sms:text-center">
        <div className="mb-10">
          <h1 className="mb-3 md:text-3xl font-extrabold text-[#80bfe8] lg:text-left uppercase sms:text-2xl sms:text-center xxl:text-4xl">
            weather app
          </h1>
        </div>
        <div className="opacity-60 ">
          <form
            onSubmit={getWeather}
            className="flex lg:justify-between lg:flex-row lg:w-full font-bold sms:flex sms:flex-col sms:items-center"
          >
            <input
              required
              onInput={getCity}
              ref={input}
              type="text"
              className="bg-white bg-opacity-60 p-1 rounded-xl border-none focus:outline-none lg:w-9/12 font-light tracking-wider text-center text-[#00183a] text-bold sms:w-fit md:w-2/4 xxl:p-2 xxl:text-xl"
            />
            <button className="rounded-md px-4 py-1 lg:m-0 bg-[#80bfe8] lg:hover:bg-[#56a0ee] sms:px-2 sms:mt-2 xxl:py-2 xxl:px-5">
              Get Weather
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
