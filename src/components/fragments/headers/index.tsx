import React from 'react'

import styles from './styles.module.scss'

export const Header: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...props
}) => (
  <header {...props} className={`${styles.header} ${className}`}>
    {children}
  </header>
)
