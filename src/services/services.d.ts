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
