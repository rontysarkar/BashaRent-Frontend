import Profile from "@/components/shared/profile"
import { getMe } from "@/services/auth.service"
import React from "react"

export default async function AdminPage() {
  const res = await getMe()
  return (
    <div>
      <Profile user={res?.data} />
    </div>
  )
}
