import React from 'react'

export default function Counter(props) {
  const { counts, handleCountUp, handleCountDown } = props
  return (
    <React.Fragment>
      <div>{counts}</div>
      <button onClick={handleCountUp}>countUp</button>
      <button onClick={handleCountDown}>countDown</button>
    </React.Fragment>
  )
}
