import '@/styles/tailwind.scss'
import '@/styles/globals.scss'
import '@/styles/button.scss'
import '@/styles/product.scss'

import React from 'react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
