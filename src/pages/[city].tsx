import SearchForm from "@/components/searchForm/SearchForm";
import WeatherCard from "@/components/weatherCard/WeatherCard";
import WeatherData from "@/utils/interfaces/WeatherData";
import { GetServerSideProps } from "next";

const WEATHER_DOMMY_DATA: WeatherData = {
  name: "PARIS",
  temperature: "24",
  humidity: "13",
  windSpeed: "10",
  weather: "clear",
};

const CityPage: React.FC = (props: WeatherData) => {
  return (
    <>
      <SearchForm />
      <WeatherCard {...props} />
    </>
  );
};

export default CityPage;

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

export const getServerSideProps: GetServerSideProps<WeatherData> = async (
  ctx
) => {
  const { params } = ctx;
  const city = params?.city as string;

  return {
    props: {
      name: "TESTOWE",
      temperature: "24",
      humidity: "13",
      windSpeed: "10",
      weather: "clear",
    },
  };
};
