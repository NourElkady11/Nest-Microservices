import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'flex-end', // Aligns the links to the right
    gap: '20px', // Space between links
    padding: '10px 20px', // Padding for the nav
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
  };

  const linkHoverStyle = {
    textDecoration: 'underline', // Underline on hover
  };

  return (
    <header style={{ padding: '10px 20px' }}>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
          Home
        </Link>
        <Link to="/cart" style={linkStyle} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
          Cart
        </Link>
        <Link to="/login" style={linkStyle} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
          Login
        </Link>
        <Link to="/register" style={linkStyle} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
          Register
        </Link>
      </nav>
    </header>
  );
}

export default Header;
