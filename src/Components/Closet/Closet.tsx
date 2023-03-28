import { Card } from '../Card/Card';
import { closetData } from '../../MockData/ClosetData.js';
import './Closet.css';
import { useState } from 'react';

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

  const [filteredItems, setFilteredItems] = useState(); //Probably need to handle this piece of state in App.tsx

  const mappedItems = closetData.data.map(item => {
    return (
      <Card
        key={item.id}
        id={item.id}
        image={item.attributes.image_url}
      />
    )
  })

  const handleFilterButton = (): Item[] => {
    console.log('filter by type!') //eventually this will be an API call
  }

  return (
    <div>
      <h2>My Closet</h2>
      <button onClick={handleFilterButton} id='filter--att' className='filter-button'>Filter by Type</button>
      <div className='cards-container'>
        {mappedItems}
      </div>
    </div>
  )
}