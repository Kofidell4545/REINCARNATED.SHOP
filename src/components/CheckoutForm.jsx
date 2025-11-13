import React, { useState } from 'react';
import { X } from 'lucide-react';

const CheckoutForm = ({ isOpen, onClose, onSubmit, cartItems, cartTotal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate phone number
    if (formData.phone.length < 10) {
      alert('Please enter a valid phone number');
      return;
    }
    
    // Pass data to parent
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 1001,
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}
        onClick={onClose}
      >
        {/* Form Modal */}
        <div 
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '20px',
            maxWidth: '450px',
            width: '100%',
            padding: '2rem',
            position: 'relative',
            animation: 'modalSlideIn 0.3s ease-out'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#fff',
              margin: 0
            }}>
              Checkout Details
            </h2>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '50%',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <X size={24} />
            </button>
          </div>

          {/* Order Summary */}
          <div style={{
            backgroundColor: '#0a0a0a',
            padding: '1rem',
            borderRadius: '12px',
            marginBottom: '1.5rem'
          }}>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
              Order Total
            </p>
            <p style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
              GH₵ {cartTotal.toFixed(2)}
            </p>
            <p style={{ color: '#9ca3af', fontSize: '0.75rem', margin: 0 }}>
              {cartItems.reduce((count, item) => count + item.quantity, 0)} items
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                color: '#d1d5db',
                fontSize: '0.875rem',
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#0a0a0a',
                  border: '1px solid #333',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#fff'}
                onBlur={(e) => e.target.style.borderColor = '#333'}
              />
            </div>

            {/* Phone */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                color: '#d1d5db',
                fontSize: '0.875rem',
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0XX XXX XXXX"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#0a0a0a',
                  border: '1px solid #333',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#fff'}
                onBlur={(e) => e.target.style.borderColor = '#333'}
              />
              <p style={{
                fontSize: '0.75rem',
                color: '#9ca3af',
                marginTop: '0.25rem',
                margin: '0.25rem 0 0 0'
              }}>
                We'll use this to confirm your order
              </p>
            </div>

            {/* Address (Optional) */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                color: '#d1d5db',
                fontSize: '0.875rem',
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                Delivery Address (Optional)
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Enter delivery address"
                rows="3"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#0a0a0a',
                  border: '1px solid #333',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => e.target.style.borderColor = '#fff'}
                onBlur={(e) => e.target.style.borderColor = '#333'}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: '#fff',
                color: '#000',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f3f4f6';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#fff';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Continue to Payment
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default CheckoutForm;
