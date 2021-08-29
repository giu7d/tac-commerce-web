import Image from 'next/image'
import React from 'react'
import { FiX } from 'react-icons/fi'

import { NumberButton } from '@/components/fragments/buttons/Number'
import { PriceTypography } from '@/components/fragments/typography/Price'
import styles from './styles.module.scss'

export const ItemCard = () => (
  <div className={styles.item_card}>
    <div className={styles.item_card_cover}>
      <Image
        src={{
          src: '/images/apple-airpods.png',
          width: 100,
          height: 100
        }}
      />
    </div>
    <div className={styles.item_card_content}>
      <div>
        <h4>Apple</h4>
        <h3>Airpods Pro</h3>
      </div>
      <PriceTypography value="1499.99" size="sm" />
    </div>
    <div className={styles.item_card_actions}>
      <div className="btn btn_icon text-red-500">
        <FiX />
      </div>
      <NumberButton>1</NumberButton>
    </div>
  </div>
)
