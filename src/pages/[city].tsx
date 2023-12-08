import SearchForm from "@/components/searchForm/SearchForm";
import WeatherCard from "@/components/weatherCard/WeatherCard";
import createWeatherData from "@/utils/functions/createWeatherData";
import validateResponseData from "@/utils/functions/validateResponseData";
import WeatherData from "@/utils/interfaces/WeatherData";
import { GetServerSideProps } from "next";

import classes from "../styles/pages/city.module.scss";

const CityPage: React.FC = (props: WeatherData) => {
  return (
    <div className={classes.wrapper}>
      <SearchForm />
      <WeatherCard {...props} />
    </div>
  );
};

export default CityPage;

export const getServerSideProps: GetServerSideProps<WeatherData> = async (
  ctx
) => {
  const { params } = ctx;
  const city = params?.city as string;

  const fetchData = await fetch(
    `http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=a851488a72a7a065324ddbcf14d3b79d`
  );

  if (!fetchData.ok) {
    // TODO: Add modal for not ok data
    alert("fetch data not OK");
    return { props: {} };
  }

  const data = await fetchData.json();

  validateResponseData(data);

  const weatherData = createWeatherData(data);

  return {
    props: weatherData,
  };
};
