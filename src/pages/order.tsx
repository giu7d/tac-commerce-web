import React from 'react'

import { Header } from '@/components/fragments/headers'
import { ListItemsOrder } from '@/components/containers/Orders/ListItems'
import { Checkout } from '@/components/containers/Orders/Checkout'

export default function Order() {
  return (
    <>
      <div className="container lg:max-w-screen-lg mx-auto">
        <Header className="justify-center">
          <h2 className="text-gray-800 font-semibold font-serif text-xl">
            Meus Pedidos
          </h2>
        </Header>
        <ListItemsOrder />
      </div>
      <Checkout />
    </>
  )
}
