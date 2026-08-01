"use server"

import { getAccessToken } from "@/services/access-token.service"
import { revalidateTag } from "next/cache"

export const paymentAction = async (rentalRequestId: string) => {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "You are not logged",
    }
  }
  const payload = { rentalRequestId }
  console.log(payload)
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/payments/create`,
    {
      method: "POST",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    }
  )

  const result = await res.json()
  if (result.success) {
    revalidateTag("tenant-requests", { expire: 0 })
  }
  return result
}
