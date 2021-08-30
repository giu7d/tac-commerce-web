import React from 'react'

import { FilterButton } from '@/components/fragments/buttons/Filter'
import { useCategories } from '@/hooks/useCategories'

export const FilterProducts = () => {
  const { categories, category, setCategory, isError, isLoading } =
    useCategories()

  if (isError || isLoading) {
    return <div>loading</div>
  }

  return (
    <nav className="flex flex-row gap-2 my-12 w-full overflow-auto mt-10">
      <FilterButton selected={category === ''} onClick={() => setCategory('')}>
        All
      </FilterButton>
      {categories.map(filter => (
        <FilterButton
          key={filter}
          selected={filter === category}
          onClick={() => setCategory(filter)}
        >
          {filter}
        </FilterButton>
      ))}
    </nav>
  )
}
