import React, { FormEvent } from "react";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { useState } from "react";

export const List: React.FC = (): JSX.Element => {
  const [newCustomList, setNewCustomList] = useState<string | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  //apiCall Function  these need to move to apiCall file
  const postCustomList = async (data: any) => {
    // we cannot leave data: any!! We should make an interface
    const url = ``;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Unable To Fetch Your Data. Try Later.");
    }
    return response.json();
  };

  const onSubmitHandler = async ({ target }: FormEvent<HTMLFormElement>) => {
    const formInput = new FormData(target as HTMLFormElement);

    try {
      // line 20 is for throw error to see styling
      // throw new Error("TRY STYLING");
      const newList = await postCustomList(formInput);

      return setNewCustomList(newList);
    } catch (error) {
      setHasError(true);
    }
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Add My New Custom List</h2>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmitHandler(event);
        }}
      >
        <label htmlFor="caption" className="custom-list-input">
          My custom list Name
          <input type="text" name="custom-name" required />
        </label>
        <button
          type="submit"
          value="Submit"
          className="form-button"
          onClick={onClickHandler}
        >
          Add My Custom List
        </button>
      </form>
    </div>
  );
};
