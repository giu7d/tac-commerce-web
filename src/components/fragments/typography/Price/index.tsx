import React from 'react'
import styles from './styles.module.scss'

interface IPriceTypographyProps {
  value: string
  size?: 'sm' | 'md' | 'lg'
}

export const PriceTypography: React.VFC<IPriceTypographyProps> = ({
  value,
  size = 'md'
}) => {
  const [number, decimal] = value.split('.')

  const handleSize = () => {
    if (size === 'sm') return styles.price_sm
    return styles.price_md
  }

  return (
    <div className={handleSize()}>
      <div className={styles.price}>
        <small>R$</small>
        <h5>
          {number}
          {decimal && <span>.{decimal}</span>}
        </h5>
      </div>
    </div>
  )
}
