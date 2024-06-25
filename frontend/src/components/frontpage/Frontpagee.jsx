import React from 'react';
import { Link } from 'react-router-dom';
import './frontpage.css'
const FrontPage = () => {
  return (
    <div className="bgimage">
      <div className="front-page">
        <header>
        <img src='./Images/logo2.png' alt="Neev Logo" className="logo" /> 
          <h1>Welcome To Neev...</h1>
        </header>

        <main>
          <section>
            <h2>Featured Products</h2>
          </section>

          <button className='frontpage-btn'>
            <Link to="/registration" className="button" style={{ color: "#fff" }}>
              <span> SIGNUP AS AN INVESTOR </span>
            </Link>
          </button>

          <br />

          <button className='frontpage-btn'>
            <Link to="/login" className="button" style={{ color: "#fff" }}>
              <span> SIGNUP AS AN ENTREPRENEUR </span>
            </Link>
          </button>
        </main>
      </div>
    </div>
  );
}

export default FrontPage;
