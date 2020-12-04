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
      <Container>
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
          <Navbar.Text>
            <a href="#about">ABOUT US     </a>
            <a href="#capabilities">CAPABILITIES    </a>
            <a href="#leadership">LEADERSHIP    </a>
            <a href="#footer">CONTACT US    </a>
            <a href="#capabilities"></a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      </Row>
      <Row>
        <h3 >
          ALIGNING FINANCIAL AND INTELLECTUAL CAPITAL, STRATEGIC 
          <br/><br/>
          RELATIONSHIPS AND TRANSFORMATIONAL GROWTH STRATEGIES
          <br /> <br/>
          FOR FINANCIAL SERVICES BUSINESSES
        </h3> 
      </Row>
      </Container>
      
    </div>
    )
  }
}
export default Header