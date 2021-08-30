import useSWR from 'swr'
import { useContext } from 'react'
import { getCategories } from '@/services'
import { ApplicationContext } from '@/stores/ApplicationStore'
import { setSelectedCategory } from '@/stores/actions'

export const useCategories = () => {
  const { state, dispatch } = useContext(ApplicationContext)
  const { data, error } = useSWR<string[]>(
    '/products/categories',
    getCategories
  )

  const setCategory = (value: string) => dispatch(setSelectedCategory(value))

  return {
    categories: data || [],
    isLoading: !data && !error,
    isError: error,
    category: state.selectedCategory,
    setCategory
  }
}
