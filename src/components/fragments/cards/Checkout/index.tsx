import React from 'react'

import { PriceTypography } from '@/components/fragments/typography/Price'

import style from './styles.module.scss'

interface ICheckoutCard {
  total: string
}

export const CheckoutCard: React.FC<ICheckoutCard> = ({ total, children }) => (
  <div className={style.checkout_card}>
    <div className={style.checkout_card_content}>
      <h5 className="text-2xl">Total</h5>
      <PriceTypography value={total} />
    </div>
    {children}
  </div>
)
