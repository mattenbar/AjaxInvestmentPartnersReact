import React, { Component } from 'react'
import BlueMountainBottomImg from '../images/BlueMountainBottomImg.jpg'

class Capabilities extends Component {

  render(){

    let capabilitiesList = (
      <ul>
        <li>Venture capital investments for early-stage wealth management stat-ups</li>
        <li>Business incubator solutions for fin-tech companies </li>
        <li>Growth and customer acquisition strategy </li>
        <li>Strategic planning and execution support </li>
        <li>M&A advisory and private capital raising transactions </li>
        <li>Board advisory services</li>
      </ul>
    )

    return(
      <div class="capabilities" id="capabilities">
        <br/>
        <h3>CAPABILITIES</h3>
        <p>
          We create significant and long-term value for wealth management businesses by bringing
          <br/>
          together the right capital structure with the right strategic plan.
        </p>
        <span class="blackLine"
          style={{"border-bottom": "2px solid black"}}></span>
        <p>
          Through our seasoned internal team and in collaboration with long standing strategic partners, 
          <br/>
          our capabilities encompass:
          {capabilitiesList}
          <br/>
        </p>
        <img width= "100%" src={BlueMountainBottomImg} alt="BlueMountainImg"/>
      </div>
    )
  }

}

export default Capabilities