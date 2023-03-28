import { Card } from "../Card/Card";
import { closetData } from "../../MockData/ClosetData.js";
import "./Closet.css";

interface attributes {
  season: string;
  clothing_type: string;
  size: string;
  color: string;
  image_url: string;
  notes: string;
}

interface Item {
  id: number, 
  type: string,
  attributes: attributes,
}

interface ClosetProps {
  items: Item[]
}

export const Closet = ({ items }: ClosetProps): JSX.Element => {

  const mappedItems = closetData.data.map(item => {
    return (
      <Card
        key={item.id}
        id={item.id}
        image={item.attributes.image_url}
      />
    )
  })

  return (
    <div>
      <h2>My Closet</h2>
      <div className="cards-container">
        {mappedItems}
      </div>
    </div>
  )
}