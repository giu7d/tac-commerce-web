import Axios from 'axios'
import jwt from 'jsonwebtoken'
import { Product } from '@/models/Product'
import {
  IAccountResponse,
  IAuthResponse,
  IProductResponse,
  ITokenPayload
} from './services'
import { Account } from '@/models/Account'
import { description } from '@/utils'

const { NEXT_PUBLIC_API_URL = '' } = process.env

export const API = Axios.create({
  baseURL: NEXT_PUBLIC_API_URL
})

export const getCategories = (url: string) => API.get(url).then(res => res.data)

export const getProducts = (url: string) =>
  API.get<IProductResponse[]>(url).then(res =>
    res.data.map(el => adaptsToProduct(el))
  )

export const getProduct = (url: string) =>
  API.get<IProductResponse>(url).then(res => adaptsToProduct(res.data))

export const authAccount = async (
  email: string,
  password: string
): Promise<{ id: string; token: string }> => {
  const {
    data: { token }
  } = await API.post<IAuthResponse>('/accounts/auth', { email, password })

  API.defaults.headers.authorization = `Bearer ${token}`

  const { id } = jwt.decode(token) as ITokenPayload

  return { id, token }
}

export const getAccount = async (id: string): Promise<Account> => {
  const { data: account } = await API.get<IAccountResponse>(`/accounts/${id}`)

  return {
    ...account,
    token: API.defaults.headers.authorization
  }
}

const adaptsToProduct = (data: IProductResponse): Product => ({
  id: data.id,
  name: data.name,
  price: data.unitPrice.toString(),
  thumbnailPrimaryColor: data.additionalInformation.thumbnailPrimaryColor,
  imageSrc: data.additionalInformation.imageSrc,
  brand: data.additionalInformation.brand,
  description: data.additionalInformation?.description || description
})
