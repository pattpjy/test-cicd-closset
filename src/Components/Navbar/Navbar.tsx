import { NavLink } from "react-router-dom";
import './Navbar.css'

export const Navbar = (): JSX.Element => {
  
  return (
    <nav className="nav-bar" id="nav-bar">
      <NavLink id="nav-bar__my-closet" to="/myCloset" ><i className="fa-regular fa-clothes-hanger"></i></NavLink>
      <NavLink id="nav-bar__home" to="/"><i className="fa-regular fa-house-chimney-blank"></i></NavLink>
      <NavLink id="nav-bar__list" to="/lists"><i className="fa-regular fa-square-list"></i></NavLink>
    </nav>
  );
}