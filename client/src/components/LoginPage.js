import React, { useState } from 'react';
import './LoginPage.css';
import { useCart } from '../pages/CartContext';

function LoginPage() {
  const { login } = useCart();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="login-footer">
          <p>Don't have an account? <a href="/register">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
