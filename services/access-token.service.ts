"use server"
import { cookies } from "next/headers"
import { jwtUtils } from "@/utils/jwt"

export const getAccessToken = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value
  const refreshToken = cookieStore.get("refreshToken")?.value

  const verifyAccessToken = jwtUtils.verifyToken(
    accessToken as string,
    process.env.JWT_ACCESS_TOKEN_SECRET as string
  )
  const verifyRefreshToken = jwtUtils.verifyToken(
    refreshToken as string,
    process.env.JWT_REFRESH_TOKEN_SECRET as string
  )
  // console.log("verify --",verifyAccessToken,'refresh TOken -',verifyRefreshToken)

  if (verifyAccessToken) {
    return accessToken
  }

  if (!verifyAccessToken && !verifyRefreshToken) {
    return null
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/auth/refresh-token`,
    {
      method: "POST",
      headers: {
        Cookie: `refreshToken=${refreshToken}`,
      },
    }
  )

  const result = await res.json()
  if (result.false) {
    return null
  }

  cookieStore.set("accessToken", result.data?.accessToken, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  })

  return result?.data?.accessToken
}
