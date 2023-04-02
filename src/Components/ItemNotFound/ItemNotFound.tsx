import "./ItemNotFound.css";
import { NavLink } from "react-router-dom";

export const ItemNotFound = (): JSX.Element => {
  return (
     <section className="item-not-found">
      <p>Error: Unable to get item details</p>
      <NavLink to={"/"}>
        <button className="item-not-found-btn">Return Home</button>
      </NavLink>
      <img className="empty-closet-image" src="src/assets/empty-closet.png" alt="Picture of an empty closet"></img>
    </section>
  );
};