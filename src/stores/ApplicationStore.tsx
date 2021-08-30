import React, { createContext, useReducer } from 'react'
import { IApplicationStore, IContext } from './stores'
import { reducer } from './reducer'

export const initialState: IApplicationStore = {
  selectedCategory: '',
  orderProducts: [],
  account: {}
}

export const ApplicationContext = createContext<IContext<IApplicationStore>>({
  state: initialState,
  dispatch: () => {}
})

export const ApplicationStore: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      {children}
    </ApplicationContext.Provider>
  )
}
