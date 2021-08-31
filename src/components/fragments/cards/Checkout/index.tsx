import React from 'react'

import { PriceTypography } from '@/components/fragments/typography/Price'

import style from './styles.module.scss'

interface ICheckoutCard {
  total: string
  login: boolean
  onClickCheckout: () => void
  onClickLogin: () => void
}

export const CheckoutCard: React.VFC<ICheckoutCard> = ({
  total,
  login,
  onClickCheckout = () => {},
  onClickLogin = () => {}
}) => (
  <div className={style.checkout_card}>
    <div className={style.checkout_card_content}>
      <h5 className="text-2xl">Total</h5>
      <PriceTypography value={total} />
    </div>
    <div className={style.checkout_card_actions}>
      {!login && (
        <button
          className="btn btn_lg btn_solid btn_secondary"
          onClick={onClickLogin}
        >
          Fazer LogIn
        </button>
      )}
      <button
        className="btn btn_lg btn_solid btn_primary"
        onClick={onClickCheckout}
        disabled={!login}
      >
        Comprar
      </button>
    </div>
  </div>
)
