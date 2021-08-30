import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import { Header } from '@/components/fragments/headers'
import { Input } from '@/components/fragments/inputs/Input'
import { useAccount } from '@/hooks/useAccount'

interface IForm {
  email: string
  password: string
}

export default function Login() {
  const { login } = useAccount()
  const { register, handleSubmit } = useForm()
  const router = useRouter()

  const onSubmit = async ({ email, password }: IForm) => {
    try {
      if (!email) throw new Error('Informar email')

      if (!password) throw new Error('Informar senha')

      await login(email, password)

      router.back()
    } catch (error) {
      console.warn(error)
    }
  }

  return (
    <div className="container lg:max-w-screen-lg mx-auto">
      <Header className="justify-center">
        <h2 className="text-gray-800 font-semibold font-serif text-xl">
          Log In
        </h2>
      </Header>
      <form
        className="flex flex-1 flex-col p-6 gap-6 justify-center align-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="email"
          label="Email"
          {...register('email', { required: true })}
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          {...register('password', { required: true })}
        />
        <button className="btn btn_lg btn_solid btn_primary">Entrar</button>
      </form>
    </div>
  )
}
