import { PropsWithChildren } from "react";

import Image from "next/image";
import Card from "../ui/Card";
import Details from "./Details";
import WeatherData from "@/utils/interfaces/WeatherData";

import classes from "./WeatherCard.module.scss";

const WeatherCard = (props: PropsWithChildren<WeatherData>) => {
  return (
    <Card>
      <h1 className={classes.cityName}>{props.name}</h1>
      <div className={classes.temperatureWrapper}>
        <Image
          src={"/Images/clear.png"}
          alt="weather image"
          width={100}
          height={100}
        />
        <p className={classes.temperature}>{props.temperature}</p>
      </div>
      <Details {...props} />
    </Card>
  );
};

export default WeatherCard;
