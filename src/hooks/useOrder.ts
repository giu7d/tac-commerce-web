import { useContext, useEffect } from 'react'
import { ApplicationContext } from '@/stores/ApplicationStore'
import { OrderItem } from '@/models/OrderItem'
import { setOrderProducts } from '@/stores/actions'

export const useOrder = () => {
  const { state, dispatch } = useContext(ApplicationContext)

  useEffect(() => {
    _loadLocalStorage()
  }, [])

  const _loadLocalStorage = () => {
    const localItems = localStorage.getItem('order') || '[]'
    const items = JSON.parse(localItems)
    dispatch(setOrderProducts(items))
  }

  const _persistLocalStorage = (items: OrderItem[]) =>
    localStorage.setItem('order', JSON.stringify(items))

  const _clearLocalStorage = () => localStorage.removeItem('order')

  const add = (item: OrderItem) => {
    const match = state.orderProducts.find(
      el => el.product.id === item.product.id
    )

    if (match)
      return edit(match.id, { quantity: item.quantity + match.quantity })

    const products = [...state.orderProducts, item]

    _persistLocalStorage(products)
    return dispatch(setOrderProducts(products))
  }

  const remove = (id: string) => {
    const products = state.orderProducts.filter(item => item.id !== id)
    _persistLocalStorage(products)
    return dispatch(setOrderProducts(products))
  }

  const edit = (id: string, attributes: Partial<OrderItem>) => {
    const products = [...state.orderProducts]
    const index = products.findIndex(item => item.id === id)
    const product = products[index]

    if (!product) return

    Object.assign(product, attributes)

    products[index] = product

    _persistLocalStorage(products)
    return dispatch(setOrderProducts(products))
  }

  const checkout = () => {
    dispatch(setOrderProducts([]))
    _clearLocalStorage()
  }

  return {
    order: state.orderProducts,
    add,
    remove,
    edit,
    checkout
  }
}
