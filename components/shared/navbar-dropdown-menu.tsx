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
import { LogOut, Settings, User } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import { logoutAction } from "@/actions/auth/logout.actioin"
import Link from "next/link"

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
  return user ? (
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
          <AvatarImage src={user?.profilePhoto as string} alt="User avatar" />
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
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User data-icon="inline-start" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings data-icon="inline-start" />
            Settings
          </DropdownMenuItem>
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
    <Link className="font-bold" href={"/login"}>
      Login
    </Link>
  )
}
