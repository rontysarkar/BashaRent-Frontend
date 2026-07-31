"use server"

import { loginInputType } from "@/validations/auth.validation"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const loginAction = async (data: loginInputType) => {
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

    redirect("/")
  } else {
    return {
      success: false,
      message: result.message,
    }
  }
}
