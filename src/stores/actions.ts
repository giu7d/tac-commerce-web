import { OrderItem } from '@/models/OrderItem'

export const Actions = {
  SET_SELECTED_CATEGORY: 'SET_SELECTED_CATEGORY',
  SET_ORDER_PRODUCTS: 'SET_ORDER_PRODUCTS',
  RESET: 'RESET'
}

export const setOrderProducts = (payload: OrderItem[]) => ({
  type: Actions.SET_ORDER_PRODUCTS,
  payload
})

export const setSelectedCategory = (payload: string) => ({
  type: Actions.SET_SELECTED_CATEGORY,
  payload
})

export const reset = () => ({
  type: Actions.RESET
})
