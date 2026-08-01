


export type TRentalRequestResponse = {
  id: string
  status: "PENDING" | "APPROVED" | "REJECTED"
  propertyId: string
  tenantId: string
  createdAt: string
  updatedAt: string
  property: {
    title: string
    price: number
  }
  tenant: {
    name: string
    email: string
  }
}