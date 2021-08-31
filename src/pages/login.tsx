import React, { useState } from 'react'
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
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const { register, handleSubmit, formState } = useForm()
  const { login } = useAccount()
  const router = useRouter()

  const onSubmit = async ({ email, password }: IForm) => {
    try {
      setIsLoading(true)

      if (!email || !password) throw new Error()

      await login(email, password)

      return router.back()
    } catch (err) {
      setIsLoading(false)

      if (err.isAxiosError) return setError(err.response.data?.message)

      return setError(err.message)
    }
  }

  return (
    <div className="page_container">
      <Header className="justify-center">
        <h2 className="text-gray-800 font-semibold font-serif text-xl">
          Log In
        </h2>
      </Header>
      <form
        className="page_content flex flex-1 justify-center md:w-96 md:mx-auto"
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
        {error && (
          <p className="p-6 text-center font-semibold bg-red-50 text-red-500 rounded-3xl">
            {error}
          </p>
        )}
        <button
          className="btn btn_lg btn_solid btn_primary"
          disabled={isLoading && !formState.isValid}
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
