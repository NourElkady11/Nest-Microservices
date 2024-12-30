import React, { useState } from 'react';
import './JacketPage.css';
import { useCart } from './CartContext'; // Import the hook to access the CartContext

function JacketsPage() {
  const { addToCart } = useCart(); // Use the useCart hook to get the addToCart function
  const [showNotification, setShowNotification] = useState(false); // State to manage the notification visibility

  const products = [
    { id: 1, name: 'Leather Jacket', price: 119.99, img: '/images/jackets/J1.png' },
    { id: 2, name: 'Denim Jacket', price: 69.99, img: '/images/jackets/J2.png' },
    { id: 3, name: 'Puffer Jacket', price: 89.99, img: '/images/jackets/J3.png' },
    { id: 4, name: 'Bomber Jacket', price: 79.99, img: '/images/jackets/J4.png' },
    { id: 5, name: 'Hooded Jacket', price: 54.99, img: '/images/jackets/J5.png' },
    { id: 6, name: 'Windbreaker Jacket', price: 39.99, img: '/images/jackets/J6.png' },
    { id: 7, name: 'Trench Coat', price: 129.99, img: '/images/jackets/J7.png' },
    { id: 8, name: 'Plaid Jacket', price: 59.99, img: '/images/jackets/J8.png' },
    { id: 9, name: 'Rain Jacket', price: 79.99, img: '/images/jackets/J9.png' },
    { id: 10, name: 'Fleece Jacket', price: 49.99, img: '/images/jackets/J10.png' },
  ];

  // Function to handle adding the product to the cart
  const handleAddToCart = (product) => {
    addToCart(product); // Add the product to the cart using CartContext
    setShowNotification(true); // Show the notification
    setTimeout(() => {
      setShowNotification(false); // Hide the notification after 3 seconds
    }, 3000);
  };

  return (
    <div className="jacketsPage">
      <h1>Jackets Collection</h1>

      {/* Notification for item added to cart */}
      {showNotification && (
        <div className="notification">
          <p>Item added to cart!</p>
        </div>
      )}

      <div className="jacketsPage__products">
        {products.map((product) => (
          <div key={product.id} className="jacketsPage__product">
            <img
              src={product.img}
              alt={product.name}
              className="jacketsPage__productImage"
            />
            <div className="jacketsPage__productInfo">
              <h2>{product.name}</h2>
              <p>{product.description || 'No description available.'}</p>
              <p className="jacketsPage__price">${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JacketsPage;
