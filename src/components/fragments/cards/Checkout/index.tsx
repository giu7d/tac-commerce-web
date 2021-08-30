import React from 'react'

import { PriceTypography } from '@/components/fragments/typography/Price'

import style from './styles.module.scss'

interface ICheckoutCard {
  total: string
}

export const CheckoutCard: React.VFC<ICheckoutCard> = ({ total }) => (
  <div className={style.checkout_card}>
    <div className={style.checkout_card_content}>
      <h5 className="text-2xl">Total</h5>
      <PriceTypography value={total} />
    </div>
    <button className="btn btn_lg btn_solid btn_primary">Comprar</button>
  </div>
)
