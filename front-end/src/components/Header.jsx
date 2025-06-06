import React from "react";
import logospotify from "../assets/logo/spotify.png";
import "../index.css";
import Main from "../components/main";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logospotify} alt="logo spotify projeto" />
      </Link>
      <Link to="/" lassname="header_link">
        <h1> Spotify </h1>
      </Link>
    </div>
  );
};

export default Header;
