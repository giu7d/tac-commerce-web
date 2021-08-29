import React, { useEffect } from 'react'
import { ItemCard } from '@/components/fragments/cards/Item'
import { useOrder } from '@/hooks/useOrder'

export const ListItemsOrder = () => {
  const order = useOrder()

  useEffect(() => {
    console.log(order.order)
  }, [order.order])

  return (
    <div className="flex flex-col gap-6 p-6">
      <ItemCard />
    </div>
  )
}
