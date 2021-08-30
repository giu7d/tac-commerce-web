import { useContext } from 'react'
import useSWR from 'swr'

import { getProducts } from '@/services'
import { ApplicationContext } from '@/stores/ApplicationStore'
import { Product } from '@/models/Product'

export const useProducts = () => {
  const { state } = useContext(ApplicationContext)
  const { data, error } = useSWR<Product[]>(
    () => `/products?category=${state.selectedCategory}`,
    getProducts
  )

  // useEffect(() => {
  //   mutate(`/products?${state.selectedCategory}`)
  // }, [state.selectedCategory])

  return {
    products: data || [],
    isLoading: !data && !error,
    isError: error
  }
}
