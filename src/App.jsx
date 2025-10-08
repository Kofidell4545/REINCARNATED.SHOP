import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/shop" element={
              <div className="min-h-screen bg-black flex items-center justify-center">
                <h1 className="text-3xl font-bold text-white">Shop Page Coming Soon</h1>
              </div>
            } />
            <Route path="/about" element={
              <div className="min-h-screen bg-black flex items-center justify-center">
                <h1 className="text-3xl font-bold text-white">About Page Coming Soon</h1>
              </div>
            } />
            <Route path="/contact" element={
              <div className="min-h-screen bg-black flex items-center justify-center">
                <h1 className="text-3xl font-bold text-white">Contact Page Coming Soon</h1>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;