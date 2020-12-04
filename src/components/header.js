import React from 'react'
import Logo from '../images/logo.png'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'



class Header extends React.Component{

  render(){
    return(
      <div className="navbar">
      
      <Row>
      <Navbar className="nav">
        <Navbar.Brand href="#home"><img
            src={Logo}
            width="20%"
            className="d-inline-block align-top"
            alt="AJAX LOGO"
          /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{display: "flex"}}>
            <a href="#about">ABOUT&nbsp;US&nbsp;</a>
            <a href="#capabilities">&nbsp;CAPABILITIES&nbsp;</a>
            <a href="#leadership">&nbsp;LEADERSHIP&nbsp;</a>
            <a href="#footer"><button className="contact-button" href="#footer">CONTACT&nbsp;US</button></a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      </Row>
      <Row className="alignCenter" style={{textAlign: "center"}}> 
        <h3  >
          ALIGNING FINANCIAL AND INTELLECTUAL CAPITAL, STRATEGIC 
          <br/>
          RELATIONSHIPS AND TRANSFORMATIONAL GROWTH STRATEGIES
          <br />
          FOR FINANCIAL SERVICES BUSINESSES
        </h3> 
      </Row>
    </div>
    )
  }
}
export default Header