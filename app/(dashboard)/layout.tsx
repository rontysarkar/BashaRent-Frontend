import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { Navbar } from "@/components/shared/navbar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import React from "react"

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <div>
      <Navbar />
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger className={'md:hidden'} />
        {children}
      </SidebarProvider>
    </div>
  )
}
