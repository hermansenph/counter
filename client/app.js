import React from 'react'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {counterValue: 0}

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    const newValue = this.state.counterValue + 1
    this.setState({counterValue: newValue})
  }

  decrement() {
    const newValue = this.state.counterValue - 1
    this.setState({counterValue: newValue})
  }

  render() {
    return (
      <div>
        <h1 id="counter-value">
          {this.state.counterValue}
        </h1>
        <div id="counter-mutators">
          <button id="counter-decrement"
            onClick={this.decrement}
          >
            {'-'}
          </button>
          <button id="counter-increment"
            onClick={this.increment}
          >
            {'+'}
          </button>
        </div>
      </div>
    )
  }
}
