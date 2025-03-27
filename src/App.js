import React, { useState, useEffect } from 'react';
import './App.css';
import foto from './photos/yo.jpeg';

function App() {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* Navbar con el texto "System Engineering Student" */}
      <nav className="nav">
        <div className="nav-text">System Engineering Student</div>
      </nav>

      <header className="App-header">
        <div className="title">Hello, I am</div>
        {showName && <div className="name">Santiago Canadell</div>}
        <div className="profile-pic-container">
          <img src={foto} alt="Santiago Canadell" className="profile-pic" />
        </div>
      </header>
    </div>
  );
}

export default App;
