import { NavLink } from "react-router-dom";
import './Navbar.css'

export function Navbar() {
  
  return (
    <nav id="nav-bar">
      <NavLink className="" to="/"><i className="fa-regular fa-house-chimney-blank"></i></NavLink>
      <NavLink className="nav-buttons" to="/api/v1/users/:id/items" ><i className="fa-regular fa-clothes-hanger"></i></NavLink>
      <NavLink className="nav-buttons" to="/api/v1/users/:id/lists"><i className="fa-regular fa-square-list"></i></NavLink>
    </nav>
  );
}