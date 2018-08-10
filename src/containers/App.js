import React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";

import { countUp, countDown } from "../modules/redux/counts";
import Counter from "../components/Counter";

class App extends React.Component {
  handleCountUp() {
    this.props.countUp();
  }

  handleCountDown() {
    this.props.countDown();
  }

  render() {
    return (
      <Counter
        counts={this.props.counts}
        handleCountUp={this.props.countUp}
        handleCountDown={this.props.countDown}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  counts: state.counts,
});

const mapDispatchToActions = {
  countUp,
  countDown,
};

export default App
  |> connect(
    mapStateToProps,
    mapDispatchToActions
  )
  |> hot(module);
