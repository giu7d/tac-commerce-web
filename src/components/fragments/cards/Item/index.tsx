import Image from 'next/image'
import React from 'react'
import { FiX } from 'react-icons/fi'

import { NumberButton } from '@/components/fragments/buttons/Number'
import { PriceTypography } from '@/components/fragments/typography/Price'
import styles from './styles.module.scss'
import { OrderItem } from '@/models/OrderItem'

interface IItemCardProps {
  item: OrderItem
  onDelete?: () => void
}

export const ItemCard: React.VFC<IItemCardProps> = ({
  item,
  onDelete = () => {}
}) => (
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
      <PriceTypography value="1499.99" size="sm" />
    </div>
    <div className={styles.item_card_actions}>
      <div className="btn btn_icon text-red-500" onClick={onDelete}>
        <FiX />
      </div>
      <NumberButton>{item.quantity}</NumberButton>
    </div>
  </div>
)
