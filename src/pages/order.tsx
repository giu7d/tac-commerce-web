import React from 'react'

import { Header } from '@/components/containers/Header'
import { Title } from '@/components/fragments/typography/Title'
import { Checkout } from '@/components/containers/Orders/Checkout'
import { ListItemsOrder } from '@/components/containers/Orders/ListItems'

export default function Order() {
  return (
    <>
      <div className="page_container">
        <Header />
        <div className="page_content">
          <Title>Meus Pedidos</Title>
          <div className="md:mx-12 lg:flex lg:gap-12 lg:flex-row lg:items-start">
            <ListItemsOrder />
            <Checkout />
          </div>
        </div>
      </div>
    </>
  )
}
