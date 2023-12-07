import React, { PropsWithChildren } from "react";

import classes from "./Card.module.scss";

const Card = (props: PropsWithChildren) => {
  return <div className={classes.Card}> {props.children} </div>;
};

export default Card;
