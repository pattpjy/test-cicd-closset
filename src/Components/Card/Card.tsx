import { Link } from 'react-router-dom';
import './Card.css';

interface CardProps {
  id: number | string,
  image: string,
}

export const Card = ({ id, image }: CardProps): JSX.Element => {

  const handleDeleteButton = (): void => {
    console.log('Delete item!!') //eventually an API call will go here
  }

  return (
    <div key={id} className='card-container'>
      <Link to={`/api/v1/users/:id/items/${id}`}>
        {/* <img src={image} alt='Image of clothing item' className='card-image' />  */}
        <img src="https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/contentsArea_itemimg_16.jpg" alt='Image of clothing item' className='card-image' />
      </Link>
      <div className='banner-container'>
        <p onClick={handleDeleteButton} className='delete-banner'>Delete Item?</p>
      </div>
    </div>
  )
}