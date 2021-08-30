import React from 'react'
import { CheckoutCard } from '@/components/fragments/cards/Checkout'
import { useOrder } from '@/hooks/useOrder'

export const Checkout = () => {
  const order = useOrder()

  const calculateTotalOrder = () => {
    const value = order.order.reduce(
      (acc, cur) => cur.quantity * Number.parseInt(cur.price, 10) + acc,
      0
    )

    return value.toString()
  }

  return <CheckoutCard total={calculateTotalOrder()} />
}
