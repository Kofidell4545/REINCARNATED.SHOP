import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';
import './index.css';

function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <Router>
          <AuthProvider>
            <ToastProvider>
              <Routes>
            {/* Customer Routes */}
            <Route path="/*" element={
              <div className="min-h-screen bg-black text-white" style={{ display: 'flex', flexDirection: 'column' }}>
                <Navbar />
                <Cart />
                <main style={{ flex: 1 }}>
                  <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            } />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
              </Routes>
            </ToastProvider>
          </AuthProvider>
        </Router>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;