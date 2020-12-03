import React from 'react';
import './App.css';
import AboutUs from './components/aboutUs.js'
import Capabilities from './components/capabilities'
import BlueMountainBottomImg from './images/BlueMountainBottomImg.jpg'


function App() {
  return (
    <div className="App">
      <AboutUs />
      <Capabilities />
      <img width= "100%" src={BlueMountainBottomImg} alt="BlueMountainImg"/>
    </div>
  );
}

export default App;
