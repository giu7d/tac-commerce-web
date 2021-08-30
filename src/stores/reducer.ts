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

    default:
      return state
  }
}
