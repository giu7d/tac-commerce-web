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
  <div className={styles.product_section_container}>
    <div
      className={`${styles.product_section} bg-${product.thumbnailPrimaryColor}-100`}
    >
      <Image src={{ src: product.imageSrc, width: 300, height: 300 }} />
    </div>
    <div className={styles.product_section_content}>
      <h3>{product.brand}</h3>
      <h2>{product.name}</h2>
    </div>
  </div>
)
