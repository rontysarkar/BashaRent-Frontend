"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { menuConfig } from "@/constant/dashboard-menu"
import { useAuth } from "@/context/auth-context"
import { LayoutDashboard } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AppSidebar() {
  const { user } = useAuth()
  const items = user?.role
    ? menuConfig[user?.role as keyof typeof menuConfig]
    : []
  const pathname = usePathname()

  return (
    <Sidebar className="mt-16">
      <SidebarHeader className="border-b border-slate-100 p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <LayoutDashboard size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-800">
              {user?.role} PANEL
            </span>
            <span className="text-[10px] text-slate-500">Manage System</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items?.map((item) => {
                const isActive = pathname === item?.url
                return (
                  <SidebarMenuItem key={item?.title}>
                    <SidebarMenuButton
                      isActive={isActive}
                      className={isActive ? "bg-amber-500 text-white" : ""}
                      render={
                        <Link
                          href={item?.url}
                          className={`flex w-full items-center`}
                        >
                          <item.icon size={18} />
                          <span>{item?.title}</span>
                        </Link>
                      }
                    />
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
