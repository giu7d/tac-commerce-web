import React from 'react'
import { useRouter } from 'next/router'

import { ProductCard } from '@/components/fragments/cards/Product'
import { useProducts } from '@/hooks/useProducts'

export const ListProducts = () => {
  const router = useRouter()
  const { products, isError, isLoading } = useProducts()

  if (isError || isLoading) {
    return <div>loading</div>
  }

  const handleNavigation = (id: string) => {
    router.push(`/products/${id}`)
  }

  return (
    <div className="flex flex-col gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => handleNavigation(product.id)}
        />
      ))}
    </div>
  )
}
