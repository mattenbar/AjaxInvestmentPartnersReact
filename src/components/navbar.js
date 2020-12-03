import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../AJAXLOGO.svg'


class NavBar extends React.Component{

  render(){
    return(
      <Navbar >
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="350"
          className="d-inline-block align-top"
          alt="AJAX LOGO"
        />
      </Navbar.Brand>
    </Navbar>
    )
  }
}
export default NavBar