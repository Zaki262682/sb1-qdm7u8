import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Products } from './pages/Products';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Wishlist } from './pages/Wishlist';
import { ThemeProvider } from './components/ThemeProvider';
import './styles/theme.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen pb-16 md:pb-0">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/cart"
                element={
                  <div className="max-w-2xl mx-auto px-4 py-8">
                    <Cart />
                  </div>
                }
              />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;