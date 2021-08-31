import Image from 'next/image'
import React from 'react'

import { PriceTypography } from '@/components/fragments/typography/Price'
import styles from './styles.module.scss'
import { OrderItem } from '@/models/OrderItem'

interface IItemCardProps {
  item: OrderItem
  renderActions: React.ReactElement
}

export const ItemCard: React.FC<IItemCardProps> = ({ item, renderActions }) => (
  <div className={styles.item_card}>
    <div
      className={`${styles.item_card_cover} bg-${item.product.thumbnailPrimaryColor}-100 `}
    >
      <Image
        src={{
          src: item.product.imageSrc,
          width: 100,
          height: 100
        }}
      />
    </div>
    <div className={styles.item_card_content}>
      <div>
        <h4>{item.brand}</h4>
        <h3>{item.name}</h3>
      </div>
      <PriceTypography value={item.price} size="sm" />
    </div>
    <div className={styles.item_card_actions}>{renderActions}</div>
  </div>
)
