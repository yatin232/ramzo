import React from 'react';

const ContactAnimation = () => {
  const styles = {
    container: {
      width: '899px', 
      height: '1200px',
      position: 'relative',
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #667eea 100%)',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
    },
    
    floatingShapes: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    },
    
    shape: {
      position: 'absolute',
      borderRadius: '50%',
      opacity: 0.1,
    },
    
    mainContent: {
      position: 'relative',
      zIndex: 2,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      boxSizing: 'border-box',
    },
    
    iconContainer: {
      position: 'relative',
      marginBottom: '60px',
    },
    
    mainIcon: {
      width: '200px',
      height: '200px',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
    },
    
    envelope: {
      width: '100px',
      height: '70px',
      background: 'white',
      borderRadius: '8px',
      position: 'relative',
      transform: 'rotate(-5deg)',
    },
    
    textContent: {
      textAlign: 'center',
      color: 'white',
      maxWidth: '500px',
    },
    
    title: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '20px',
      background: 'linear-gradient(45deg, #fff, #f8f8f8)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    
    subtitle: {
      fontSize: '20px',
      marginBottom: '40px',
      opacity: 0.9,
      lineHeight: 1.6,
    },
    
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '30px',
      marginTop: '40px',
      width: '100%',
      maxWidth: '500px',
    },
    
    featureItem: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '15px',
      padding: '25px',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.2)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    
    featureIcon: {
      width: '40px',
      height: '40px',
      background: 'linear-gradient(135deg, #ff6b6b, #ffa500)',
      borderRadius: '50%',
      margin: '0 auto 15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '18px',
    },
    
    featureText: {
      fontSize: '14px',
      fontWeight: '600',
      color: 'white',
    },
    
    glowEffect: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(102,126,234,0.3) 0%, transparent 70%)',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const keyframes = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
      50% { transform: scale(1.05); box-shadow: 0 25px 50px rgba(0,0,0,0.3); }
    }
    
    @keyframes tilt {
      0%, 100% { transform: rotate(-5deg); }
      50% { transform: rotate(5deg); }
    }
    
    @keyframes envelope-flap {
      0%, 100% { border-top-color: #ff6b6b; }
      50% { border-top-color: #ff8787; }
    }
    
    @keyframes text-glow {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }
    
    @keyframes feature-float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-5px); }
    }
    
    @keyframes particle-float {
      0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
    }
    
    @keyframes glow-pulse {
      0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
      50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.1; }
    }
    
    .contact-animation-container {
      animation: pulse 3s ease-in-out infinite;
    }
    
    .contact-envelope {
      animation: tilt 4s ease-in-out infinite;
    }
    
    .contact-envelope::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-top: 35px solid #ff6b6b;
      animation: envelope-flap 2s ease-in-out infinite;
    }
    
    .contact-envelope::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 10px;
      right: 10px;
      height: 3px;
      background: #ddd;
      border-radius: 2px;
    }
    
    .contact-title {
      animation: text-glow 3s ease-in-out infinite;
    }
    
    .contact-feature {
      animation: feature-float 3s ease-in-out infinite;
    }
    
    .contact-feature:nth-child(1) { animation-delay: 0s; }
    .contact-feature:nth-child(2) { animation-delay: 0.5s; }
    .contact-feature:nth-child(3) { animation-delay: 1s; }
    .contact-feature:nth-child(4) { animation-delay: 1.5s; }
    
    .contact-shape {
      animation: float 6s ease-in-out infinite;
    }
    
    .contact-shape-1 {
      animation-delay: 0s;
    }
    
    .contact-shape-2 {
      animation-delay: 2s;
    }
    
    .contact-shape-3 {
      animation-delay: 4s;
    }
    
    .contact-shape-4 {
      animation-delay: 1s;
    }
    
    .contact-glow {
      animation: glow-pulse 4s ease-in-out infinite;
    }
    
    .contact-particle {
      animation: particle-float 8s linear infinite;
    }
    
    .contact-particle:nth-child(1) { left: 10%; animation-delay: 0s; animation-duration: 8s; }
    .contact-particle:nth-child(2) { left: 20%; animation-delay: 1s; animation-duration: 9s; }
    .contact-particle:nth-child(3) { left: 30%; animation-delay: 2s; animation-duration: 7s; }
    .contact-particle:nth-child(4) { left: 40%; animation-delay: 3s; animation-duration: 8s; }
    .contact-particle:nth-child(5) { left: 50%; animation-delay: 4s; animation-duration: 9s; }
    .contact-particle:nth-child(6) { left: 60%; animation-delay: 5s; animation-duration: 7s; }
    .contact-particle:nth-child(7) { left: 70%; animation-delay: 6s; animation-duration: 8s; }
    .contact-particle:nth-child(8) { left: 80%; animation-delay: 7s; animation-duration: 9s; }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        <div style={styles.glowEffect} className="contact-glow"></div>
        
        <div style={styles.floatingShapes}>
          <div 
            className="contact-shape contact-shape-1" 
            style={{
              ...styles.shape,
              width: '80px',
              height: '80px',
              background: '#fff',
              top: '10%',
              left: '20%',
            }}
          ></div>
          <div 
            className="contact-shape contact-shape-2" 
            style={{
              ...styles.shape,
              width: '120px',
              height: '120px',
              background: '#ff6b6b',
              top: '60%',
              right: '15%',
            }}
          ></div>
          <div 
            className="contact-shape contact-shape-3" 
            style={{
              ...styles.shape,
              width: '60px',
              height: '60px',
              background: '#4ecdc4',
              bottom: '20%',
              left: '10%',
            }}
          ></div>
          <div 
            className="contact-shape contact-shape-4" 
            style={{
              ...styles.shape,
              width: '100px',
              height: '100px',
              background: '#ffe66d',
              top: '30%',
              right: '25%',
            }}
          ></div>
        </div>

        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          pointerEvents: 'none'
        }}>
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="contact-particle"
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                background: 'rgba(255,255,255,0.6)',
                borderRadius: '50%',
              }}
            ></div>
          ))}
        </div>

        <div style={styles.mainContent}>
          <div style={styles.iconContainer}>
            <div style={styles.mainIcon} className="contact-animation-container">
              <div style={styles.envelope} className="contact-envelope"></div>
            </div>
          </div>

          <div style={styles.textContent}>
            <h1 style={styles.title} className="contact-title">Get in Touch</h1>
            <p style={styles.subtitle}>Ready to start a conversation? We'd love to hear from you and discuss how we can help bring your ideas to life.</p>
          </div>

          <div style={styles.featureGrid}>
            <div 
              style={styles.featureItem} 
              className="contact-feature"
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px) scale(1.05)';
                e.target.style.background = 'rgba(255,255,255,0.2)';
                e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0px) scale(1)';
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <div style={styles.featureIcon}>📧</div>
              <div style={styles.featureText}>Quick Response</div>
            </div>
            <div 
              style={styles.featureItem} 
              className="contact-feature"
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px) scale(1.05)';
                e.target.style.background = 'rgba(255,255,255,0.2)';
                e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0px) scale(1)';
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <div style={styles.featureIcon}>🚀</div>
              <div style={styles.featureText}>Fast Delivery</div>
            </div>
            <div 
              style={styles.featureItem} 
              className="contact-feature"
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px) scale(1.05)';
                e.target.style.background = 'rgba(255,255,255,0.2)';
                e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0px) scale(1)';
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <div style={styles.featureIcon}>💡</div>
              <div style={styles.featureText}>Creative Solutions</div>
            </div>
            <div 
              style={styles.featureItem} 
              className="contact-feature"
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px) scale(1.05)';
                e.target.style.background = 'rgba(255,255,255,0.2)';
                e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0px) scale(1)';
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <div style={styles.featureIcon}>🤝</div>
              <div style={styles.featureText}>Dedicated Support</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAnimation;