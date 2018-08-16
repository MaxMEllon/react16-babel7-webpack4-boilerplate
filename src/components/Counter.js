import React from "react";

export default function Counter({ counts, handleCountUp, handleCountDown }) {
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
