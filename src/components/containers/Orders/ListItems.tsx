import React from 'react'
import { ItemCard } from '@/components/fragments/cards/Item'
import { useOrder } from '@/hooks/useOrder'

export const ListItemsOrder = () => {
  const order = useOrder()

  return (
    <div className="flex flex-col gap-6 p-6">
      {order.order.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}
