// @flow

import React, { Fragment } from "react";

type Props = {
  counts: number,
  handleCountUp: () => void,
  handleCountDown: () => void,
}

export default function Counter({ counts, handleCountUp, handleCountDown }: Props) {
  return (
    <Fragment>
      <div>
        {counts}
      </div>
      <button type="button" onClick={handleCountUp}>
        countUp
      </button>
      <button type="button" onClick={handleCountDown}>
        countDown
      </button>
    </Fragment>
  );
}
