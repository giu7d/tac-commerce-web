/* eslint-disable no-console */
import { useContext } from 'react'
import { authAccount, getAccount } from '@/services'
import { ApplicationContext } from '@/stores/ApplicationStore'
import { reset, setAccount } from '@/stores/actions'

export const useAccount = () => {
  const { state, dispatch } = useContext(ApplicationContext)

  const login = async (email: string, password: string) => {
    const auth = await authAccount(email, password)
    const account = await getAccount(auth.id)

    account.token = auth.token

    localStorage.setItem('token', auth.token)

    dispatch(setAccount(account))
  }

  const logout = () => {
    localStorage.removeItem('token')
    dispatch(reset())
  }

  return {
    account: state.account,
    login,
    logout
  }
}
