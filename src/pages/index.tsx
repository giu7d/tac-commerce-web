import React from 'react'
import Head from 'next/head'
import { FilterProducts } from '@/components/containers/Products/Filter'
import { Header } from '@/components/containers/Header'
import { OfferSection } from '@/components/fragments/sections/Offer'
import { ListProducts } from '@/components/containers/Products/List'

export default function Home() {
  return (
    <div className="container g:max-w-screen-lg mx-auto">
      <Head>
        <title>Commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="p-6">
        <OfferSection
          productName="Apple Watch"
          productImage="https://firebasestorage.googleapis.com/v0/b/tac-commerce.appspot.com/o/apple-watch.png?alt=media&token=4da4fb22-3bf5-4a9f-b5a2-0417f08101a6"
          off={15}
        />
        <div className="pt-6">
          <FilterProducts />
          <ListProducts />
        </div>
      </main>
    </div>
  )
}
