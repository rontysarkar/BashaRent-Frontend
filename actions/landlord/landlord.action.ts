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

export const deletePropertyAction = async (postId: string) => {
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
      method: "DELETE",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    }
  )

  const result = await res.json()
  if (result.success) {
    revalidateTag("properties", { expire: 0 })
    revalidateTag("my-properties", { expire: 0 })
  }
  return result
}

export const getLandlordRentalRequestsAction = async () => {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "Token not found",
    }
  }
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/requests`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      next: {
        revalidate: 60 * 60 * 24,
        tags: ["property-requests"],
      },
    }
  )

  const result = await res.json()
  return result
}

export const approveOrRejectAction = async (
  rentalRequestId: string,
  status: string
) => {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "Token not found",
    }
  }
  const payload = { status }
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/landlord/requests/${rentalRequestId}`,
    {
      method: "PATCH",
      headers: {
        Cookie: `accessToken=${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  )

  const result = await res.json()
  if (result.success) {
    revalidateTag("property-requests", { expire: 0 })
  }
  return result
}


export const getLandlordDashboardStats = async()=>{

  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "Token not found",
    }
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/landlord/overview`,{
    headers:{
      Cookie:`accessToken=${accessToken}`
    },
    next:{
      revalidate:60*60*24*5,
      tags:['landlord-stats']
    }
  })

  const result = await res.json();
  return result;
}
