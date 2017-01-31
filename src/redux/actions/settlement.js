import * as types from '../actionTypes'

export const settle = data => ({
  types: [types.SETTLE, types.SETTLE_SUCCESS, types.SETTLE_FAIL],
  promise: (client) => client.post('/settle', { data })
})
