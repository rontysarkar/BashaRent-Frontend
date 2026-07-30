"use server"

import { registerInputType } from "@/validations/auth.validation"

export const registerAction = async (payload: registerInputType) => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  const result = await res.json()
  console.log(result)
  return {
    success: result.success,
    message: result.message,
  }
}
