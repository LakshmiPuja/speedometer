// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  OnAcceleration = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevCount => ({speed: prevCount.speed + 10}))
    }
  }

  OnBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevCount => ({speed: prevCount.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="speed">Speed is {speed}mph</h1>
        <p className="speed-indicator">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div>
          <button
            className="button btn-1"
            type="button"
            onClick={this.OnAcceleration}
          >
            Accelerate
          </button>
          <button className="button btn-2" type="button" onClick={this.OnBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
