import React from 'react'
import blueMountainsImg from '../images/BlueMountainBottomImg.jpg'

class BlueMountains extends React.Component{

  render(){
    return(
      <div className="capabilities-img-container">
        <img width="100%" src={blueMountainsImg} alt="BlueMountainImg"/>
        <div className="centered">WE SEED GREAT IDEAS FROM PROVEN LEADERS. <br/><br/> WE ACCELERATE YOUR GROWTH TRAJECTORY. <br/><br/> WE HELP DRIVE YOUR FUTURE.</div>
    </div>
    )
  }
}

export default BlueMountains