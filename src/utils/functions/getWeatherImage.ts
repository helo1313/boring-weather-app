import { DEFAULT_WEATHER_IMAGE, WEATHER_IMAGES } from "../constans";

const getWeatherImage: (weather: string) => string = (weather) => {
  let image: string;
  if (weather in WEATHER_IMAGES) {
    image = WEATHER_IMAGES[weather];
  } else {
    image = WEATHER_IMAGES[DEFAULT_WEATHER_IMAGE];
  }

  return image;
};

export default getWeatherImage;
