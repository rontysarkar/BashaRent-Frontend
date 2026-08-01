"use server"

import { getAccessToken } from "@/services/access-token.service"

export const getTenantDashboardStats = async () => {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "Not logged in",
    }
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/rentals/tenant/dashboard`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      next: {
        revalidate: 60 * 60 * 24 * 5,
        tags: ["tenant-stats"],
      },
    }
  )
  const result = await res.json()
  return result
}


export const getTenantAllRequestsAction = async () => {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "Token not found",
    }
  }
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/rentals`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      next: {
        revalidate: 60 * 60 * 24,
        tags: ["tenant-requests"],
      },
    }
  )

  const result = await res.json()
  return result
}
