import React from 'react'

import { FiX } from 'react-icons/fi'
import { ItemCard } from '@/components/fragments/cards/Item'
import { useOrder } from '@/hooks/useOrder'
import { OrderItem } from '@/models/OrderItem'
import { NumberButton } from '@/components/fragments/buttons/Number'
import { AlertCard } from '@/components/fragments/cards/Alert'

export const ListItemsOrder = () => {
  const order = useOrder()

  const handleDelete = (id: string) => order.remove(id)

  const updateQuantity = (item: OrderItem, quantity: number) => {
    const newQuantity = item.quantity + quantity

    if (newQuantity < 1) return

    order.edit(item.id, {
      quantity: newQuantity
    })
  }

  if (!order.order.length)
    return (
      <AlertCard src="/images/cart.png">
        <b>Insira pelo menos um produto</b> no carrinho para continuar.
      </AlertCard>
    )

  return (
    <div className="flex flex-col gap-6 w-full">
      {order.order.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          renderActions={
            <>
              <div
                className="btn btn_icon text-red-500"
                onClick={() => handleDelete(item.id)}
              >
                <FiX />
              </div>
              <NumberButton
                onMinus={() => updateQuantity(item, -1)}
                onPlus={() => updateQuantity(item, 1)}
              >
                {item.quantity}
              </NumberButton>
            </>
          }
        />
      ))}
    </div>
  )
}
