import React, {Component} from 'react'

class AboutUs extends Component{

  render(){
    return(
      <div className="about" id="about">
    <br/>
    <br/>
    <h3>ABOUT US</h3>
    <p>
      Ajax Investment Partners aligns <span className="blue">financial and intellectual capital, strategic relationships and transformational growth
      strategies</span> with financial services businesses that have a unique vision for creative disruption that drives platform,
      value, and scale.
    </p>
    <span className="blueLine"></span>
    <p>
      We are an <span>incubator</span> of early-stage companies, a <span>growth accelerator</span> for firms hitting their stride and a <span>strategic
      partner</span> for mature  enterprises seeking fresh investment  and new initiatives to  fuel  growth.
    </p>
    <span className="blueLine"></span>
    <p>
      From providing seed capital for new ventures, to facilitating growth equity investment transactions, 
      to identifying new avenues for profitable expansion, Ajax Investment Partners combines a passion for the <span>transformative
      power of financial services</span>, with a <span>commitment to driving value</span> for our portfolio companies, our strategic
      partners and our clients.
    </p>
  </div>
    )
  }
}

export default AboutUs;