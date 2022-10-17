import React from "react";
import Button from "../Button";
import Drawer from "./Drawer";
import "./styles.css";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="navbar">
      <Link to = '/'>
      <h1 className="heading">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      </Link>
      <div className="links-flex">
        <Link to="/">
          <p className="links">Home</p>
        </Link>
        <Link to="/search">
          <p className="links">Search</p>
        </Link>
        <Link to="/about-us">
          <p className="links">About Us</p>
        </Link>
        <Link to="/dashboard">
          <p className="links">
            <Button text="Dashboard" />
          </p>
        </Link>
      </div>
      <div className="menu-div">
        <Drawer />
      </div>
    </div>
  );
}

export default Header;