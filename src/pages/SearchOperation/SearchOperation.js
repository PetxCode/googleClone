import React from "react";
import { useStateValue } from "../../State/StateProvider";
import UseGoogleState from "../../State/useGoogle";
import Response from "../../State/respose";
import SearchPageMain from "../search/Search";
import "./searchOperation.css";
import { Link } from "react-router-dom";
import logo from "../../img/codelab5.png";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import RoomIcon from "@material-ui/icons/Room";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchOperation() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = UseGoogleState(term);

  //const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img className="searchPage__logo" src={logo} />
        </Link>

        <div className="searchPage__headerBody">
          <SearchPageMain hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all"> All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news"> News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images"> Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/map"> Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/map"> Map</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more"> More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/more"> Settings</Link>
              </div>

              <div className="searchPage__option">
                <Link to="/more"> Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__reasultCount">
            About {data?.searchInformation.formattedTotalResults} results for (
            {data?.searchInformation.formattedSearchTime}) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image?.src
                      }
                      alt=""
                    />
                  )}

                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title} </h2>
              </a>
              <p className="searchPage__resultSnippet" href={item.link}>
                {item.snippet}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchOperation;
