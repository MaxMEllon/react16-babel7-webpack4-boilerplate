import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'

import { countUp, countDown } from '../actions'
import Counter from '../components/Counter'

class App extends React.Component {
  handleCountUp() {
    this.props.countUp()
  }

  handleCountDown() {
    this.props.countDown()
  }

  render() {
    return (
      <Counter
        count={this.props.count}
        handleCountUp={this.handleCountUp.bind(this)}
        handleCountDown={this.handleCountDown.bind(this)}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count
})

const mapDispatchToActions = {
  countUp,
  countDown,
}

export default App |> connect(mapStateToProps, mapDispatchToActions) |> hot(module)
