import { useId } from "react";
import { BsSearch } from "react-icons/bs";
import css from "./SearchBox.module.css";

export const SearchBox = ({ value, onSearch }) => {
  const searchID = useId();

  return (
    <div className={css.search_box}>
      <label htmlFor={searchID} className={css.search_label}>
        Find contacts by name
      </label>
      <div className={css.input_wrapper}>
        <input
          type="text"
          id={searchID}
          value={value}
          className={css.search_input}
          onChange={(evt) => onSearch(evt.target.value)}
          placeholder="Search your contact"
        />
        <BsSearch className={css.search_icon} />
      </div>
    </div>
  );
};
