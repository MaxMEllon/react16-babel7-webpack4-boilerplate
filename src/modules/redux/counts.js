import { createAction, handleActions } from 'redux-actions'

const COUNT_UP = 'count/up'
export const countUp = createAction(COUNT_UP)

const COUNT_DOWN = 'count/down'
export const countDown = createAction(COUNT_DOWN)

export const INITIAL_STATE = 0

export default (handleActions(
  {
    [COUNT_UP]: (state) => state + 1,
    [COUNT_DOWN]: (state) => state - 1,
  },
  INITIAL_STATE,
))
