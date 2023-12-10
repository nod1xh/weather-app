import clearSky from "../assets/icons/sun.svg";
import clearNight from "../assets/icons/clear-night.svg";
import cloudyDay from "../assets/icons/cloudy-day-3.svg";
import cloudyNight from "../assets/icons/cloudy-night-2.svg";
import showerRain from "../assets/icons/heavy-rain.svg";
import rain from "../assets/icons/rain.svg";
import thunderstorm from "../assets/icons/thunder.svg";
import snow from "../assets/icons/snow.svg";
import mist from "../assets/icons/mist.svg";

const WeatherIcons = {
  "01d": clearSky,
  "01n": clearNight,
  "02d": cloudyDay,
  "03d": cloudyDay,
  "04d": cloudyDay,
  "02n": cloudyNight,
  "03n": cloudyNight,
  "04n": cloudyNight,
  "09d": showerRain,
  "09n": showerRain,
  "10d": rain,
  "10n": rain,
  "11d": rain,
  "11n": thunderstorm,
  "11n": thunderstorm,
  "13d": snow,
  "13n": snow,
  "50d": mist,
};

export default WeatherIcons;
