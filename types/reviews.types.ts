export type TReviewsResponse = {
  id: string;
  rating: number;
  comment: string;
  propertyId: string;
  tenantId: string;
  createdAt: string;
  updatedAt: string;
  property: {
    title: string;
    price: number;
    landlord: {
      name: string;
      profilePhoto: string | null;
    };
  };
  tenant: {
    name: string;
    profilePhoto: string | null;
  };
}