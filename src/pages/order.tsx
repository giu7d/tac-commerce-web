import React from 'react'

import { Header } from '@/components/containers/Header'
import { ListItemsOrder } from '@/components/containers/Orders/ListItems'
import { Checkout } from '@/components/containers/Orders/Checkout'

export default function Order() {
  return (
    <>
      <div className="container lg:max-w-screen-lg mx-auto">
        <Header />
        <h4 className="text-lg mt-12 m-6 font-semibold text-gray-800">
          Meus Pedidos
          <div className="border border-gray-800 w-4" />
        </h4>
        <ListItemsOrder />
      </div>
      <Checkout />
    </>
  )
}
