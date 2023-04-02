import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

interface CardProps {
  id: number | string,
  image: string,
}

export const Card = ({ id, image }: CardProps): JSX.Element => {
  const [loaded, setLoaded] = useState<boolean>(false)

  const onLoad = (): void => setLoaded(true)

  const handleDeleteButton = (): void => {
    console.log('Delete item!!') //eventually an API call will go here
  }

  return (
    <div key={id} className='card-container'>
      <Link to={`/itemDetails/${id}`}>
        <img 
          onLoad={onLoad}
          src={image} 
          alt='Image of clothing item' 
          className='card-image'
         /> 
         {!loaded && <p>Loading ... </p>}
      </Link>
      <div className='banner-container'>
        <p onClick={handleDeleteButton} className='delete-banner'><i className="fa-light fa-trash-can"></i> Delete</p>
      </div>
    </div>
  )
}