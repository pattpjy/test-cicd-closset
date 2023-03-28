import { Card } from "../Card/Card";
import "./Works.css";
import { closetData } from "../../MockData/ClosetData.js";

interface attributes {
  season: string;
  clothing_type: string;
  size: string;
  color: string;
  image_url: string;
  notes: string;
}

interface Item {
  item: {
    id: number, 
    type: string,
    attributes: attributes
  }
}

interface ClosetProps {
  item: Item[]
}

export const Closet: React.FC = ({ items: ClosetProps}): JSX.Element => {

  const mappedItems = closetData.data.map(item => {
    return 
      <Card
        id={item.id}
        image={item.image_url}
      />
  })

  return (
    <div className="cards-container">
      {mappedItems}
    </div>
  )
}