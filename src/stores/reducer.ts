/* eslint-disable import/no-cycle */
import { initialState } from './ApplicationStore'
import { Actions } from './actions'
import { IAction, IApplicationStore } from './stores'

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

    case Actions.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      }

    case Actions.SET_ACCOUNT:
      return {
        ...state,
        account: action.payload
      }

    case Actions.RESET:
      return initialState

    default:
      return state
  }
}
