import { Link } from "react-router-dom";

interface CardProps {
  id: number | string,
  image: string,
}

export const Card = ({ id, image }: CardProps): JSX.Element => {

  return (
    <div key={id} className="card-container">
      <Link to={`/api/v1/users/:id/items/${id}`}>
        <img src={image} alt="Image of clothing item" className="card-image grow" />
      </Link>
        <p className="delete-banner">Delete Item</p>
    </div>
  )
}