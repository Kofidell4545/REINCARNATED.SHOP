import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);
  }, []);

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', paddingTop: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)' }}>
        
        {/* Hero Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 8vw, 4rem)',
            fontWeight: 'bold', 
            color: '#fff', 
            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
            letterSpacing: '0.05em'
          }}>
            ABOUT REINCARNATED
          </h1>
          <div style={{
            width: 'clamp(60px, 15vw, 80px)',
            height: '3px',
            backgroundColor: '#fff',
            margin: '0 auto clamp(1rem, 3vw, 2rem)',
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 0.8s ease 0.3s'
          }} />
          <p style={{ 
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            color: '#9ca3af', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.8',
            padding: '0 1rem'
          }}>
            Never the Same Twice
          </p>
        </div>

        {/* Story Section */}
        <div style={{ 
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(2rem, 4vw, 3rem)'
        }}>
          <div style={{
            backgroundColor: '#1a1a1a',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            borderRadius: 'clamp(16px, 3vw, 24px)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
              letterSpacing: '0.05em'
            }}>
              Our Story
            </h2>
            <p style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
              color: '#d1d5db',
              lineHeight: '1.8',
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)'
            }}>
              Reincarnated is more than just a clothing brand—it's a philosophy. We believe that fashion should be as unique as the individuals who wear it. Each piece in our collection is carefully curated to ensure that you never look the same twice.
            </p>
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              color: '#fff',
              lineHeight: '1.8',
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
              fontWeight: '600',
              fontStyle: 'italic'
            }}>
              "What breaks you, makes you. What scars you, shapes you."
            </p>
            <p style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
              color: '#d1d5db',
              lineHeight: '1.8',
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)'
            }}>
              We celebrate the battles you've fought and the storms you've weathered. Every crack in your armor tells a story of survival. Every scar is a badge of resilience. The pain you've endured, the brokenness you've overcome—these aren't weaknesses. They're your superpowers.
            </p>
            <p style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
              color: '#d1d5db',
              lineHeight: '1.8'
            }}>
              Born from a passion for individuality and self-expression, Reincarnated challenges the monotony of mass-produced fashion. We create limited pieces for those who've been through the fire and emerged stronger, for those who wear their journey with pride. Because true power isn't found in perfection—it's forged in the flames of adversity.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div style={{ 
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
            textAlign: 'center',
            letterSpacing: '0.05em'
          }}>
            Our Values
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            {/* Value 1 */}
            <div style={{
              backgroundColor: '#1a1a1a',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              borderRadius: 'clamp(12px, 3vw, 16px)',
              textAlign: 'center',
              transition: 'transform 0.3s ease, opacity 0.8s ease 0.8s',
              cursor: 'pointer',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = isVisible ? 'translateY(-8px) scale(1)' : 'scale(0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = isVisible ? 'scale(1)' : 'scale(0.8)';
            }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                ✨
              </div>
              <h3 style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                fontWeight: '600',
                color: '#fff',
                marginBottom: '1rem'
              }}>
                Uniqueness
              </h3>
              <p style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                color: '#d1d5db',
                lineHeight: '1.6'
              }}>
                Every piece is designed to stand out. We celebrate individuality and reject conformity.
              </p>
            </div>

            {/* Value 2 */}
            <div style={{
              backgroundColor: '#1a1a1a',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              borderRadius: 'clamp(12px, 3vw, 16px)',
              textAlign: 'center',
              transition: 'transform 0.3s ease, opacity 0.8s ease 1s',
              cursor: 'pointer',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = isVisible ? 'translateY(-8px) scale(1)' : 'scale(0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = isVisible ? 'scale(1)' : 'scale(0.8)';
            }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                🎨
              </div>
              <h3 style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                fontWeight: '600',
                color: '#fff',
                marginBottom: '1rem'
              }}>
                Quality
              </h3>
              <p style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                color: '#d1d5db',
                lineHeight: '1.6'
              }}>
                Premium materials and craftsmanship ensure that each item is built to last.
              </p>
            </div>

            {/* Value 3 */}
            <div style={{
              backgroundColor: '#1a1a1a',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              borderRadius: 'clamp(12px, 3vw, 16px)',
              textAlign: 'center',
              transition: 'transform 0.3s ease, opacity 0.8s ease 1.2s',
              cursor: 'pointer',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = isVisible ? 'translateY(-8px) scale(1)' : 'scale(0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = isVisible ? 'scale(1)' : 'scale(0.8)';
            }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                🌍
              </div>
              <h3 style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                fontWeight: '600',
                color: '#fff',
                marginBottom: '1rem'
              }}>
                Sustainability
              </h3>
              <p style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                color: '#d1d5db',
                lineHeight: '1.6'
              }}>
                We're committed to responsible production and mindful consumption.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div style={{
          backgroundColor: '#fff',
          color: '#000',
          padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
          borderRadius: 'clamp(16px, 3vw, 24px)',
          textAlign: 'center',
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
          transition: 'opacity 0.8s ease 1.4s, transform 0.8s ease 1.4s'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 'bold',
            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
            letterSpacing: '0.05em'
          }}>
            Our Mission
          </h2>
          <p style={{
            fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            To empower individuals to express their authentic selves through unique, high-quality fashion that defies the ordinary and celebrates the extraordinary.
          </p>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          padding: 'clamp(2rem, 4vw, 3rem) 0',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease 1.6s, transform 0.8s ease 1.6s'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            Join the Movement
          </h2>
          <p style={{
            fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
            color: '#9ca3af',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
            padding: '0 1rem'
          }}>
            Be part of a community that values uniqueness and self-expression.
          </p>
          <button 
            style={{
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(2rem, 5vw, 3rem)',
              backgroundColor: '#fff',
              color: '#000',
              border: 'none',
              borderRadius: '9999px',
              fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
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
            onClick={() => window.location.href = '/shop'}
          >
            Explore Collection
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;
