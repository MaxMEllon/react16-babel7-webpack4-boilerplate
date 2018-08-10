import React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";

import { countUp, countDown } from "../modules/redux/counts";
import Counter from "../components/Counter";

function App({ counts, countUp, countDown }) {
  return (
    <Counter
      counts={counts}
      handleCountUp={countUp}
      handleCountDown={countDown}
    />
  );
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
