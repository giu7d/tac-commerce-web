import React from 'react'
import { useRouter } from 'next/router'

import { v4 } from 'uuid'
import { ProductCard } from '@/components/fragments/cards/Product'
import { useProducts } from '@/hooks/useProducts'
import { Product } from '@/models/Product'
import { useOrder } from '@/hooks/useOrder'

export const ListProducts = () => {
  const router = useRouter()
  const order = useOrder()
  const { products, isError, isLoading } = useProducts()

  if (isError || isLoading) {
    return <div>loading</div>
  }

  const handleNavigation = (id: string) => {
    router.push(`/products/${id}`)
  }

  const handleAddToCart = (product: Product) => {
    if (!product) return

    order.add({
      ...product,
      product,
      id: v4(),
      quantity: 1
    })
  }

  return (
    <div className="flex flex-col gap-6 mx-auto  md:flex-row md:flex-wrap md:justify-center md:gap-12">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => handleNavigation(product.id)}
          onSave={() => handleAddToCart(product)}
        />
      ))}
    </div>
  )
}
