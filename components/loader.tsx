import React from "react";

// components/Loader.js
export default function Loader() {
    return (
      <div style={styles.container}>
        <div style={styles.spinner}></div>
      </div>
    );
  }
  
  const styles:any = {
    container: {
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,255,255,0.8)',
      zIndex: 9999,
    },
    spinner: {
      width: '60px',
      height: '60px',
      border: '6px solid #ddd',
      borderTop: '6px solid #0070f3',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },
  };
  
  // Add this global CSS for the spinner animation
  