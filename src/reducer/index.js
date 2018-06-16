import * as actions from '../actions'

export const initialState = {
  count: 0,
}

export default function reducer(state, payload) {
  if (typeof state === 'undefined') return initialState

  switch (payload.type) {
    case actions.countUp.type:
      return { count: state.count + 1 }
    case actions.countDown.type:
      return { count: state.count - 1 }
    default:
      return state
  }
}
