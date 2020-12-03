import React from 'react'
import Logo from '../images/logo.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class NavBar extends React.Component{

  render(){
    return(
      <div className="navbar">
        <Row>
          <Col>
            <img
              src={Logo}
              width="25%"
              className="d-inline-block align-top"
              alt="AJAX LOGO"
            />
          </Col>

          <Col>

          </Col>
        </Row>
        <Row>
          <div style={{textAlign: "center"}}>
            <h3 style={{fontSize: "2vw"}} >ALIGNING FINANCIAL AND INTELLECTUAL CAPITAL, STRATEGIC 
            <br/><br/>
            RELATIONSHIPS AND TRANSFORMATIONAL GROWTH STRATEGIES
            <br /> <br/>
            FOR FINANCIAL SERVICES BUSINESSES</h3>
            <br/><br/><br/><br/><br/>
          </div>
        </Row>
      </div>
    )
  }
}
export default NavBar