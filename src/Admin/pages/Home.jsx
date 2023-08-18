import React from 'react';

export default function Home() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ position: 'relative', width: '60%' }}>
        <video autoPlay muted loop style={{ width: '100%', height: 'auto' }}>
          <source src="/src/Orange Black Luxury Smartphone Video (3).mp4" type="video/mp4" />
        </video>
      </div>
      <div className="vertical-text" style={{ position: 'absolute', right: '100px' }}>
        <p>Welcome to Admin Page</p>
      </div>
    </div>
  );
}
