import type { Action } from 'redux'

export type State = string
export type SetErrorMessageAction = Action<'@errorMessage/setErrorMessabe'> & {
  payload: State
}
export type Actions = SetErrorMessageAction
