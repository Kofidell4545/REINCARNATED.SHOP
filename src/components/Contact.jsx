import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ 
      backgroundColor: '#000', 
      minHeight: '100vh', 
      paddingTop: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 1rem 4rem'
    }}>
      <div style={{ 
        maxWidth: '900px', 
        width: '100%',
        backgroundColor: '#1a1a1a',
        borderRadius: 'clamp(16px, 4vw, 32px)',
        padding: 'clamp(1.5rem, 5vw, 4rem)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 7vw, 3.5rem)',
            fontWeight: 'bold', 
            color: '#fff', 
            marginBottom: '1rem',
            letterSpacing: '0.05em'
          }}>
            GET IN TOUCH
          </h1>
          <div style={{
            width: 'clamp(60px, 15vw, 80px)',
            height: '3px',
            backgroundColor: '#fff',
            margin: '0 auto 1.5rem'
          }} />
          <p style={{ 
            fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
            color: '#9ca3af',
            lineHeight: '1.6',
            padding: '0 1rem'
          }}>
            Have a question or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Info */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 'clamp(1rem, 3vw, 2rem)',
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
          padding: 'clamp(1rem, 3vw, 2rem)',
          backgroundColor: '#0a0a0a',
          borderRadius: 'clamp(12px, 3vw, 16px)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <Mail style={{ 
              width: '24px', 
              height: '24px', 
              color: '#fff',
              margin: '0 auto 0.75rem'
            }} />
            <p style={{ 
              fontSize: '0.875rem', 
              color: '#9ca3af',
              marginBottom: '0.25rem'
            }}>
              Email
            </p>
            <p style={{ 
              fontSize: '1rem', 
              color: '#fff',
              fontWeight: '500'
            }}>
              apeweattah522@gmail.com
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Phone style={{ 
              width: '24px', 
              height: '24px', 
              color: '#fff',
              margin: '0 auto 0.75rem'
            }} />
            <p style={{ 
              fontSize: '0.875rem', 
              color: '#9ca3af',
              marginBottom: '0.25rem'
            }}>
              Phone
            </p>
            <p style={{ 
              fontSize: '1rem', 
              color: '#fff',
              fontWeight: '500'
            }}>
              +233 50 889 1026
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <MapPin style={{ 
              width: '24px', 
              height: '24px', 
              color: '#fff',
              margin: '0 auto 0.75rem'
            }} />
            <p style={{ 
              fontSize: '0.875rem', 
              color: '#9ca3af',
              marginBottom: '0.25rem'
            }}>
              Location
            </p>
            <p style={{ 
              fontSize: '1rem', 
              color: '#fff',
              fontWeight: '500'
            }}>
              Burma Camp
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: 'clamp(0.75rem, 2vw, 1rem)',
                backgroundColor: '#0a0a0a',
                border: '1px solid #333',
                borderRadius: 'clamp(8px, 2vw, 12px)',
                color: '#fff',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                outline: 'none',
                transition: 'border-color 0.3s ease',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#fff'}
              onBlur={(e) => e.target.style.borderColor = '#333'}
              placeholder="Your name"
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: 'clamp(0.75rem, 2vw, 1rem)',
                backgroundColor: '#0a0a0a',
                border: '1px solid #333',
                borderRadius: 'clamp(8px, 2vw, 12px)',
                color: '#fff',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                outline: 'none',
                transition: 'border-color 0.3s ease',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#fff'}
              onBlur={(e) => e.target.style.borderColor = '#333'}
              placeholder="your.email@example.com"
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: 'clamp(0.75rem, 2vw, 1rem)',
                backgroundColor: '#0a0a0a',
                border: '1px solid #333',
                borderRadius: 'clamp(8px, 2vw, 12px)',
                color: '#fff',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                outline: 'none',
                transition: 'border-color 0.3s ease',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#fff'}
              onBlur={(e) => e.target.style.borderColor = '#333'}
              placeholder="What's this about?"
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              style={{
                width: '100%',
                padding: 'clamp(0.75rem, 2vw, 1rem)',
                backgroundColor: '#0a0a0a',
                border: '1px solid #333',
                borderRadius: 'clamp(8px, 2vw, 12px)',
                color: '#fff',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                outline: 'none',
                transition: 'border-color 0.3s ease',
                resize: 'vertical',
                fontFamily: 'inherit',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#fff'}
              onBlur={(e) => e.target.style.borderColor = '#333'}
              placeholder="Tell us what's on your mind..."
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: 'clamp(1rem, 2.5vw, 1.25rem)',
              backgroundColor: '#fff',
              color: '#000',
              border: 'none',
              borderRadius: 'clamp(8px, 2vw, 12px)',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f3f4f6';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 20px rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#fff';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <Send style={{ width: '18px', height: '18px' }} />
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
