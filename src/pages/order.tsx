import React from 'react'

import { Header } from '@/components/fragments/headers'
import { CheckoutCard } from '@/components/fragments/cards/Checkout'
import { ListItemsOrder } from '@/components/containers/Orders/ListItems'

export default function Order() {
  return (
    <div className="container lg:max-w-screen-lg">
      <Header className="justify-center">
        <h2 className="text-gray-800 font-semibold font-serif text-xl">
          Meus Pedidos
        </h2>
      </Header>
      <ListItemsOrder />
      <CheckoutCard total="10.00" />
    </div>
  )
}
