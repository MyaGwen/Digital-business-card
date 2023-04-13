import React, { useState } from 'react';
import Toggle from './components/Toggle';
import Info from './components/Info';
import About from './components/About';
import Interest from './components/Interest';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMode = () => {
    setIsLightMode(prevMode => !prevMode);
  };

  return (
    <div className={`container ${isLightMode ? 'light' : ''}`}>
      <Toggle isLightMode={isLightMode} onClick={toggleMode} />
      <div className="wrapper">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}
