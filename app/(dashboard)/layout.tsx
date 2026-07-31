import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { Navbar } from "@/components/shared/navbar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import { getMe } from "@/services/auth.service"
import React from "react"

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const result = await getMe()
  return (
    <div>
      <Navbar user={result} />
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        {children}
      </SidebarProvider>
    </div>
  )
}
