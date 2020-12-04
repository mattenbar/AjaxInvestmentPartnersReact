import React from 'react'

class Footer extends React.Component{

  render(){
    return(
      <div className="footer" id="footer">
        <br />
        <h3>CONTACT US</h3>
        <p>
          <a className="footer-a" href={"mailto:adam@ajax-partners.com"} rel="noreferrer" target="_blank">adam@ajax-partners.com</a>
          <br />
          917.685.2273
          <br />
          4400 Biscayne Blvd.11th floor
          <br />
          Miami, FL 33137
        </p>
      </div> 
    )
  }

}
export default Footer