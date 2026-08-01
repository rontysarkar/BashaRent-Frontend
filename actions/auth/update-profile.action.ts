"use server"

import { getAccessToken } from "@/services/access-token.service"
import { TUpdateProfile } from "@/validations/auth.validation"
import { revalidateTag } from "next/cache"

export const updateProfileAction = async (data: TUpdateProfile) => {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "Token not found",
    }
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/profile`, {
    method: "PUT",
    headers: {
      Cookie: `accessToken=${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  const result = await res.json()
  if (result.success) {
    revalidateTag("my-profile", { expire: 0 })
  }
  return result
}
