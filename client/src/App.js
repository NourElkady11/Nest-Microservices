import React, { useState } from 'react';  // Import useState to manage cart state
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './pages/CartContext';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Footer from './components/Footer';
import PantsPage from './pages/PantsPage'; 
import JacketsPage from './pages/JacketsPage'; 
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { AuthProvider } from './components/AuthContext';

function App() {
  const [cart, setCart] = useState([]);  // Declare cart state with useState

  return (
    <AuthProvider>
    <CartProvider>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
          <Route path="/pants" element={<PantsPage />} />
          <Route path="/jackets" element={<JacketsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
