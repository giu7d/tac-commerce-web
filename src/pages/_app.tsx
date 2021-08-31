import '@/styles/tailwind.scss'
import '@/styles/globals.scss'
import '@/styles/button.scss'
import '@/styles/product.scss'
import '@/styles/page.scss'

import React from 'react'
import type { AppProps } from 'next/app'

import { ApplicationStore } from '@/stores/ApplicationStore'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApplicationStore>
      <Component {...pageProps} />
    </ApplicationStore>
  )
}
