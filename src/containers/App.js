// @flow

import React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";

import { countUp, countDown } from "../modules/redux/counts";
import Counter from "../components/Counter";

type Props = {
  counts: number,
  handleCountUp: () => void,
  handleCountDown: () => void,
}

function App({ counts, handleCountUp, handleCountDown }: Props) {
  return (
    <Counter
      counts={counts}
      handleCountUp={handleCountUp}
      handleCountDown={handleCountDown}
    />
  );
}

const mapStateToProps = (state) => ({
  counts: state.counts,
});

const mapDispatchToActions = {
  handleCountUp: countUp,
  handleCountDown: countDown,
};

export default App
  |> connect(
    mapStateToProps,
    mapDispatchToActions
  )
  |> hot(module);
