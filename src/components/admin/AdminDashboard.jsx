import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, 
  Package, 
  ShoppingBag, 
  Phone, 
  MapPin, 
  Calendar,
  CheckCircle,
  Clock,
  X
} from 'lucide-react';
import ProductManagement from './ProductManagement';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('orders'); // 'orders' or 'products'
  const [selectedOrder, setSelectedOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    // Sort by newest first
    const sortedOrders = savedOrders.sort((a, b) => b.id - a.id);
    setOrders(sortedOrders);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin/login');
  };

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#f59e0b';
      case 'confirmed': return '#3b82f6';
      case 'completed': return '#22c55e';
      default: return '#9ca3af';
    }
  };

  const getStatusLabel = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#1a1a1a',
        borderBottom: '1px solid #333',
        padding: '1.5rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#fff',
            letterSpacing: '0.05em'
          }}>
            WELCOME CEO
          </h1>
          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#ef4444',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              position: 'absolute',
              right: 0
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div style={{
        backgroundColor: '#1a1a1a',
        borderBottom: '1px solid #333',
        padding: '0 2rem'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          gap: '2rem'
        }}>
          <button
            onClick={() => setActiveTab('orders')}
            style={{
              padding: '1rem 0',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'orders' ? '2px solid #fff' : '2px solid transparent',
              color: activeTab === 'orders' ? '#fff' : '#9ca3af',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease'
            }}
          >
            Orders ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('products')}
            style={{
              padding: '1rem 0',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'products' ? '2px solid #fff' : '2px solid transparent',
              color: activeTab === 'products' ? '#fff' : '#9ca3af',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease'
            }}
          >
            Products
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        {activeTab === 'orders' ? (
          <>
            {/* Orders List */}
            {orders.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                color: '#9ca3af'
              }}>
                <Package size={64} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#fff', marginBottom: '0.5rem' }}>
                  No Orders Yet
                </h3>
                <p style={{ fontSize: '0.875rem' }}>
                  Orders will appear here when customers make purchases
                </p>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gap: '1.5rem'
              }}>
                {orders.map(order => (
                  <div
                    key={order.id}
                    style={{
                      backgroundColor: '#1a1a1a',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      border: '1px solid #333',
                      transition: 'border-color 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onClick={() => setSelectedOrder(order)}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#555'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}
                  >
                    {/* Order Header */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '1rem',
                      flexWrap: 'wrap',
                      gap: '1rem'
                    }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                          <h3 style={{
                            fontSize: '1.125rem',
                            fontWeight: '600',
                            color: '#fff'
                          }}>
                            {order.customerName}
                          </h3>
                          <span style={{
                            padding: '0.25rem 0.75rem',
                            backgroundColor: getStatusColor(order.status),
                            color: '#000',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            textTransform: 'uppercase'
                          }}>
                            {getStatusLabel(order.status)}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af', fontSize: '0.875rem' }}>
                          <Calendar size={14} />
                          <span>{formatDate(order.createdAt)}</span>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#fff' }}>
                          GH₵ {order.total.toFixed(2)}
                        </p>
                        {order.referenceCode && (
                          <p style={{ fontSize: '0.875rem', color: '#f59e0b', fontWeight: '600' }}>
                            Ref: {order.referenceCode}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Customer Info */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '1rem',
                      marginBottom: '1rem',
                      padding: '1rem',
                      backgroundColor: '#0a0a0a',
                      borderRadius: '8px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Phone size={16} color="#9ca3af" />
                        <span style={{ color: '#d1d5db', fontSize: '0.875rem' }}>{order.customerPhone}</span>
                      </div>
                      {order.customerAddress && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <MapPin size={16} color="#9ca3af" />
                          <span style={{ color: '#d1d5db', fontSize: '0.875rem' }}>{order.customerAddress}</span>
                        </div>
                      )}
                    </div>

                    {/* Items */}
                    <div style={{ marginBottom: '1rem' }}>
                      <p style={{ color: '#9ca3af', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                        Items ({order.items.reduce((sum, item) => sum + item.quantity, 0)})
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {order.items.map((item, index) => (
                          <div key={index} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            color: '#d1d5db',
                            fontSize: '0.875rem'
                          }}>
                            <span>{item.name} x {item.quantity}</span>
                            <span>GH₵ {(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Status Actions */}
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      {order.status === 'pending' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateOrderStatus(order.id, 'confirmed');
                          }}
                          style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: '#3b82f6',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}
                        >
                          <CheckCircle size={14} />
                          Confirm Payment
                        </button>
                      )}
                      {order.status === 'confirmed' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateOrderStatus(order.id, 'completed');
                          }}
                          style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: '#22c55e',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}
                        >
                          <CheckCircle size={14} />
                          Mark as Completed
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <ProductManagement />
        )}
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              zIndex: 1001,
              backdropFilter: 'blur(4px)'
            }}
            onClick={() => setSelectedOrder(null)}
          />
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#1a1a1a',
              borderRadius: '20px',
              padding: '2rem',
              maxWidth: '600px',
              width: '90%',
              maxHeight: '90vh',
              overflowY: 'auto',
              zIndex: 1002
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>Order Details</h2>
              <button
                onClick={() => setSelectedOrder(null)}
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
            
            <div style={{ color: '#d1d5db', fontSize: '0.875rem' }}>
              <p style={{ marginBottom: '0.5rem' }}><strong>Customer:</strong> {selectedOrder.customerName}</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Phone:</strong> {selectedOrder.customerPhone}</p>
              {selectedOrder.customerAddress && (
                <p style={{ marginBottom: '0.5rem' }}><strong>Address:</strong> {selectedOrder.customerAddress}</p>
              )}
              <p style={{ marginBottom: '0.5rem' }}><strong>Reference:</strong> {selectedOrder.referenceCode || 'N/A'}</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Date:</strong> {formatDate(selectedOrder.createdAt)}</p>
              <p style={{ marginBottom: '1rem' }}><strong>Status:</strong> {getStatusLabel(selectedOrder.status)}</p>
              
              <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>Items:</h3>
              {selectedOrder.items.map((item, index) => (
                <p key={index} style={{ marginBottom: '0.25rem' }}>
                  {item.name} x {item.quantity} - GH₵ {(item.price * item.quantity).toFixed(2)}
                </p>
              ))}
              
              <p style={{ marginTop: '1rem', fontSize: '1.25rem', fontWeight: 'bold', color: '#fff' }}>
                Total: GH₵ {selectedOrder.total.toFixed(2)}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
