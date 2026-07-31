"use server"

import { getAccessToken } from "./access-token.service"

export const getProperties = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/properties`, {
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["properties"],
    },
  })

  const result = await res.json()
  return result
}

export const getPropertyDetails = async (id: string) => {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties/${id}`,
    {
      next: {
        revalidate: 60 * 60 * 24,
        tags: [`property-${id}`],
      },
    }
  )
  const result = await res.json()
  return result
}

export const getPropertyRequestStatus = async (propertyId: string) => {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "User Not Logged in",
    }
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/rentals/status/${propertyId}`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "no-store",
    }
  )

  const result = await res.json()
  return result
}

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

  const result = await res.json();
  return result;
}
