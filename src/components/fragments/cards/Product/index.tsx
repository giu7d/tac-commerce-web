import React from 'react'
import { FiInfo, FiPlus } from 'react-icons/fi'
import Image from 'next/image'

import { Product } from '@/models/Product'
import { PriceTypography } from '@/components/fragments/typography/Price'

import styles from './styles.module.scss'

interface IProductCardProps {
  product: Product
  onSave?: () => void
  onClick?: () => void
}

export const ProductCard: React.VFC<IProductCardProps> = ({
  product,
  onSave = () => {},
  onClick = () => {}
}) => (
  <div className={styles.product_card}>
    <div
      className={`${styles.product_card_cover} bg-${product.thumbnailPrimaryColor}-50`}
      onClick={onClick}
    >
      <Image
        src={{
          src: product.imageSrc,
          width: 200,
          height: 200
        }}
      />
    </div>
    <div className={styles.product_card_content}>
      <div>
        <small className={styles.product_brand}>{product.brand}</small>
        <h4 className={styles.product_name}>{product.name}</h4>
      </div>
      <PriceTypography value={product.price} />
    </div>
    <div className={styles.product_card_actions}>
      <button
        type="button"
        className="btn btn_md btn_outline"
        onClick={onClick}
      >
        <FiInfo />
        Mais
      </button>
      <button type="button" className="btn btn_md btn_primary" onClick={onSave}>
        <FiPlus />
        Adicionar
      </button>
    </div>
  </div>
)
