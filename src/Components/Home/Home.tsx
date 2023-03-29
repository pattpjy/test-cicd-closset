import './Home.css';
import { Link } from 'react-router-dom';
import React from 'react';
import images from './images.png'
import Logoo from './Logoo.png'

interface MenuItem {
  iconSrc: string;
  text: string;
  path: string;
}

export const AppMenu: React.FC = () => {
  const menuItems: MenuItem[] = [
    { iconSrc: images, text: 'My Closet', path: '/api/v1/users/:id/items' },
    { iconSrc: images, text: 'My List', path: '/api/v1/users/:id/lists' },
    { iconSrc: images, text: 'Add New Item', path: '/api/v1/users/:id/items/new' },
    { iconSrc: images, text: 'Create New List', path: '/api/v1/users/:id/lists/new' }
  ];
  return (
    <div className="container">
      <div className="logo-container">
        <img className="logo" src={Logoo} alt="Logo" />
      </div>
      {menuItems.map(({ iconSrc, text, path }, index) => (
        <Link className="menu-item" key={index} to={path}>
          <img className="icon" src={iconSrc} alt="Menu Icon" />
          <div className="menu-text">{text}</div>
        </Link>
      ))}
    </div>
  );
};