import defaultIcon from "../assets/icons/default.svg";
import WeatherIcons from "../utils/icons";

export default function WeatherIcon({ icon }) {
  const iconFileName = WeatherIcons[icon] || defaultIcon;

  const iconPath = `${iconFileName}`;

  return <img src={iconPath} alt={`Weather Icon`} className="w-40 h-40" />;
}
