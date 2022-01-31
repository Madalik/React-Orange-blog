import React from "react";
import { Link } from "react-router-dom";
import logo from "../../components/header/travel.jpg";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand ">
        <div className="container-fluid">
          <div className="navbar-link">
            <Link to="/">
              <img src={logo} alt=""></img>
            </Link>
          </div>
          <h1>The Orange blog</h1>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <Link to="/">Travel reviews</Link>
              <Link to="/travelhints">Travel Hints</Link>
              <Link to="/create">Add Blog</Link>
              <Link to="/about">About me</Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
