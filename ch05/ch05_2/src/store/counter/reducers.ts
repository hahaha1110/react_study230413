import * as T from './types'

const initialState: T.State = 0

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  // console.log('counter.reducer.ts ::: action.type ::' + action.type)
  // console.log('counter.state :::' + state)
  switch (action.type) {
    case '@counter/setCounter':
      return state + action.payload
  }
  return state
}
