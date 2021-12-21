import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/data">Data</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/redux">Redux</Link>
    </div>
  );
};

export default NavBar;
