import { PropsWithChildren } from "react";

import Image from "next/image";
import Card from "../ui/Card";
import Details from "./Details";
import WeatherData from "@/utils/interfaces/WeatherData";

import classes from "./WeatherCard.module.scss";
import getWeatherImage from "@/utils/functions/getWeatherImage";

const WeatherCard = (props: PropsWithChildren<WeatherData>) => {
  const imageURL = getWeatherImage(props.weather!);

  return (
    <Card>
      <div className={classes.temperatureWrapper}>
        <h1 className={classes.cityName}>{props.name}</h1>
        <Image src={imageURL} alt="weather image" width={170} height={170} />
        <p className={classes.temperature}>{props.temperature}</p>
      </div>
      <Details {...props} />
    </Card>
  );
};

export default WeatherCard;
