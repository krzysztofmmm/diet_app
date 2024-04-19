import React from "react";
import "../Styles/Navbar.css";

function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      <h1>Diet Planner</h1>
      <ul>
        <li onClick={() => onNavigate("home")}>Home</li>
        <li onClick={() => onNavigate("recipes")}>Recipes</li>
        <li onClick={() => onNavigate("meals")}>Meal Plan</li>
        <li onClick={() => onNavigate("calories")}>Calorie Counter</li>
        <li onClick={() => onNavigate("community")}>Community Ideas</li>
      </ul>
    </nav>
  );
}

export default Navbar;
