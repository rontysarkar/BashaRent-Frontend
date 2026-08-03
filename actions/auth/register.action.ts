"use server"

import { TRegisterInput } from "@/validations/auth.validation"

export const registerAction = async (payload: TRegisterInput) => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  const result = await res.json()
  return {
    success: result.success,
    message: result.message,
  }
}
