import { PropsWithChildren } from "react";

import classes from "./searchBar.module.scss";

const SearchBar: React.FC<PropsWithChildren> = () => {
  return (
    <div className={classes.searchBar}>
      <input className={classes.searchBar_input} type="search" />
    </div>
  );
};

export default SearchBar;
