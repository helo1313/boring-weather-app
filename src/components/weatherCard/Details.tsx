import { PropsWithChildren } from "react";

import WeatherData from "../../utils/interfaces/WeatherData";
import DetailsElement from "./DetailsElement";

import classes from "./Details.module.scss";

const Details = (props: PropsWithChildren<WeatherData>) => {
  return (
    <div className={classes.Details}>
      <DetailsElement
        name="Humidity"
        image="/Images/humidity.png"
        imageAltText="humidity"
        amount={props.humidity!}
      />
      <DetailsElement
        name="Wind Speed"
        image="/Images/wind.png"
        imageAltText="wind speed"
        amount={props.windSpeed!}
      />
    </div>
  );
};

export default Details;
