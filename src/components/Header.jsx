import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Header.css";

const Header = () => {
  const handleButtonClick = (section) => {
    console.log(`Switching to ${section} section`);
  };
  return (
    <header>
      <h1>Exercise Tracker</h1>
      <nav>
        <div className="w3-bar w3-black">
          <Link className="w3-bar-item w3-button" to="/">
            Home
          </Link>
          <Link className="w3-bar-item w3-button" to="/exercise">
            Exercises
          </Link>
          <Link className="w3-bar-item w3-button" to="/excerciseManager">
            Add Exercise
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
