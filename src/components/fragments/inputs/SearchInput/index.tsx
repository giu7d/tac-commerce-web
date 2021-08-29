import React from 'react'
import { FiSearch } from 'react-icons/fi'

import styles from './styles.module.scss'

export const SearchInput: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = props => (
  <div className={styles.search_input}>
    <FiSearch />
    <input type="text" {...props} />
  </div>
)
