import React from 'react'

export default function Counter(props) {
  const { count, handleCountUp, handleCountDown } = props
  return (
    <React.Fragment>
      <div>{count}</div>
      <button onClick={handleCountUp}>countUp</button>
      <button onClick={handleCountDown}>countDown</button>
    </React.Fragment>
  )
}
