

export type TPaymentHistoryResponse = {
  id: string;
  transactionId: string;
  amount: number;
  status: "COMPLETED" | "PENDING" | "FAILED";
  provider: string;
  rentalRequestId: string;
  paidAt: string | Date;
  createdAt: string | Date;
  updatedAt: string | Date;
  rentalRequest: {
    property: {
      id:string,
      title: string;
      price: number;
      location: string;
      landlord: {
        name: string;
        email: string;
      };
    };
  };
}