import { PropsWithChildren } from "react";

import classes from "./Introduction.module.scss";

const Introduction: React.FC = () => {
  return (
    <section className={classes.introduction}>
      <p>Welcome to</p>
      <h1>Boring weather app</h1>
      <p>start by entering your city name in the search bar below</p>
    </section>
  );
};

export default Introduction;
