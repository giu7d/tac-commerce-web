/* eslint-disable no-console */
import { useContext } from 'react'
import { authAccount, getAccount } from '@/services'
import { ApplicationContext } from '@/stores/ApplicationStore'
import { reset, setAccount } from '@/stores/actions'

export const useAccount = () => {
  const { state, dispatch } = useContext(ApplicationContext)

  const login = async (email: string, password: string) => {
    try {
      const auth = await authAccount(email, password)
      const account = await getAccount(auth.id)

      account.token = auth.token

      localStorage.setItem('token', auth.token)

      console.log(account)
      dispatch(setAccount(account))
    } catch (error) {
      console.warn(error)
    }
  }

  const logout = () => {
    try {
      localStorage.removeItem('token')
      dispatch(reset())
    } catch (error) {
      console.warn(error)
    }
  }

  return {
    account: state.account,
    login,
    logout
  }
}
