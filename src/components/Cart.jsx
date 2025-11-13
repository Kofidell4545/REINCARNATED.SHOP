import React, { useState } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutForm from './CheckoutForm';
import PaymentModal from './PaymentModal';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, isCartOpen, closeCart } = useCart();
  const [isCheckoutFormOpen, setIsCheckoutFormOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [customerInfo, setCustomerInfo] = useState(null);

  const handleCheckout = () => {
    setIsCheckoutFormOpen(true);
  };

  const handleCheckoutSubmit = (formData) => {
    setCustomerInfo(formData);
    setIsCheckoutFormOpen(false);
    setIsPaymentModalOpen(true);
    
    // Save order to localStorage
    saveOrder(formData);
  };

  const saveOrder = (formData) => {
    const order = {
      id: Date.now(),
      customerName: formData.name,
      customerPhone: formData.phone,
      customerAddress: formData.address,
      items: cartItems,
      total: getCartTotal(),
      status: 'pending',
      createdAt: new Date().toISOString(),
      referenceCode: null // Will be updated when payment modal generates it
    };

    // Save to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
  };

  if (!isCartOpen) return null;

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
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 999,
          backdropFilter: 'blur(4px)'
        }}
        onClick={closeCart}
      />

      {/* Cart Sidebar */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        maxWidth: '450px',
        height: '100vh',
        backgroundColor: '#1a1a1a',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.5)',
        animation: 'slideIn 0.3s ease-out'
      }}>
        {/* Header */}
        <div style={{
          padding: '2rem',
          borderBottom: '1px solid #333',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#fff',
            margin: 0
          }}>
            Shopping Cart ({cartItems.reduce((count, item) => count + item.quantity, 0)})
          </h2>
          <button
            onClick={closeCart}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.5rem'
        }}>
          {cartItems.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              color: '#9ca3af'
            }}>
              <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Your cart is empty</p>
              <p style={{ fontSize: '0.875rem' }}>Add some items to get started!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} style={{
                backgroundColor: '#0a0a0a',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '1rem',
                display: 'flex',
                gap: '1rem'
              }}>
                {/* Product Image */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#2a2a2a',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  flexShrink: 0
                }}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                {/* Product Info */}
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#fff',
                    marginBottom: '0.25rem'
                  }}>
                    {item.name}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#9ca3af',
                    marginBottom: '0.75rem'
                  }}>
                    GH₵ {item.price.toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        width: '28px',
                        height: '28px',
                        backgroundColor: '#333',
                        border: 'none',
                        borderRadius: '6px',
                        color: '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#444'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
                    >
                      <Minus size={14} />
                    </button>

                    <span style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#fff',
                      minWidth: '20px',
                      textAlign: 'center'
                    }}>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        width: '28px',
                        height: '28px',
                        backgroundColor: '#333',
                        border: 'none',
                        borderRadius: '6px',
                        color: '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#444'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
                    >
                      <Plus size={14} />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        marginLeft: 'auto',
                        background: 'none',
                        border: 'none',
                        color: '#ef4444',
                        cursor: 'pointer',
                        padding: '0.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'opacity 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                      onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '1.5rem 2rem',
            borderTop: '1px solid #333',
            backgroundColor: '#0a0a0a'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <span style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#fff'
              }}>
                Total
              </span>
              <span style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#fff'
              }}>
                GH₵ {getCartTotal().toFixed(2)}
              </span>
            </div>

            <button
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
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        )}
      </div>

      {/* Checkout Form */}
      <CheckoutForm
        isOpen={isCheckoutFormOpen}
        onClose={() => setIsCheckoutFormOpen(false)}
        onSubmit={handleCheckoutSubmit}
        cartItems={cartItems}
        cartTotal={getCartTotal()}
      />

      {/* Payment Modal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        cartTotal={getCartTotal()}
        cartItems={cartItems}
        customerInfo={customerInfo}
      />

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Cart;
