import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'


export function Navbar() {

  return (
    <nav>
      <Link to={"/"}>
        <button className="nav-button">home icon</button>
      </Link>
      {/* will need get requests for other buttons, 
      need to discuss creating an apiCalls folder and having reusable requests */}
      <button className="nav-button">my closet icon</button>
      <button className="nav-button">my list icon</button>
    </nav>
  );
}