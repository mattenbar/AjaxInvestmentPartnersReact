import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {

  return(
    <Navbar >
    <Navbar.Brand href="#home">
      <img
        src="images/logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="AJAX LOGO"
      />
    </Navbar.Brand>
  </Navbar>
  )

}

export default NavBar