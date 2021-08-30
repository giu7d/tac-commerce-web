import { Dispatch } from 'react'
import { OrderItem } from '@/models/OrderItem'
import { Account } from '@/models/Account'

export interface IAction {
  type: string
  payload?: any
}

export interface IApplicationStore {
  orderProducts: OrderItem[]
  selectedCategory: string
  account?: Account
}

export interface IContext<T> {
  state: T
  dispatch: Dispatch<IAction>
}
