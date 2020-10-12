import React from "react";
import "./Search.scss";

import icon from '../../../images/search.svg';

const Search = (props) => {
  return (
    <div className="SearchWrapper">
    <img src={icon} alt="icon" className="icon" />
      <input
        className="Search"
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default Search;
