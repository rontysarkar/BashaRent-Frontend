export interface IPropertyResponse {
  id: string
  title: string
  price: number
  location: string
  status: string
  amenities: string
  description: string
  landlordId: string
  categoryId: string
  createdAt: string
  updatedAt: string
  image?: string | null
  category?: {
    name: string
  }
}