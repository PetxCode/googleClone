import { Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../img/codelab5.png";
import "./home.css";
import SearchPageMain from "../pages/search/Search";

function HomePage() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          {/* Link */}
          <Link to="/about">About</Link>
          {/* Link */}
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          {/* Link */}
          <Link to="/gmail">Gmail</Link>
          {/* Link */}
          <Link to="/images">Images</Link>
          {/* Icon */}
          <AppsIcon />
          <Avatar />
          {/* Avatar */}
        </div>
      </div>

      <div className="home__body">
        {/* * */}
        <img alt="google" src={logo1} />
        <div className="home__bodyContainer">
          {/*search */}
          <SearchPageMain />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
