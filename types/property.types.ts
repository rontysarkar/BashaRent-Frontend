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
  photo?: string | null
  category?: {
    name: string
  }
}



export interface Landlord {
  id: string
  name: string
  email: string
  profilePhoto: string | null
  bio: string | null
}

export interface Category {
  id: string
  name: string
}

export interface PropertyDetailsResponse {
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
  photo?: string | null // URL string or null
  landlord: Landlord
  category: Category
  reviews: string[]
}