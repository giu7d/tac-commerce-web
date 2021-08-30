/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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

  const handleLogout = () => account.logout()

  const goToOrder = () => router.push('/order')

  const goToLogin = () => router.push('/login')

  const goToHome = () => router.push('/')

  return (
    <HeaderComponent className="justify-between">
      <h1
        className="hidden md:block font-bold text-xl text-gray-800 self-center cursor-pointer"
        onClick={goToHome}
      >
        Commerce
      </h1>
      <SearchInput placeholder="Buscar" />
      <div className="flex gap-6">
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
            onClick={handleLogout}
          >
            {getInitial(account.account.firstName)}
          </button>
        )}
      </div>
    </HeaderComponent>
  )
}
