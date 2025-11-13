import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Loader } from 'lucide-react';

const Shop = () => {
  const { addToCart } = useCart();
  const [imageLoading, setImageLoading] = useState({});
  const [imageErrors, setImageErrors] = useState({});
  // Product data
  const [products] = useState([
    {
      id: 1,
      name: 'Reincarnated Cap',
      price: 350.00,
      image: '/cap.png',
      category: 'Apparel'
    },
    {
      id: 2,
      name: 'White ',
      price: 350.00,
      image: '/whiteShirt.jpeg',
      category: 'Apparel'
    },
    {
      id: 3,
      name: 'Black ',
      price: 350.00,
      image: '/blackShirt.jpeg',
      category: 'Apparel'
    },
    {
      id: 4,
      name: 'Cuffed Beanie',
      price: 150.00,
      image: '/Cujay.jpeg',
      category: 'Apparel'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Apparel', 'Accessories'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleImageLoad = (productId) => {
    setImageLoading(prev => ({ ...prev, [productId]: false }));
  };

  const handleImageError = (productId) => {
    setImageLoading(prev => ({ ...prev, [productId]: false }));
    setImageErrors(prev => ({ ...prev, [productId]: true }));
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', paddingTop: '80px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 2rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            color: '#fff', 
            marginBottom: '1rem',
            letterSpacing: '0.05em'
          }}>
            SHOP
          </h1>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#9ca3af', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            Discover our curated collection of unique pieces
          </p>
        </div>

        {/* Category Filter */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: selectedCategory === category ? '#fff' : 'transparent',
                color: selectedCategory === category ? '#000' : '#fff',
                border: '1px solid #fff',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '6rem 2rem',
            color: '#9ca3af'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '0.5rem'
            }}>
              No Products Found
            </h3>
            <p style={{ fontSize: '1rem' }}>
              Try selecting a different category
            </p>
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {filteredProducts.map(product => (
            <div 
              key={product.id}
              style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Product Image */}
              <div style={{ 
                width: '100%', 
                height: '350px', 
                backgroundColor: '#2a2a2a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative'
              }}>
                {/* Loading Spinner */}
                {imageLoading[product.id] !== false && !imageErrors[product.id] && (
                  <div style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af'
                  }}>
                    <Loader 
                      style={{ 
                        animation: 'spin 1s linear infinite',
                        width: '32px',
                        height: '32px'
                      }} 
                    />
                  </div>
                )}
                
                {/* Error State */}
                {imageErrors[product.id] ? (
                  <div style={{ 
                    color: '#9ca3af', 
                    fontSize: '0.875rem', 
                    textAlign: 'center', 
                    padding: '2rem' 
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📦</div>
                    {product.name}
                    <br />
                    <span style={{ fontSize: '0.75rem', color: '#666' }}>Image not available</span>
                  </div>
                ) : (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: imageLoading[product.id] === false ? 'block' : 'none'
                    }}
                    onLoad={() => handleImageLoad(product.id)}
                    onError={() => handleImageError(product.id)}
                  />
                )}
              </div>

              {/* Product Info */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ 
                  fontSize: '0.75rem', 
                  color: '#9ca3af', 
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem'
                }}>
                  {product.category}
                </div>
                <h3 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '600', 
                  color: '#fff',
                  marginBottom: '0.75rem'
                }}>
                  {product.name}
                </h3>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginTop: '1rem'
                }}>
                  <span style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold', 
                    color: '#fff' 
                  }}>
                    GH₵ {product.price.toFixed(2)}
                  </span>
                  <button 
                    onClick={() => addToCart(product)}
                    style={{
                      padding: '0.5rem 1.5rem',
                      backgroundColor: '#fff',
                      color: '#000',
                      border: 'none',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f3f4f6';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#fff';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Shop;
