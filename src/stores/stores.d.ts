import { Dispatch } from 'react'
import { OrderItem } from '@/models/OrderItem'

export interface IAction {
  type: string
  payload: any
}

export interface IApplicationStore {
  orderProducts: OrderItem[]
  selectedCategory: string
  account: any
}

export interface IContext<T> {
  state: T
  dispatch: Dispatch<IAction>
}
