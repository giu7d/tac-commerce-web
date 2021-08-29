import React from 'react'

import styles from './styles.module.scss'

export const HorizontalDivider: React.VFC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ className, ...props }) => (
  <div {...props} className={`${styles.divider_horizontal} ${className}`} />
)
