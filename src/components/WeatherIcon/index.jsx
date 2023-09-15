import {
  WiDaySunny,
  WiDayThunderstorm,
  WiDayShowers,
  WiDaySleet,
  WiSnowflakeCold,
  WiFog,
  WiDayCloudy,
} from "react-icons/wi";

export default function WeatherIcon({ code }) {
  if (code >= 200 && code < 300) {
    return <WiDayThunderstorm size={100} />;
  } else if (code >= 300 && code < 400) {
    return <WiDaySleet size={100} />;
  } else if (code >= 500 && code < 600) {
    return <WiDayShowers size={100} />;
  } else if (code >= 600 && code < 700) {
    return <WiSnowflakeCold size={100} />;
  } else if (code >= 700 && code < 800) {
    return <WiFog size={100} />;
  } else if (code == 800) {
    return <WiDaySunny size={100} />;
  } else if (code > 800) {
    return <WiDayCloudy size={100} />;
  }
}
