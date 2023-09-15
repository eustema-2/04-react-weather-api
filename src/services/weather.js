export default {
  async fetchWeatherData(lat, lon) {
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_OPEN_WEATHER_KEY
      }&units=metric&lang=it`
    );
    const data = await resp.json();
    return data;
  },
  async fetchCoordinateByLocation(location) {
    const resp = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${
        import.meta.env.VITE_OPEN_WEATHER_KEY
      }&lang=it`
    );
    const data = await resp.json();

    if (data.length === 0) throw new Error("La città non può essere trovata");

    return {
      lat: data[0].lat,
      lon: data[0].lon,
    };
  },
};
