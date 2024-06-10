import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';
import { useState } from 'react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} className="" messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]} defaultRating={2} /> */}
  </React.StrictMode>
);

