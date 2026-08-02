export type TLandlordRentalRequestResponse = {
  id: string
  status: "PENDING" | "APPROVED" | "REJECTED"
  propertyId: string
  tenantId: string
  createdAt: string
  updatedAt: string
  property: {
    title: string
    price: number
    status:string
  }
  tenant: {
    name: string
    email: string
  }
}


export type TPropertyStatus = "AVAILABLE" | "RENTED"

export type TTenantRentalRequestResponse = {
  id: string
  status: "PENDING" | "APPROVED" | "REJECTED"
  propertyId: string
  tenantId: string
  createdAt: string
  updatedAt: string
  property: {
    title: string
    price: number
    status:TPropertyStatus
    landlord: {
      name: string
      email: string
    }
  }
}
