import { PropsWithChildren } from "react";

import Image from "next/image";

import classes from "./searchBar.module.scss";

const SearchBar: React.FC<PropsWithChildren> = () => {
  return (
    <div className={classes.searchBar_container}>
      <div className={classes.searchBar}>
        <input className={classes.searchBar_input} type="text" />
        <button className={classes.searchBar_button} type="submit">
          <Image
            src="/Images/search.png"
            width={50}
            height={50}
            alt="Search city button"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
