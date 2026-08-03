"use server"

import { getMe } from "@/services/auth.service"
import { TLoginInput } from "@/validations/auth.validation"
import { cookies } from "next/headers"

export const loginAction = async (data: TLoginInput) => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  const result = await res.json()
  if (result.success) {
    const cookieStore = await cookies()
    cookieStore.set("accessToken", result?.data?.accessToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    })

    cookieStore.set("refreshToken", result?.data.refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
    })

    const userdata = await getMe()
    return userdata
  } else {
    return {
      success: false,
      message: result.message,
    }
  }
}
