import { FaSearch } from "react-icons/fa";

import classes from "./SearchForm.module.scss";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const SearchForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cityName = inputRef.current!.value.trim();

    if (cityName === "") {
      console.log("City name can not be empty");
      return;
    }

    router.push(`/${cityName}`);
  };

  return (
    <form className={classes.searchForm} onSubmit={handleSubmit}>
      <input className={classes.searchForm_input} type="text" ref={inputRef} />
      <button className={classes.searchForm_button} type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchForm;
