import defaultIcon from "../assets/icons/default.svg";
import clearNight from "../assets/icons/clear-night.svg";
import WeatherIcons from "../utils/icons";

export default function WeatherIcon({ icon }) {
  const iconFileName = WeatherIcons[icon] || defaultIcon;

  if (iconFileName === "01n") {
    return (iconPath = clearNight);
  }

  let iconPath = `${iconFileName}`;

  return (
    <img src={iconPath} alt={`Weather Icon`} className="w-40 h-40 inline" />
  );
}
