import { Navbar } from "@/components/shared/navbar"
import { getMe } from "@/services/auth.service"
import React from "react"

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

    const result = await getMe();
  return (
    <div>
      <Navbar user={result}/>
      {children}
    </div>
  )
}
