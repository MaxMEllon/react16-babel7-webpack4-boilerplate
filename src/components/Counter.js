import React from "react";

type Props = {
  counts: number,
  handleCountUp: () => void,
  handleCountDown: () => void,
}

export default function Counter({ counts, handleCountUp, handleCountDown }: Props) {
  return (
    <React.Fragment>
      <div>
        {counts}
      </div>
      <button type="button" onClick={handleCountUp}>
        countUp
      </button>
      <button type="button" onClick={handleCountDown}>
        countDown
      </button>
    </React.Fragment>
  );
}
