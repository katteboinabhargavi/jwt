// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {word: 'Subscribed'}
  renderAuthButton = () => {
    const {word} = this.state
    button1 = () => {
      return (
        <button className="button" type="button">
          Subscribed
        </button>
      )
    }

    if (word === 'Subscribed') {
      return (
        <button className="button" type="button" onClick={this.button1}>
          Subscribe
        </button>
      )
    } else {
      return (
        <button className="button" type="button">
          Subscribed
        </button>
      )
    }
  }

  render() {
    const {word} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you!Happy Learning</p>
        {this.renderAuthButton()}
      </div>
    )
  }
}
export default Welcome
