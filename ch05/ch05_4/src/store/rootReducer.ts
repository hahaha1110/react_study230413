import { combineReducers } from 'redux'
import * as L from './listEntities'
import * as LO from './listidOrders'
import * as LC from './listidCardidOrders'
import * as C from './cardEntities'

export const rootReducer = combineReducers({
  listEntities: L.reducer,
  listOrders: LO.reducer,
  listidCardidOrders: LC.reducer,
  cardEntnties: C.reducer
})
