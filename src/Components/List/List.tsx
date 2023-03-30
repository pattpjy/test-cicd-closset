import React from "react";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
// import API from "../adapters/API";

export const List: React.FC = (): JSX.Element => {
  return (
    <div className="form-container">
      <h2 className="form-title">Add My New Custom List</h2>
      <form className="form">
        <label htmlFor="caption" className="size-input">
          My custom list Name
          <input type="text" name="custom-name" />
        </label>
        <label htmlFor="caption" className="notes-input">
          Notes
          <input className="notes-box" type="text" name="notes" />
        </label>
        <button type="submit" value="Submit" className="form-button">
          Add My Custom List
        </button>
      </form>
    </div>
  );
};
