import SearchForm from "@/components/searchForm/SearchForm";
import WeatherCard from "@/components/weatherCard/WeatherCard";
import WeatherData from "@/utils/interfaces/WeatherData";

const WEATHER_DOMMY_DATA: WeatherData = {
  name: "PARIS",
  temperature: "24",
  humidity: "13",
  windSpeed: "10",
  weather: "clear",
};

const CityPage: React.FC = () => {
  return (
    <>
      <SearchForm />
      <WeatherCard {...WEATHER_DOMMY_DATA} />
    </>
  );
};

export default CityPage;
