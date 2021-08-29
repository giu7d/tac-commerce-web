import { useContext } from 'react'
import { ApplicationContext } from '@/stores/ApplicationStore'
import { OrderItem } from '@/models/OrderItem'
import { setOrderProducts } from '@/stores/actions'

export const useOrder = () => {
  const { state, dispatch } = useContext(ApplicationContext)

  const add = (item: OrderItem) =>
    dispatch(setOrderProducts([...state.orderProducts, item]))

  const remove = (id: string) => {
    const products = state.orderProducts.filter(item => item.id === id)
    return dispatch(setOrderProducts(products))
  }

  const edit = (id: string, attributes: Partial<OrderItem>) => {
    const products = [...state.orderProducts]
    const index = products.findIndex(item => item.id === id)
    const product = products[index]

    if (!product) return

    Object.assign(product, attributes)

    products[index] = product

    return dispatch(setOrderProducts(products))
  }

  return {
    order: state.orderProducts,
    add,
    remove,
    edit
  }
}
