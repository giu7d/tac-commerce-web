import React from 'react'
import Image from 'next/image'
import { ItemCard } from '@/components/fragments/cards/Item'
import { useOrder } from '@/hooks/useOrder'
import { OrderItem } from '@/models/OrderItem'
import { NumberButton } from '@/components/fragments/buttons/Number'

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
      <div className="flex flex-col gap-6 m-8 p-6 rounded-3xl items-center bg-blue-50">
        <Image src={{ src: '/images/cart.png', width: 150, height: 150 }} />
        <span className="text-gray-800 font-semibold text-center">
          <b>Insira pelo menos um produto</b> no carrinho para continuar.
        </span>
      </div>
    )

  return (
    <div className="flex flex-col gap-6 p-6">
      {order.order.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          onDelete={() => handleDelete(item.id)}
        >
          <NumberButton
            onMinus={() => updateQuantity(item, -1)}
            onPlus={() => updateQuantity(item, 1)}
          >
            {item.quantity}
          </NumberButton>
        </ItemCard>
      ))}
    </div>
  )
}
