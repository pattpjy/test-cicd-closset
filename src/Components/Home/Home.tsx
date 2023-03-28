import React from 'react';
import './Home.css';
import images from './images.png'

interface MenuItem {
  iconSrc: string;
  text: string;
  onClick: () => void;
 }
 