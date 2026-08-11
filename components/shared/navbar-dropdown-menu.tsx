"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { LayoutDashboard, LogOut, Settings, User } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import { logoutAction } from "@/actions/auth/logout.actioin"
import Link from "next/link"
// import { ThemeToggle } from "../theme-toggle"

export default function NavbarDropdownMenu() {
  const { setUser, user } = useAuth()

  const handleAction = async (action: string) => {
    if (action === "logout") {
      const result = await logoutAction()
      if (result.success) {
        setUser(null)
      }
    }
  }

  const dashboardUrl =
    user?.role === "ADMIN"
      ? "/admin-dashboard"
      : user?.role === "LANDLORD"
        ? "/landlord-dashboard"
        : "/tenant-dashboard"

  const dropdownMenu = [
    {
      title: "Profile",
      url: `${dashboardUrl}/profile`,
      icon: <User />,
    },
    {
      title: "Dashboard",
      url: dashboardUrl,
      icon: <LayoutDashboard />,
    },
  ]

  return (
    <div className="flex items-center justify-center gap-6">
      {/* <ThemeToggle /> */}
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button
                type="button"
                className="rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                aria-label="Open profile menu"
              />
            }
          >
            <Avatar className="size-9">
              <AvatarImage
                src={user?.profilePhoto as string}
                alt="User avatar"
              />
              <AvatarFallback>
                {user?.name
                  .trim()
                  .split(/\s+/)
                  .map((word) => word[0].toUpperCase())
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{user?.name}</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    {user?.name}
                  </span>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className={"py-1"}>
              {dropdownMenu?.map((item) => (
                <Link key={item.title} href={item?.url}>
                  <DropdownMenuItem className={"py-1 font-bold"}>
                    {item?.icon}
                    {item?.title}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => handleAction("logout")}
              variant="destructive"
            >
              <LogOut data-icon="inline-start" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          href="/login"
          className=" inline-flex items-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:text-white"
        >
          Login
        </Link>
      )}
    </div>
  )
}
