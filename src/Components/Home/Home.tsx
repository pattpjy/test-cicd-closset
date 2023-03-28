import React from 'react';
import './Home.css';
import images from './images.png'
import Logoo from './Logoo.png'

interface MenuItem {
  iconSrc: string;
  text: string;
  onClick: () => void;
 }
 export const AppMenu: React.FC = () => {
  const logoSrc = images;
  const menuItems: MenuItem[] = [
    { iconSrc: images, text: 'My Closet', onClick: () => console.log('Clicked Menu Item 1') },
    { iconSrc: images, text: 'My List', onClick: () => console.log('Clicked Menu Item 2') },
    { iconSrc: images, text: 'Add New Item', onClick: () => console.log('Clicked Menu Item 3') },
    { iconSrc: images, text: 'Create New List', onClick: () => console.log('Clicked Menu Item 4') }
  ];
  return (
    <div className="container">
      <div className="logo-container">
        <img className="logo" src={Logoo} alt="Logo" />
      </div>
      {menuItems.map(({ iconSrc, text, onClick }, index) => (
        <div className="menu-item" key={index} onClick={onClick}>
          <img className="icon" src={iconSrc} alt="Menu Icon" />
          <div className="menu-text">{text}</div>
        </div>
      ))}
    </div>
  );
 };
 