import React from 'react'
import './AddItem.css';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
// import API from "../adapters/API";

export const AddItem: React.FC = (): JSX.Element => {

  // const handleSubmit = event => {
  //   event.preventDefault()
  //   const formData = new FormData(event.target)
  //   API.submitPost(formData)
  //     .then(data => props.setPost(data.post))
  //     .catch(console.error);
    
  
    return (
        <div className="form-container">
          <h2 className="form-title">Add New Item</h2>
          <form className="form">
            <label className="upload-container">
              Upload or take a photo
              <input 
                className='img-input'
                accept="image/*,capture=camera"
                type="file"
              />
            </label>
            <select  className="dropdown" name="type">
              <option value="">Clothing Type</option>
              <option value="tops">Tops</option>
              <option value="bottoms">Bottoms</option>
              <option value="outerwear">Outerwear</option>
              <option value="shoes">Shoes</option>
              <option value="accessories">Accessories</option>
              <option value="other">Other</option>
            </select>
            <select className="dropdown" name="color">
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
            <select className="dropdown" name="season">
              <option value="">Season</option>
              <option value="fall">Fall</option>
              <option value="winter">Winter</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
            </select>
            <label htmlFor="caption" className="size-input">
              Size
              <input type="text" name="size" />
            </label>
            <label htmlFor="caption" className="notes-input">
              Notes
              <input className="notes-box" 
               type="text" name="notes" />
            </label>
            <button type="submit" value="Submit" className="form-button">Add Item!</button>
          </form>
        </div>
    );
}