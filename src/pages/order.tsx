import React from 'react'

import { ItemCard } from '@/components/fragments/cards/Item'
import { CheckoutCard } from '@/components/fragments/cards/Checkout'
import { Header } from '@/components/fragments/headers'

export default function Order() {
  return (
    <div className="container lg:max-w-screen-lg">
      <Header className="justify-center">
        <h2 className="text-gray-800 font-semibold font-serif text-xl">
          Meus Pedidos
        </h2>
      </Header>
      <div className="flex flex-col gap-6 p-6">
        <ItemCard />
      </div>
      <CheckoutCard total="10.00" />
    </div>
  )
}
