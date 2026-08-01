import { getAccessToken } from "@/services/access-token.service"

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
