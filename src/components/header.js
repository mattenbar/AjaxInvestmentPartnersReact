import React from 'react'
import Logo from '../images/logo.png'

import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'




class Header extends React.Component{

  render(){
    return(
      <div className="navbar">
      
      <Row>
      <Navbar className="nav">
        <Navbar.Brand href="#home"><img
            src={Logo}
            width="25%"
            className="d-inline-block align-top"
            alt="AJAX LOGO"
          /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{display: "flex"}}>
            <a href="#about">ABOUT&nbsp;US&nbsp;&nbsp;</a>
            <a href="#capabilities">&nbsp;CAPABILITIES&nbsp;&nbsp;</a>
            <a href="#leadership">&nbsp;LEADERSHIP&nbsp;&nbsp;</a>
            <a href="#footer"><button className="contact-button" href="#footer">CONTACT&nbsp;US</button></a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      </Row>
      <Row className="alignCenter" style={{textAlign: "center"}}> 
        <h3  >
          ALIGNING&nbsp;&nbsp;FINANCIAL&nbsp;&nbsp;AND&nbsp;&nbsp;INTELLECTUAL&nbsp;&nbsp;CAPITAL,&nbsp;&nbsp;STRATEGIC 
          <br/>
          RELATIONSHIPS&nbsp;&nbsp;AND&nbsp;&nbsp;TRANSFORMATIONAL&nbsp;&nbsp;GROWTH&nbsp;&nbsp;STRATEGIES
          <br />
          FOR&nbsp;&nbsp;FINANCIAL&nbsp;&nbsp;SERVICES&nbsp;&nbsp;BUSINESSES
        </h3> 
      </Row>
    </div>
    )
  }
}
export default Header