import type * as T from './types'

export const setCounter = (payload: T.State): T.SetCounterAction => ({
  type: '@counter/setCounter',
  payload
})
export const increaseConter = () => setCounter(1)
export const decreaseConter = () => setCounter(-1)
