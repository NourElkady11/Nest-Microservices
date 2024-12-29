import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // useLocation to access cart data passed via state
import './Cart.css'; // For styling the page

function Cart() {
  const location = useLocation();
  const { cart } = location.state || { cart: [] }; // Getting cart items from state or defaulting to an empty array

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <div className="cart__items">
          {cart.map((product) => (
            <div key={product.id} className="cart__item">
              <img
                src={product.img}
                alt={product.name}
                className="cart__itemImage"
              />
              <div className="cart__itemDetails">
                <p className="cart__itemName">{product.name}</p>
                <p className="cart__itemPrice">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
      <div className="cart__total">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
      <Link to="/" className="cart__continueShopping">Continue Shopping</Link>
    </div>
  );
}

export default Cart;
