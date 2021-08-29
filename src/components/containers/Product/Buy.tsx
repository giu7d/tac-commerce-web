import React, { useState } from 'react'

import { BuyButton } from '@/components/fragments/buttons/Buy'
import { NumberButton } from '@/components/fragments/buttons/Number'

export const BuyProduct = () => {
  const [quantity, setQuantity] = useState(1)

  const handleQuantity = (value: number) => {
    if (quantity + value < 1) return
    return setQuantity(state => state + value)
  }

  const handleAddToCart = () => {
    console.log('Add to cart')
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
