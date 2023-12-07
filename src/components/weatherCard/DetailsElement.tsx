import { PropsWithChildren } from "react";

import classes from "./DetailsElement.module.scss";

interface DetailsElementType {
  name: string;
  image: string;
  imageAltText: string;
  amount: string;
}

const DetailsElement = (props: PropsWithChildren<DetailsElementType>) => {
  return (
    <div className={classes.DetailsElement}>
      <img
        src={props.image}
        alt={props.imageAltText}
        className={classes.DetailsElement_Image}
      />
      <div className={classes.DetailsElement_Params}>
        <p className={classes.DetailsElement_Amount}>{props.amount}</p>
        <p className={classes.DetailsElement_Name}>{props.name}</p>
      </div>
    </div>
  );
};

export default DetailsElement;
