import { Card } from "../Card/Card";
import { closetData } from "../../MockData/ClosetData.js";
import "./Closet.css";
import { useState } from "react";
import { filterItems } from "../../apiCall"

interface attributes {
  season: string;
  clothing_type: string;
  size: string;
  color: string;
  image_url: string;
  notes: string;
}

interface Item {
  id: number;
  type: string;
  attributes: attributes;
}

interface ClosetProps {
  items: Item[];
}

export const Closet = ({ items }: ClosetProps): JSX.Element => {
  const [filteredItems, setFilteredItems] = useState(); //Probably need to handle this piece of state in App.tsx

  const mappedItems = closetData.data.map((item) => {
    return (
      <Card key={item.id} id={item.id} image={item.attributes.image_url} />
    );
  });

  const handleFilter = async (): Promise<void> => {
    const type = document.querySelector<HTMLSelectElement>(
      "#filter--clothing-type"
    )!;
    const color = document.querySelector<HTMLSelectElement>("#filter--color")!;
    const favorite =
      document.querySelector<HTMLSelectElement>("#filter--favorite")!;
    const season =
      document.querySelector<HTMLSelectElement>("#filter--season")!;
    // console.log("Queries:", type.value, color.value, favorite.value, season.value) // these will be used for our queries
    const queries = [
      { name: "season", value: season.value },
      { name: "type", value: type.value },
      { name: "color", value: color.value },
      { name: "favorite", value: favorite.value },
    ];
    const truthyQueries = queries.filter(({ value }) => value);
    const queriesString = truthyQueries
      .map(({ name, value }) => `${name}=${value}`)
      .join("&");
    const url = `https://closet-manager-be.herokuapp.com/api/v1/users/1/items/find_all?${queriesString}`;
    console.log("URL:", url);
    filterItems(url)
  };

  return (
    <div>
      <h2>My Closet</h2>
      <div id="filter" onChange={handleFilter}>
        <select id="filter--clothing-type" name="type">
          <option value="">Clothing Type</option>
          <option value="tops">Tops</option>
          <option value="bottoms">Bottoms</option>
          <option value="outerwear">Outerwear</option>
          <option value="shoes">Shoes</option>
          <option value="accessories">Accessories</option>
          <option value="other">Other</option>
        </select>
        <select id="filter--color" name="color">
          <option value="">Color</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="neutral">Neutral</option>
          <option value="other">Multi</option>
        </select>
        <select id="filter--season" name="season">
          <option value="">Season</option>
          <option value="fall">Fall</option>
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
        </select>
        <select id="filter--favorite" name="favorite">
          <option value="">See All</option>
          <option value="favorites">Only Favorites</option>
        </select>
      </div>
      <div className="cards-container">{mappedItems}</div>
    </div>
  );
};
