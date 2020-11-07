import React from "react";
import "./search.css";

import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import Search from "./search/Search";

function SearchPage() {
  return (
    <div clasName="search">
      <div clasName="search__input">
        <SearchIcon className="search__inputIcon" />
        <input />
        <MicIcon />
      </div>
    </div>
  );
}

export default SearchPage;
