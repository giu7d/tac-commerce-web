import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { SearchInput } from '@/components/fragments/inputs/SearchInput'
import { Header as HeaderComponent } from '@/components/fragments/headers'
import { useOrder } from '@/hooks/useOrder'

export const Header = () => {
  const router = useRouter()
  const order = useOrder()

  const goToOrder = () => {
    router.push('/order')
  }

  return (
    <HeaderComponent>
      <SearchInput placeholder="Buscar" />
      <button
        type="button"
        className="btn btn_icon btn_outline"
        onClick={goToOrder}
      >
        {order.order.length}
        <FiShoppingCart />
      </button>
      <button type="button" className="btn btn_icon btn_primary">
        GS
      </button>
    </HeaderComponent>
  )
}
