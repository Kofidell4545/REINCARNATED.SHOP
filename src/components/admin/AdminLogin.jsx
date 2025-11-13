import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff } from 'lucide-react';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    // Simple password check (you can change this password)
    if (password === 'reincarnated2024') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: '#1a1a1a',
        borderRadius: '20px',
        padding: '3rem 2rem',
        maxWidth: '450px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
      }}>
        {/* Logo/Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#fff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem'
          }}>
            <Lock size={40} color="#000" />
          </div>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: '0.5rem',
            letterSpacing: '0.05em'
          }}>
            ADMIN LOGIN
          </h1>
          <p style={{
            color: '#9ca3af',
            fontSize: '0.875rem'
          }}>
            Enter your password to access the dashboard
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              color: '#d1d5db',
              fontSize: '0.875rem',
              marginBottom: '0.5rem',
              fontWeight: '600'
            }}>
              Admin Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  paddingRight: '3rem',
                  backgroundColor: '#0a0a0a',
                  border: error ? '1px solid #ef4444' : '1px solid #333',
                  borderRadius: '10px',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => !error && (e.target.style.borderColor = '#fff')}
                onBlur={(e) => !error && (e.target.style.borderColor = '#333')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#9ca3af',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {error && (
              <p style={{
                color: '#ef4444',
                fontSize: '0.75rem',
                marginTop: '0.5rem'
              }}>
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#fff',
              color: '#000',
              border: 'none',
              borderRadius: '10px',
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
            Login
          </button>
        </form>

        {/* Back to Home */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'none',
              border: 'none',
              color: '#9ca3af',
              fontSize: '0.875rem',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
            onMouseEnter={(e) => e.target.style.color = '#fff'}
            onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
