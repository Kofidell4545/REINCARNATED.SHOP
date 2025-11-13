import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { toggleCart, getCartCount } = useCart();
  const cartCount = getCartCount();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Sample products for search
  const products = [
    { id: 1, name: 'Reincarnated Cap', category: 'Accessories' },
    { id: 2, name: 'White Shirt', category: 'Apparel' },
    { id: 3, name: 'Black Shirt', category: 'Apparel' },
    { id: 4, name: 'Cuffed Beanie', category: 'Apparel' }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery('');
  };

  const handleSearchResultClick = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate('/shop');
  };

  return (
    <>
    <header className="fixed top-0 w-full bg-black z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Section: Logo and Brand */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/logo.png" 
            alt="Reincarnated Logo" 
            className="h-10 w-auto"
          />
          <span className="text-white font-bold text-xl tracking-wider">
            REINCARNATED
          </span>
        </Link>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>

        {/* Right Section: Navigation Links and Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Navigation Links */}
          <Link 
            to="/shop" 
            className="text-white uppercase text-sm tracking-wide hover:text-gray-300 transition-colors duration-200"
          >
            Shop
          </Link>
          <Link 
            to="/about" 
            className="text-white uppercase text-sm tracking-wide hover:text-gray-300 transition-colors duration-200"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-white uppercase text-sm tracking-wide hover:text-gray-300 transition-colors duration-200"
          >
            Contact
          </Link>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-700"></div>

          {/* Icon Buttons */}
          <button 
            className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Search"
            onClick={toggleSearch}
          >
            <Search className="w-5 h-5 text-white" />
          </button>
          <button 
            className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="User Profile"
          >
            <User className="w-5 h-5 text-white" />
          </button>
          <button 
            className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Shopping Cart"
            onClick={toggleCart}
            style={{ position: 'relative' }}
          >
            <ShoppingCart className="w-5 h-5 text-white" />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '0',
                right: '0',
                backgroundColor: '#ef4444',
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                borderRadius: '9999px',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            backgroundColor: '#000',
            borderTop: '1px solid #333',
            padding: '1.5rem',
            zIndex: 40,
            animation: 'slideDown 0.3s ease-out'
          }}
        >
          {/* Mobile Navigation Links */}
          <div style={{ marginBottom: '1.5rem' }}>
            <Link 
              to="/shop" 
              onClick={closeMobileMenu}
              style={{
                display: 'block',
                padding: '1rem',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.125rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderBottom: '1px solid #333',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#1a1a1a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              onClick={closeMobileMenu}
              style={{
                display: 'block',
                padding: '1rem',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.125rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderBottom: '1px solid #333',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#1a1a1a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              style={{
                display: 'block',
                padding: '1rem',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.125rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderBottom: '1px solid #333',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#1a1a1a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Icon Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '1rem' }}>
            <button 
              className="p-3 rounded-full hover:bg-gray-800 transition-colors duration-200"
              aria-label="Search"
              onClick={() => {
                toggleSearch();
                closeMobileMenu();
              }}
            >
              <Search className="w-6 h-6 text-white" />
            </button>
            <button 
              className="p-3 rounded-full hover:bg-gray-800 transition-colors duration-200"
              aria-label="User Profile"
            >
              <User className="w-6 h-6 text-white" />
            </button>
            <button 
              className="p-3 rounded-full hover:bg-gray-800 transition-colors duration-200"
              aria-label="Shopping Cart"
              onClick={() => {
                toggleCart();
                closeMobileMenu();
              }}
              style={{ position: 'relative' }}
            >
              <ShoppingCart className="w-6 h-6 text-white" />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  backgroundColor: '#ef4444',
                  color: '#fff',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  borderRadius: '9999px',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </header>

    {/* Search Modal */}
    {isSearchOpen && (
      <>
        {/* Backdrop */}
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 60,
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={toggleSearch}
        />
        
        {/* Search Container */}
        <div style={{
          position: 'fixed',
          top: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '600px',
          backgroundColor: '#1a1a1a',
          borderRadius: '16px',
          padding: '2rem',
          zIndex: 70,
          animation: 'slideDown 0.3s ease'
        }}>
          {/* Search Header */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginBottom: '1.5rem'
          }}>
            <h2 style={{ 
              color: '#fff', 
              fontSize: '1.5rem', 
              fontWeight: 'bold' 
            }}>
              Search Products
            </h2>
            <button 
              onClick={toggleSearch}
              style={{
                padding: '0.5rem',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2a2a2a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Search Input */}
          <div style={{ 
            position: 'relative',
            marginBottom: '1.5rem'
          }}>
            <Search 
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9ca3af',
                width: '20px',
                height: '20px'
              }}
            />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3rem',
                backgroundColor: '#2a2a2a',
                border: '1px solid #333',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#fff'}
              onBlur={(e) => e.target.style.borderColor = '#333'}
            />
          </div>

          {/* Search Results */}
          <div style={{
            maxHeight: '400px',
            overflowY: 'auto'
          }}>
            {searchQuery === '' ? (
              <p style={{ 
                color: '#9ca3af', 
                textAlign: 'center',
                padding: '2rem'
              }}>
                Start typing to search products...
              </p>
            ) : filteredProducts.length > 0 ? (
              <div>
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    onClick={handleSearchResultClick}
                    style={{
                      padding: '1rem',
                      backgroundColor: '#2a2a2a',
                      borderRadius: '8px',
                      marginBottom: '0.75rem',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2a2a2a'}
                  >
                    <h3 style={{ 
                      color: '#fff', 
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginBottom: '0.25rem'
                    }}>
                      {product.name}
                    </h3>
                    <p style={{ 
                      color: '#9ca3af', 
                      fontSize: '0.875rem'
                    }}>
                      {product.category}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '2rem'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                <p style={{ 
                  color: '#fff',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  No products found
                </p>
                <p style={{ 
                  color: '#9ca3af',
                  fontSize: '0.875rem'
                }}>
                  Try searching for something else
                </p>
              </div>
            )}
          </div>
        </div>
      </>
    )}

    <style>{`
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}</style>
    </>
  );
};

export default Navbar;