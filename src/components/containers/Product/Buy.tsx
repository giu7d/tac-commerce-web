import React, { useState } from 'react'
import { v4 } from 'uuid'

import { useRouter } from 'next/router'
import { BuyButton } from '@/components/fragments/buttons/Buy'
import { NumberButton } from '@/components/fragments/buttons/Number'
import { useOrder } from '@/hooks/useOrder'
import { useProduct } from '@/hooks/useProduct'

export const BuyProduct = () => {
  const order = useOrder()
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const { product, isLoading, isError } = useProduct(router.query.id as string)

  const handleQuantity = (value: number) => {
    if (quantity + value < 1) return
    return setQuantity(state => state + value)
  }

  const handleAddToCart = () => {
    if (!product) return

    order.add({
      ...product,
      id: v4(),
      product,
      quantity
    })

    router.push('/')
  }

  const calculatePrice = () => {
    const unitPrice = Number.parseInt(product?.price || '0', 10)
    const totalPrice = unitPrice * quantity

    return totalPrice.toString()
  }

  if (isError || isLoading) {
    return <div>loading</div>
  }

  return (
    <div className="product_buy">
      <NumberButton
        onMinus={() => handleQuantity(-1)}
        onPlus={() => handleQuantity(1)}
      >
        {quantity}
      </NumberButton>
      <BuyButton price={calculatePrice()} onClick={handleAddToCart} />
    </div>
  )
}
