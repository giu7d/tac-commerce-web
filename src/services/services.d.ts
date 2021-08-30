export interface IProductResponse {
  id: string
  name: string
  category: string
  unitPrice: number
  quantity: number
  additionalInformation: {
    brand: string
    imageSrc: string
    thumbnailPrimaryColor: string
  }
  createdAt: string
  updatedAt: string
  deletedAt?: string
}

export interface IAuthResponse {
  token: string
}

export interface IAccountResponse {
  id: string
  firstName: string
  lastName: string
  email: string
  isAdmin: boolean
}
