import React from 'react'
import Image from 'next/image'

import { Product } from '@/models/Product'

import styles from './styles.module.scss'

interface IProductSectionProps {
  product: Product
}

export const ProductSection: React.VFC<IProductSectionProps> = ({
  product
}) => (
  <>
    <div
      className={`${styles.product_section} bg-${product.thumbnailPrimaryColor}-100`}
    >
      <Image src={{ src: product.imageSrc, width: 300, height: 300 }} />
    </div>
    <div className="flex flex-col items-center">
      <h3 className="text-lg uppercase text-gray-500 font-semibold">
        {product.brand}
      </h3>
      <h2 className="text-3xl uppercase  text-gray-800 font-bold">
        {product.name}
      </h2>
    </div>
  </>
)
