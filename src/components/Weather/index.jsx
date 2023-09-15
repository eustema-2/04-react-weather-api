import style from "./style.module.css";

import { WiCelsius } from "react-icons/wi";
import WeatherIcon from "../WeatherIcon";

export default function Weather({ data }) {
  return (
    <section className={style.weather}>
      <h2>{data.name}</h2>
      <div className={style.weather__status}>
        <div className={style.weather__icon}>
          <WeatherIcon code={data.weather[0].id} />
        </div>
        <div className={style.weather__temp}>
          {data.main.temp.toFixed(0)} <WiCelsius />
        </div>
      </div>
      <p>{data.weather[0].description}</p>
    </section>
  );
}
