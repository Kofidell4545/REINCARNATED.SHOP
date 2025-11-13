import React, { useState, useEffect } from 'react';
import { X, Smartphone, Bitcoin, Building2, Copy } from 'lucide-react';

const PaymentModal = ({ isOpen, onClose, cartTotal, cartItems, customerInfo }) => {
  const [referenceCode, setReferenceCode] = useState('');

  // Generate unique 4-character reference code
  useEffect(() => {
    if (isOpen) {
      const generateCode = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < 4; i++) {
          code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
      };
      const code = generateCode();
      setReferenceCode(code);
      
      // Update the order with reference code
      if (customerInfo) {
        updateOrderWithReference(code, customerInfo);
      }
    }
  }, [isOpen, customerInfo]);

  const updateOrderWithReference = (code, customerInfo) => {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const latestOrder = orders[orders.length - 1];
    
    if (latestOrder && latestOrder.customerPhone === customerInfo.phone) {
      latestOrder.referenceCode = code;
      localStorage.setItem('orders', JSON.stringify(orders));
    }
  };

  if (!isOpen) return null;

  const handleCopyNumber = () => {
    navigator.clipboard.writeText('+233 50 889 1026');
    alert('Phone number copied to clipboard!');
  };

  const handleCopyReference = () => {
    navigator.clipboard.writeText(referenceCode);
    alert('Reference code copied to clipboard!');
  };

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
        {/* Modal */}
        <div 
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '20px',
            maxWidth: '480px',
            width: '100%',
            maxHeight: '95vh',
            overflowY: 'auto',
            position: 'relative',
            animation: 'modalSlideIn 0.3s ease-out'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div style={{
            padding: '1.25rem 1.5rem',
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
              Payment Details
            </h2>
            <button
              onClick={onClose}
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

          {/* Content */}
          <div style={{ padding: '1rem 1.5rem' }}>
            {/* Top Row: Reference Code & Order Summary */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
              marginBottom: '0.75rem'
            }}>
              {/* Reference Code */}
              <div style={{
                backgroundColor: '#0a0a0a',
                padding: '0.75rem',
                borderRadius: '10px',
                border: '2px solid #f59e0b'
              }}>
                <h3 style={{
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  color: '#f59e0b',
                  marginBottom: '0.4rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  ⚡ Reference Code
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#1a1a1a',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px'
                }}>
                  <span style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#fff',
                    letterSpacing: '0.15em'
                  }}>
                    {referenceCode}
                  </span>
                  <button
                    onClick={handleCopyReference}
                    style={{
                      padding: '0.4rem 0.75rem',
                      backgroundColor: '#f59e0b',
                      color: '#000',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#d97706'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#f59e0b'}
                  >
                    <Copy size={12} />
                    Copy
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div style={{
                backgroundColor: '#0a0a0a',
                padding: '0.75rem',
                borderRadius: '10px'
              }}>
                <h3 style={{
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  color: '#9ca3af',
                  marginBottom: '0.4rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Order Summary
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem'
                }}>
                  <span style={{ color: '#d1d5db', fontSize: '0.75rem' }}>
                    Items: {cartItems.reduce((count, item) => count + item.quantity, 0)}
                  </span>
                  <span style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#fff'
                  }}>
                    GH₵ {cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Money Payment */}
            <div style={{
              backgroundColor: '#0a0a0a',
              padding: '0.75rem',
              borderRadius: '10px',
              marginBottom: '0.75rem',
              border: '2px solid #22c55e'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginBottom: '0.6rem'
              }}>
                <Smartphone style={{ color: '#22c55e', width: '18px', height: '18px' }} />
                <h3 style={{
                  fontSize: '0.95rem',
                  fontWeight: 'bold',
                  color: '#fff',
                  margin: 0
                }}>
                  Mobile Money
                </h3>
                <span style={{
                  backgroundColor: '#22c55e',
                  color: '#000',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  fontSize: '0.65rem',
                  fontWeight: '700',
                  marginLeft: 'auto'
                }}>
                  AVAILABLE
                </span>
              </div>
              
              <div style={{ marginBottom: '0.6rem' }}>
                <p style={{
                  fontSize: '0.75rem',
                  color: '#9ca3af',
                  marginBottom: '0.4rem'
                }}>
                  Send payment to:
                </p>
                <div style={{
                  backgroundColor: '#1a1a1a',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.4rem'
                  }}>
                    <div>
                      <p style={{
                        fontSize: '0.65rem',
                        color: '#9ca3af',
                        marginBottom: '0.15rem'
                      }}>
                        Account Name
                      </p>
                      <p style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#fff'
                      }}>
                        Apewe
                      </p>
                    </div>
                  </div>
                  <div style={{
                    height: '1px',
                    backgroundColor: '#333',
                    margin: '0.5rem 0'
                  }} />
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <p style={{
                        fontSize: '0.75rem',
                        color: '#9ca3af',
                        marginBottom: '0.25rem'
                      }}>
                        Phone Number
                      </p>
                      <p style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#fff'
                      }}>
                        +233 50 889 1026
                      </p>
                    </div>
                    <button
                      onClick={handleCopyNumber}
                      style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#22c55e',
                        color: '#000',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#16a34a'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#22c55e'}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>

              <div style={{
                backgroundColor: '#1a1a1a',
                padding: '0.6rem',
                borderRadius: '8px'
              }}>
                <p style={{
                  fontSize: '0.7rem',
                  color: '#d1d5db',
                  marginBottom: '0.35rem',
                  fontWeight: '600'
                }}>
                  Instructions:
                </p>
                <ol style={{
                  fontSize: '0.65rem',
                  color: '#9ca3af',
                  paddingLeft: '1rem',
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  <li>Send GH₵ {cartTotal.toFixed(2)} to <strong style={{ color: '#fff' }}>Apewe</strong> (+233 50 889 1026)</li>
                  <li>Use code <strong style={{ color: '#f59e0b' }}>{referenceCode}</strong> as reference</li>
                  <li>Screenshot confirmation & send to WhatsApp: +233 50 889 1026</li>
                </ol>
              </div>
            </div>

            {/* Coming Soon Options */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.6rem',
              marginBottom: '0.75rem'
            }}>
              {/* Crypto */}
              <div style={{
                backgroundColor: '#0a0a0a',
                padding: '0.6rem',
                borderRadius: '8px',
                border: '1px solid #333',
                opacity: 0.6,
                textAlign: 'center'
              }}>
                <Bitcoin style={{ 
                  color: '#f59e0b', 
                  width: '18px', 
                  height: '18px',
                  margin: '0 auto 0.3rem'
                }} />
                <h4 style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#fff',
                  marginBottom: '0.15rem'
                }}>
                  Crypto
                </h4>
                <span style={{
                  fontSize: '0.65rem',
                  color: '#9ca3af',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Coming Soon
                </span>
              </div>

              {/* Bank Transfer */}
              <div style={{
                backgroundColor: '#0a0a0a',
                padding: '0.6rem',
                borderRadius: '8px',
                border: '1px solid #333',
                opacity: 0.6,
                textAlign: 'center'
              }}>
                <Building2 style={{ 
                  color: '#3b82f6', 
                  width: '18px', 
                  height: '18px',
                  margin: '0 auto 0.3rem'
                }} />
                <h4 style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#fff',
                  marginBottom: '0.15rem'
                }}>
                  Bank Transfer
                </h4>
                <span style={{
                  fontSize: '0.65rem',
                  color: '#9ca3af',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                width: '100%',
                padding: '0.7rem',
                backgroundColor: '#fff',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.8rem',
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
              Got It
            </button>
          </div>
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

export default PaymentModal;
