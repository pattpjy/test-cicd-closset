import './Home.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Logoo from './Logoo.png';

interface MenuItem {
  text: string;
  path: string;
}

export const AppMenu: React.FC = () => {
  const menuItems: MenuItem[] = [
    { text: 'My Closet', path: '/api/v1/users/:id/items' },
    { text: 'My List', path: '/api/v1/users/:id/lists' },
    { text: 'Add New Item', path: '/api/v1/users/:id/items/new' },
    { text: 'Create New List', path: '/api/v1/users/:id/lists/new' }
  ];
  return (
    <div className="container">
      <div className="logo-container">
        <img className="logo" src={Logoo} alt="Logo" />
      </div>
      {menuItems.map(({ text, path }, index) => (
        <Link className="menu-item" key={index} to={path}>
          <div className="menu-text">{text}</div>
        </Link>
      ))}
    </div>
  );
};