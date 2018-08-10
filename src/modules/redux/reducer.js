import { combineReducers } from 'redux'
import counts, { INITIAL_STATE as COUNTS_STATE } from './counts'

export const INITIAL_STATE ={
  counts: COUNTS_STATE,
}

export default combineReducers({
  counts,
})
