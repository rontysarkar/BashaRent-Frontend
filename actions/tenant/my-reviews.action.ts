"use server"

import { getAccessToken } from "@/services/access-token.service"
import { revalidateTag } from "next/cache"

type createReviewsProps = {
  comment: string
  rating: string
  propertyId: string
}

export const createReviewsAction = async (payload: createReviewsProps) => {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "You are not logged",
    }
  }
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/reviews`, {
    method: "POST",
    headers: {
      Cookie: `accessToken=${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  const result = await res.json()
  if (result.success) {
    revalidateTag("my-reviews", { expire: 0 })
  }
  return result
}

export const getMyReviews = async () => {
  const accessToken = await getAccessToken()
  if (!accessToken) {
    return {
      success: false,
      message: "You are not logged",
    }
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/reviews/tenant-reviews`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      next: {
        revalidate: 60 * 60 * 24,
        tags: ["my-reviews"],
      },
    }
  )

  const result = await res.json()
  return result
}
