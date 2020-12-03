import React from 'react';
import './App.css';
import NavBar from './components/navbar'
import AboutUs from './components/aboutUs.js'
import Capabilities from './components/capabilities'




function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutUs />
      <Capabilities className="capabilities" />
      
    </div>
  );
}

export default App;
