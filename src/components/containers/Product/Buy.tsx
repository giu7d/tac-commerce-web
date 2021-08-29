import React, { useEffect, useState } from 'react'

import { BuyButton } from '@/components/fragments/buttons/Buy'
import { NumberButton } from '@/components/fragments/buttons/Number'
import { useOrder } from '@/hooks/useOrder'

export const BuyProduct = () => {
  const [quantity, setQuantity] = useState(1)
  const order = useOrder()

  useEffect(() => {
    console.log(order.order)
  }, [order.order])

  const handleQuantity = (value: number) => {
    if (quantity + value < 1) return
    return setQuantity(state => state + value)
  }

  const handleAddToCart = () => {
    order.add({
      id: '123123123',
      productId: '123123123',
      brand: 'sony',
      name: 'apple',
      price: '123',
      quantity
    })
  }

  return (
    <div className="product_buy">
      <NumberButton
        onMinus={() => handleQuantity(-1)}
        onPlus={() => handleQuantity(1)}
      >
        {quantity}
      </NumberButton>
      <BuyButton price="1999.00" onClick={handleAddToCart} />
    </div>
  )
}
