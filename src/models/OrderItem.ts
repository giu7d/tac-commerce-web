import { Product } from './Product'

export interface OrderItem {
  id: string
  product: Product
  name: string
  brand: string
  price: string
  quantity: number
}
