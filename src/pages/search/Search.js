import React, { useState } from "react";
import "../search/searching.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../State/StateProvider";
import { actionTypes } from "../../State/Reducer";

function SearchPageMain({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log("You've hit me>>>", input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };

  return (
    <form className="searching">
      <div className="searching__input">
        <SearchIcon className="searching__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="searching__buttons">
          <Button type="summit" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling lucky</Button>
        </div>
      ) : (
        <div className="searching__buttons">
          <Button
            className="searching__buttonsHidden"
            type="summit"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="searching__buttonsHidden" variant="outlined">
            I'm feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default SearchPageMain;
