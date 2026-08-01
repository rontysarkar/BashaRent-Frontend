"use server"

import { getAccessToken } from "@/services/access-token.service"
import { TCreateProperty } from "@/validations/landlord.validation"
import { revalidateTag } from "next/cache"

export const getMyProperties = async () => {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "Token not found",
    }
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/properties`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      next: {
        revalidate: 60 * 60 * 24 * 5,
        tags: ["my-properties"],
      },
    }
  )

  const result = await res.json()
  return result
}

export const createPropertyAction = async (data: TCreateProperty) => {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "Token not found",
    }
  }
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/properties`,
    {
      method: "POST",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )

  const result = await res.json()
  if (result.success) {
    revalidateTag("properties", { expire: 0 })
    revalidateTag("my-properties", { expire: 0 })
  }
  return result
}

export const updatePropertyAction = async (
  data: TCreateProperty,
  postId: string
) => {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "Token not found",
    }
  }
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/properties/${postId}`,
    {
      method: "PUT",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )

  const result = await res.json()
  if (result.success) {
    revalidateTag("properties", { expire: 0 })
    revalidateTag("my-properties", { expire: 0 })
  }
  return result
}
