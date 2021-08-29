import React from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'

interface IOffersSectionProps {
  off: number
  productName: string
  productImage: string
}

export const OfferSection: React.VFC<IOffersSectionProps> = ({
  productName,
  productImage,
  off
}) => (
  <div className={styles.offer}>
    <div className={styles.offer_content}>
      <h2>Oferta</h2>
      <h3>{productName}</h3>
      <h4>
        -{off}
        <span>%</span>
      </h4>
    </div>
    <div className={styles.offer_image}>
      <Image src={{ src: productImage, width: 200, height: 200 }} />
    </div>
  </div>
)
