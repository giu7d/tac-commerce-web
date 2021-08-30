import React from 'react'
import { useRouter } from 'next/router'
import { CheckoutCard } from '@/components/fragments/cards/Checkout'
import { useOrder } from '@/hooks/useOrder'
import { useAccount } from '@/hooks/useAccount'

export const Checkout = () => {
  const router = useRouter()
  const order = useOrder()
  const account = useAccount()

  const calculateTotalOrder = () => {
    const value = order.order.reduce(
      (acc, cur) => cur.quantity * Number.parseInt(cur.price, 10) + acc,
      0
    )

    return value.toString()
  }

  const goToLogin = () => router.push('/login')

  const checkout = () => {
    order.checkout()
    router.push('/')
  }

  if (!order.order.length) return <div />

  return (
    <CheckoutCard total={calculateTotalOrder()}>
      {!account.account ? (
        <button
          className="btn btn_lg btn_solid btn_primary"
          onClick={goToLogin}
        >
          Fazer LogIn
        </button>
      ) : (
        <button className="btn btn_lg btn_solid btn_primary" onClick={checkout}>
          Comprar
        </button>
      )}
    </CheckoutCard>
  )
}
