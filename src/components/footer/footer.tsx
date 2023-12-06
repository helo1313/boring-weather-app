import { PropsWithChildren } from "react";

import classes from "./Footer.module.scss";

const Footer: React.FC<PropsWithChildren> = ({ children }) => {
  return <footer className={classes.footer}>{children}</footer>;
};

export default Footer;
