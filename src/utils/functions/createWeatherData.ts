import WeatherData from "../interfaces/WeatherData";

const createWeatherData: (data: any) => WeatherData = (data) => {
  const cityData = data.list[0];

  return {
    name: cityData.name,
    weather: cityData.weather[0].main,
    temperature: `${Math.floor(+cityData.main.temp)}°C`,
    humidity: `${Math.floor(+cityData.main.humidity)}%`,
    windSpeed: `${Math.floor(+cityData.wind.speed)} km/h`,
  };
};

export default createWeatherData;
