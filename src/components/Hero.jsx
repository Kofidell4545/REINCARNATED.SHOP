import React from 'react';

const Hero = () => {
  return (
    <section 
      style={{ 
        position: 'relative', 
        width: '100%', 
        minHeight: '100vh', 
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 1rem 2rem'
      }}
    >
      {/* Background Image */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          zIndex: 1,
          padding: '80px 1rem 2rem'
        }}
      >
        <div style={{ 
          position: 'relative', 
          width: '90%', 
          maxWidth: '1000px',
          maxHeight: '70vh'
        }}>
          <img 
            src="/HERO.png" 
            alt="Hero Background" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              objectFit: 'cover', 
              maxHeight: '70vh', 
              borderRadius: '16px', 
              display: 'block' 
            }}
            onError={(e) => console.error('Image failed to load:', e)}
            onLoad={() => console.log('Image loaded successfully')}
          />
          <div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              backgroundColor: 'rgba(0, 0, 0, 0.3)', 
              borderRadius: '16px',
              pointerEvents: 'none'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          width: '100%', 
          maxWidth: '900px', 
          margin: '0 auto', 
          padding: '2rem 1rem', 
          textAlign: 'center' 
        }}
      >
        <h1 
          style={{ 
            fontSize: 'clamp(2rem, 8vw, 4.5rem)',
            fontWeight: 'bold', 
            color: '#fff', 
            marginBottom: 'clamp(1rem, 3vw, 2rem)',
            lineHeight: '1.1'
          }}
        >
          Never the Same Twice
        </h1>
        <p 
          style={{ 
            fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)',
            color: '#fff', 
            marginBottom: 'clamp(1.5rem, 4vw, 3rem)',
            maxWidth: '600px', 
            margin: '0 auto',
            marginBottom: 'clamp(1.5rem, 4vw, 3rem)',
            lineHeight: '1.6',
            padding: '0 1rem'
          }}
        >
          Discover unique, one of a kind clothing pieces that reflect your individuality. Each item is carefully curated and designed to ensure you stand out from the crowd.
        </p>
        <button 
          style={{ 
            backgroundColor: '#000', 
            color: '#fff', 
            padding: 'clamp(0.75rem, 2vw, 1rem) clamp(2rem, 5vw, 3rem)', 
            borderRadius: '9999px', 
            fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
            fontWeight: '600', 
            cursor: 'pointer', 
            border: '1px solid transparent',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.4)'}
          onMouseLeave={(e) => e.target.style.border = '1px solid transparent'}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
