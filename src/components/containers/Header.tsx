import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { FiShoppingCart, FiUser } from 'react-icons/fi'
import { SearchInput } from '@/components/fragments/inputs/SearchInput'
import { Header as HeaderComponent } from '@/components/fragments/headers'
import { useOrder } from '@/hooks/useOrder'
import { useAccount } from '@/hooks/useAccount'

const getInitial = (value: string) => value[0].toUpperCase()

export const Header = () => {
  const router = useRouter()
  const order = useOrder()
  const account = useAccount()

  const goToOrder = () => router.push('/order')

  const goToLogin = () => router.push('/login')

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
      {!account.account ? (
        <button
          type="button"
          className="btn btn_icon btn_outline"
          onClick={goToLogin}
        >
          <FiUser />
        </button>
      ) : (
        <button
          type="button"
          className="btn btn_icon btn_primary"
          onClick={() => account.logout()}
        >
          {getInitial(account.account.firstName)}
        </button>
      )}
    </HeaderComponent>
  )
}
