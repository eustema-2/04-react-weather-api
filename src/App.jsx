import { useState, useEffect } from "react";

import weather from "./services/weather";

import WeatherHeader from "./components/WeatherHeader";
import Weather from "./components/Weather";
import Loader from "./components/Loader";

export default function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(place) {
    setIsLoading(true);
    setError(null);
    try {
      const { lat, lon } = await weather.fetchCoordinateByLocation(place);
      const data = await weather.fetchWeatherData(lat, lon);
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude: lat, longitude: lon } = position.coords;
        const data = await weather.fetchWeatherData(lat, lon);
        setData(data);
        setIsLoading(false);
      },
      (err) => {
        setIsLoading(false);
      }
    );
  }, []);

  return (
    <div className="container-extra-small">
      <div className="app-wrapper">
        <WeatherHeader onSearch={handleSearch} />
        {error ? (
          <h2>{error}</h2>
        ) : isLoading ? (
          <Loader />
        ) : (
          data && <Weather data={data} />
        )}
      </div>
    </div>
  );
}
