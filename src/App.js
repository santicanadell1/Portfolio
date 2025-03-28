import React from 'react';
import './App.css';
import foto from './photos/yo.jpeg';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="nav-text">System Engineering Student</div>
      </nav>

      <header className="App-header">
        <div className="profile-pic-container">
          <img src={foto} alt="Santiago Canadell" className="profile-pic" />
        </div>
        <div className="text-container">
          <div className="title">Hello, I am</div>
          <div className="name">Santiago Canadell</div>
        </div>
      </header>

      {/* Seccion AboutMe */}
      <AboutMe />

    </div>
  );
}

export default App;
