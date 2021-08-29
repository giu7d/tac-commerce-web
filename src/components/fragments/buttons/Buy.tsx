import React from 'react'
import { PriceTypography } from '@/components/fragments/typography/Price'
import { HorizontalDivider } from '../divider/horizontal'

interface IBuyButtonProps {
  price: string
  onClick: () => void
}

export const BuyButton: React.VFC<IBuyButtonProps> = ({ price, onClick }) => (
  <div className="btn btn_md btn_solid btn_primary" onClick={onClick}>
    <PriceTypography value={price} size="sm" />
    <HorizontalDivider className="mx-3" />
    Comprar
  </div>
)
