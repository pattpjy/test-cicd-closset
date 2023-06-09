import "./PageNotFound.css"
import { NavLink } from "react-router-dom";

export const PageNotFound = (): JSX.Element => {
  return (
    <section className="page-not-found">
      <h2>Oops! Page not found.</h2>
      <NavLink to={"/"}>
        <button className="page-not-found-btn">Return Home</button>
      </NavLink>
      <img className="empty-closet-image" src="src/assets/empty-closet.png" alt="Picture of an empty closet"></img>
    </section>
  )
}