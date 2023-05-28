import * as T from './types'

const initialState: T.State = ''

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@errorMessage/setErrorMessabe':
      return action.payload
  }
  return state
}
