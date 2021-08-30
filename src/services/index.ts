import Axios from 'axios'
import { Product } from '@/models/Product'
import { IProductResponse } from './services'

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

const adaptsToProduct = (data: IProductResponse): Product => ({
  id: data.id,
  name: data.name,
  price: data.unitPrice.toString(),
  thumbnailPrimaryColor: data.additionalInformation.thumbnailPrimaryColor,
  imageSrc: data.additionalInformation.imageSrc,
  brand: data.additionalInformation.brand
})
