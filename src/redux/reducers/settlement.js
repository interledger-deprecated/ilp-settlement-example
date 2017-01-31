import * as types from '../actionTypes'

export const initialState = {
  loading: false
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SETTLE:
      return {
        ...state,
        loading: true
      }
    case types.SETTLE_SUCCESS:
    case types.SETTLE_FAIL:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
