import React, { FormEvent } from "react";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { useState } from "react";
import { json } from "react-router";

interface Event {
  target: {
    value: string;
  };
}

export const AddList: React.FC = (): JSX.Element => {
  const [newCustomList, setNewCustomList] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);

  //apiCall Function  these need to move to apiCall file
  const postCustomList = async (data: any) => {
    // we cannot leave data: any!! We should make an interface
    const url = `https://closet-manager-be.herokuapp.com/api/v1/users/1/lists`;
    const response = await fetch(url, {
      method: "POST",
      body: data,
    });
    if (!response.ok) {
      throw new Error("Unable To Fetch Your Data. Try Later.");
    }
    return response.json();
  };

  const handleSubmit = ({ target }: FormEvent<HTMLFormElement>) => {
    const inputData = new FormData(target as HTMLFormElement);
    console.log(target);
    console.log(inputData);
    postCustomList(inputData)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add My New Custom List</h2>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <label htmlFor="caption" className="custom-list-input">
          My custom list Name
          <input type="text" name="custom-name" required />
        </label>
        <button type="submit" value="Submit" className="form-button">
          Add My Custom List
        </button>
      </form>
    </div>
  );
};
