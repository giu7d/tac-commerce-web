import React, { createContext, useReducer } from 'react'
import { IApplicationStore, IContext } from './types'
import { reducer } from './reducer'

export const initialState: IApplicationStore = {
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
