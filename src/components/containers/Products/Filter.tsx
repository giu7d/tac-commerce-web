import React, { useState } from 'react'

import { FilterButton } from '@/components/fragments/buttons/Filter'

const FILTERS = [
  {
    key: 'all',
    name: 'Todos'
  },
  {
    key: 'smart-phones',
    name: 'Smart Phones'
  },
  {
    key: 'smart-home',
    name: 'Smart Home'
  },
  {
    key: 'headphones',
    name: 'Headphones'
  }
]

export const FilterProducts = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')

  return (
    <nav className="flex flex-row gap-2 my-12 w-full overflow-auto mt-10">
      {FILTERS.map(filter => (
        <FilterButton
          key={filter.key}
          selected={filter.key === selectedFilter}
          onClick={() => setSelectedFilter(filter.key)}
        >
          {filter.name}
        </FilterButton>
      ))}
    </nav>
  )
}
