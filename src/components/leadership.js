import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Adam from '../images/AdamMalamedPhoto.jpg'

class Leadership extends React.Component{

  state = {
    bio: "short"
  }

  handleOnClick = (e) => {
    e.preventDefault()
    if (this.state.bio === "short"){
      this.setState({
        bio: "full"
      })
    }else{
      this.setState({
        bio: "short"
      })
    }

  }

  

  render(){
    let fullBio = (
      <div >
        <h3>LEADERSHIP</h3>
          <Row>
            <Col>
              <img HSPACE={50} align="left" width="15%" src={Adam} alt="Adam Malamed Head-shot"/>
              <br/>
            </Col>
            <Col >
              <p>
                <b>ADAM MALAMED</b>
                <br/>
                President and CEO, AjaxInvestmentPartners
                <br /><br />
                Adam Malamed is the President and CEO of Ajax Investment Partners, a private growth
                capital and M&A advisory firm for the financial services space, with a particular emphasis 
                on wealth management and asset management.
              </p>
              <p>
                Mr. Malamed has over 25 years of experience in building, leading and generating successful liquidity events for both publicly traded and privately held financial services firms.  A seasoned C-suite officer, board director, industry thought leader and strategic advisor, Mr. Malamed aligns financial and intellectual capital, strategic relationships and transformative growth strategies with the portfolio companies and clients of Ajax Investment Partners.
                Previously, Mr. Malamed served as Executive Vice President, Chief Operating Officer and Board Director of NYSE-traded Ladenburg Thalmann Financial Services Inc.  In this role, he led strategic growth and operational initiatives for one of the nation’s largest wealth management companies, with five independent advisory and brokerage firms.  He played an integral role in structuring and executing the successful sale of Ladenburg Thalmann to Advisor Group, the nation’s largest network of independent wealth management firms, in a transaction that closed in February 2020.  At the time of the transaction, Ladenburg Thalmann had approximately $180 billion in client assets, with nearly 4,500 financial advisors across the country.
                <br/><br/>
                Earlier in his career, Mr. Malamed was the Co-Founder and President of BroadWall Capital LLC, an independent provider of equity research for the energy industry, as well as institutional sales, trading and private client services.  Mr. Malamed spearheaded the growth and successful sale of BroadWall Capital to Ladenburg Thalmann in 2006.
                <br/><br/>
                In addition to his role at Ajax Investment Partners, Mr. Malamed also serves on the Board of Directors for Invest in Others, a nonprofit dedicated to empowering financial advisors to give back to their communities.  He is also a member of the Board of Advisors of Haven Tower Group, a leading strategic public relations and communications agency focused on the wealth management space.
                <br/><br/>
                Mr. Malamed has a B.A. in Business Management from the University of Massachusetts Amherst and completed the Harvard Business School General Management Program.  He holds the series 4, 7, 9, 10, 24, 63, 79 and 87 securities licenses.
              </p>
              </Col>
                  </Row>
                  <Row>
                  <p onClick={this.handleOnClick} className="Learn" style={{textAlign: "right"}}>Minimize</p>
                  </Row>
    
              </div>
    )

    let shortBio = (
      <div>
        <div >
        <h3>LEADERSHIP</h3>
        
          <Row>
            <Col>
              <img HSPACE={50} align="left" width="15%" src={Adam} alt="Adam Malamed Head-shot"/>
              <br/>
            </Col>
            <Col >
              <p>
                <b>ADAM MALAMED</b>
                <br/>
                President and CEO, AjaxInvestmentPartners
                <br /><br />
                Adam Malamed is the President and CEO of Ajax Investment Partners, a private growth
                capital and M&A advisory firm for the financial services space, with a particular emphasis 
                on wealth management and asset management.
              </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p onClick={this.handleOnClick} className="Learn" style={{textAlign: "right"}}>Learn More About Adam</p>
              </Col>
            </Row>
        </div>
      </div>
    )
    
    return(
      <div className="leadership">
        {console.log(this.state.bio === "short")}
        {this.state.bio === "short" ? shortBio : fullBio}
      </div>    
    )
  }

}

export default Leadership