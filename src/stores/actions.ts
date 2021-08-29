import { OrderItem } from '@/models/OrderItem'

export const Actions = {
  SET_ORDER_PRODUCTS: 'SET_ORDER_PRODUCTS',
  RESET: 'RESET'
}

export const setOrderProducts = (limit: OrderItem[]) => ({
  type: Actions.SET_ORDER_PRODUCTS,
  payload: limit
})

export const reset = () => ({
  type: Actions.RESET
})
