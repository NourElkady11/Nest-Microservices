import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const navigateToCategory = (path) => {
    navigate(path); // Programmatically navigate to the given path
  };

  return (
    <div className="home">

      {/* Product Categories Section */}
      <div className="home__categories">
        <div className="home__category">
          <button onClick={() => navigateToCategory('/pants')} className="home__categoryButton">
            <img
              src="/images/pants/P1.png" // Replace with a category image link
              alt="Pants Category"
              className="home__categoryImage"
            />
            <p>Pants</p>
          </button>
        </div>
        <div className="home__category">
          <button onClick={() => navigateToCategory('/jackets')} className="home__categoryButton">
            <img
              src="/images/jackets/J1.png" // Replace with a category image link
              alt="Jackets"
              className="home__categoryImage"
            />
            <p>Jackets</p>
          </button>
        </div>
        {/* Add more categories here as needed */}
      </div>

      
    </div>
  );
}

export default Home;
