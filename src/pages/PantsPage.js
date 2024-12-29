import React, { useState } from 'react';
import './PantsPage.css'; // For styling the Pants Page
import { useCart } from './CartContext'; // Import the useCart hook to access cart context

function PantsPage() {
  const { addToCart } = useCart(); // Access the addToCart function from CartContext
  const [showNotification, setShowNotification] = useState(false); // State to manage the notification visibility

  const products = [
    { id: 1, name: 'Stylish Jeans', price: 49.99, img: '/images/pants/P1.png', description: 'High-quality stylish jeans for everyday wear.' },
    { id: 2, name: 'Classic Chinos', price: 39.99, img: '/images/pants/P2.png', description: 'Comfortable chinos for a casual day out.' },
    { id: 3, name: 'Comfort Fit Trousers', price: 59.99, img: '/images/pants/P3.png', description: 'Perfect for formal occasions or a smart casual look.' },
    { id: 4, name: 'Cargo Pants', price: 44.99, img: '/images/pants/P4.png', description: 'Durable cargo pants for outdoor activities.' },
    { id: 5, name: 'Slim Fit Jeans', price: 55.99, img: '/images/pants/P5.png', description: 'Modern slim fit jeans that go well with any outfit.' },
    { id: 6, name: 'Track Pants', price: 29.99, img: '/images/pants/P6.png', description: 'Perfect for a sporty look and comfort during exercise.' },
    { id: 7, name: 'Leather Pants', price: 89.99, img: '/images/pants/P7.png', description: 'Stylish and edgy leather pants for a bold look.' },
    { id: 8, name: 'Dress Pants', price: 69.99, img: '/images/pants/P8.png', description: 'Perfect for formal events and professional settings.' },
    { id: 9, name: 'Linen Pants', price: 39.99, img: '/images/pants/P9.png', description: 'Lightweight and breathable pants for the summer.' },
    { id: 10, name: 'Wide Leg Pants', price: 49.99, img: '/images/pants/P10.png', description: 'Comfortable and stylish wide-leg pants for a relaxed fit.' },
  ];

  // Function to handle adding product to cart
  const handleAddToCart = (product) => {
    addToCart(product); // Call the addToCart function from CartContext
    setShowNotification(true); // Show the notification
    setTimeout(() => {
      setShowNotification(false); // Hide the notification after 3 seconds
    }, 3000);
  };

  return (
    <div className="pantsPage">
      <h1>Pants Collection</h1>

      {/* Notification for item added to cart */}
      {showNotification && (
        <div className="notification">
          <p>Item added to cart!</p>
        </div>
      )}

      <div className="pantsPage__products">
        {products.map((product) => (
          <div key={product.id} className="pantsPage__product">
            <img
              src={product.img}
              alt={product.name}
              className="pantsPage__productImage"
            />
            <div className="pantsPage__productInfo">
              <h2>{product.name}</h2>
              <p>{product.description || 'No description available.'}</p>
              <p className="pantsPage__price">${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PantsPage;
