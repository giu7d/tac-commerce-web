import { Actions } from './actions'
import { IAction, IApplicationStore } from './types'

export const reducer = (
  state: IApplicationStore,
  action: IAction
): IApplicationStore => {
  switch (action.type) {
    case Actions.SET_ORDER_PRODUCTS:
      return {
        ...state,
        orderProducts: action.payload
      }

    default:
      return state
  }
}
