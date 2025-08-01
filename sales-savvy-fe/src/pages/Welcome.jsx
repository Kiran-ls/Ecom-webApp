// src/pages/Welcome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h3>Welcome to Sales Savvy</h3>
      <h5>Your 1 stop shopping solution!</h5>
      <p className="tagline">“Deals so good, Jeff might call us!”</p>
      <p className="tagline">“Shop smart. Shop Savvy.”</p>

      <button onClick={() => navigate('/sign_in_page')}>SIGN IN</button>
      <button onClick={() => navigate('/sign_up_page')}>SIGN UP</button>
    </div>
  );
}