import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>FootBull</li>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Trending</li>
            <li>Merch</li>
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
