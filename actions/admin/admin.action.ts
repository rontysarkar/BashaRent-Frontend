"use server"

import { getAccessToken } from "@/services/access-token.service"
import { UserStatus } from "@/types/user.types"
import { revalidateTag } from "next/cache"

export const getAdminStats = async () => {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "token not found",
    }
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/admin/overview`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["admin-stats"],
    },
  })

  const result = await res.json()
  return result
}

export const getAllUsers = async () => {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "token not found",
    }
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/admin/users`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["all-users"],
    },
  })

  const result = await res.json()
  return result
}

export const getAllRentalRequest = async () => {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "token not found",
    }
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/rental-requests`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      next: {
        revalidate: 60 * 60 * 24,
        tags: ["admin-all-rental-request"],
      },
    }
  )

  const result = await res.json()
  return result
}

export const updateUserStatusAction = async (
  userId: string,
  status: UserStatus
) => {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "token not found",
    }
  }
  const payload = { status }
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/users/${userId}`,
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
    revalidateTag("admin-stats", { expire: 0 })
    revalidateTag("all-users", { expire: 0 })
  }
  return result
}
