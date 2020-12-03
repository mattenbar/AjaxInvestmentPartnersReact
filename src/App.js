import React from 'react';
import './App.css';
import NavBar from './components/navbar'
import AboutUs from './components/aboutUs.js'
import Capabilities from './components/capabilities'
import Leadership from './components/leadership'
import Footer from './components/footer'




function App() {
  return (
    <div className="App">
      <NavBar className="navbar"/>
      <AboutUs />
      <Capabilities className="capabilities" />
      <Leadership className="leadership" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
