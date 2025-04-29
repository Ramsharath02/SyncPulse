import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import About from './components/About';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'SyncPulse - The Future of Work & Productivity Tools';
    
    // Get the element with the data-default attribute
    const titleElement = document.querySelector('[data-default]');
    if (titleElement) {
      titleElement.textContent = 'SyncPulse - The Future of Work & Productivity Tools';
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <About />
    </div>
  );
}

export default App;