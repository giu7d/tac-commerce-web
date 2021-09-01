import React from 'react'
import { useRouter } from 'next/router'

import { useProduct } from '@/hooks/useProduct'
import { Header } from '@/components/containers/Header'
import { BuyProduct } from '@/components/containers/Product/Buy'
import { ProductSection } from '@/components/fragments/sections/Product'
import { ParagraphSection } from '@/components/fragments/sections/Paragraph'

export default function Product() {
  const router = useRouter()
  const { product, isLoading, isError } = useProduct(router.query.id as string)

  if (!product || isError || isLoading) {
    return <div>loading</div>
  }

  return (
    <div className="page_container">
      <Header />
      <div className="flex flex-col gap-6 p-6 md:flex-row md:max-w-5xl md:mx-auto md:mt-12 md:justify-evenly md:items-center">
        <ProductSection product={product} />
        <div className="md:flex md:flex-col md:gap-12">
          <ParagraphSection title="Descrição">
            {product.description}
          </ParagraphSection>
          <BuyProduct />
        </div>
      </div>
    </div>
  )
}
