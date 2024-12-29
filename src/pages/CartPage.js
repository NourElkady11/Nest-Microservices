import React from 'react';
import { useCart } from './CartContext';
import { Navigate, Link } from 'react-router-dom';
import './Cart.css';

function CartPage() {
  const { cart, removeFromCart, calculateTotal, isLoggedIn } = useCart();

  // Allow adding to cart, but if the user goes to checkout, require login
  const handleProceedToCheckout = () => {
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      return <Navigate to="/login" />;
    }
    // Proceed with checkout logic
  };

  return (
    <div className="cartPage">
      <h1>Your Cart</h1>

      {/* If the cart is empty */}
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cartPage__items">
          {cart.map((product) => (
            <div key={product.id} className="cartPage__item">
              <img
                src={product.img}
                alt={product.name}
                className="cartPage__itemImage"
              />
              <div className="cartPage__itemInfo">
                <h2>{product.name}</h2>
                <p className="cartPage__price">${product.price}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Total Price */}
      <div className="cartPage__total">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
      </div>

      {/* Proceed to Checkout Button */}
      <button onClick={handleProceedToCheckout}>
        Proceed to Checkout
      </button>

      {/* Back to Home Button */}
      <Link to="/" className="cartPage__backHome">
        Back to Home
      </Link>
    </div>
  );
}

export default CartPage;
