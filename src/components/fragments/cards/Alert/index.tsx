import React from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'

interface IAlertCardProps {
  src?: string
}

export const AlertCard: React.FC<IAlertCardProps> = ({ src, children }) => (
  <div className={styles.alert}>
    {src && <Image src={{ src, width: 150, height: 150 }} />}
    <span>{children}</span>
  </div>
)
