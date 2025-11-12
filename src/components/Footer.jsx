import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#0a0a0a',
      borderTop: '1px solid #333',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '3rem 2rem 1.5rem'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Section */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: '1rem',
              letterSpacing: '0.05em'
            }}>
              REINCARNATED
            </h3>
            <p style={{
              fontSize: '0.875rem',
              color: '#9ca3af',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Never the Same Twice. Unique fashion for unique individuals.
            </p>
            {/* Social Media Links */}
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E4405F';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1877F2';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1DA1F2';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                { name: 'Shop', path: '/shop' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.path} style={{ marginBottom: '0.75rem' }}>
                  <Link
                    to={link.path}
                    style={{
                      fontSize: '0.875rem',
                      color: '#9ca3af',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#fff'}
                    onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Contact
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                fontSize: '0.875rem',
                color: '#9ca3af'
              }}>
                <Mail size={16} />
                <span>apeweattah522@gmail.com</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                fontSize: '0.875rem',
                color: '#9ca3af'
              }}>
                <Phone size={16} />
                <span>+233 50 889 1026</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.875rem',
                color: '#9ca3af'
              }}>
                <MapPin size={16} />
                <span>Burma Camp</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #333',
          paddingTop: '1.5rem',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#9ca3af',
            margin: 0
          }}>
            © {new Date().getFullYear()} Reincarnated. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
