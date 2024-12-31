import React, { useState } from 'react';
import './RegisterPage.css';
import { useCart } from '../pages/CartContext';

function RegisterPage() {
  const { login } = useCart();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState(''); // Add state for username

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      fetch('http://localhost:3001/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, username }), // Include username in request body
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          alert('Registration SUCCESSFUL', data);
          login(email, password);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Create Your Account</h2>
        <form onSubmit={handleRegister} className="register-form">
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state
              required
              className="register-input"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="register-input"
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
              className="register-input"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="register-input"
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <div className="register-footer">
          <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
