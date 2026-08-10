"use server"

import { getAccessToken } from "./access-token.service"

export const getProperties = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined }
} = {}) => {
  const params = new URLSearchParams()

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.set(key, String(value))
      }
    })
  }

  // if (query && query?.searchTerm) {
  //   params.set("searchTerm", query?.searchTerm as string)
  // }

  // if (query && query?.amenities) {
  //   params.set("amenities", query?.amenities as string)
  // }

  // if (query && query?.maxPrice) {
  //   params.set("maxPrice", query?.maxPrice as string)
  // }
  // if (query && query?.minPrice) {
  //   params.set("minPrice", query?.minPrice as string)
  // }

  // if (query && query?.sortOrder) {
  //   params.set("sortOrder", query?.sortOrder as string)
  // }

  // if (query && query?.sortBy) {
  //   params.set("sortBy", query?.sortBy as string)
  // }

  // if (query && query?.status) {
  //   params.set("status", query?.status as string)
  // }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties?${params}`,
    {
      next: {
        revalidate: 60 * 60 * 24,
        tags: ["properties"],
      },
    }
  )

  const result = await res.json()
  return result
}

export const getPropertyDetails = async (id: string) => {
  const resDetails = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties/${id}`,
    {
      next: {
        revalidate: 60 * 60 * 24,
        tags: [`property-${id}`],
      },
    }
  )
  const resultDetails = await resDetails.json()

  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      resultDetails,
      resultStatus: { success: false },
    }
  } else {
    const resStatus = await fetch(
      `${process.env.BACKEND_API_URL}/api/rentals/status/${id}`,
      {
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
        cache: "no-store",
      }
    )

    const resultStatus = await resStatus.json()
    return {
      resultDetails,
      resultStatus,
    }
  }
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
