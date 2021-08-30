import useSWR from 'swr'

import { getProduct } from '@/services'
import { Product } from '@/models/Product'

export const useProduct = (id: string) => {
  const { data, error } = useSWR<Product>(
    () => (!id ? null : `/products/${id}`),
    getProduct
  )

  return {
    product: data,
    isLoading: !data && !error,
    isError: error
  }
}
