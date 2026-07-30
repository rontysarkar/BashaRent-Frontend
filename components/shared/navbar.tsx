"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu,  LogOut, Settings, User, HomeIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { UserDataResponse } from "@/types/user.types"
import { logoutAction } from "@/actions/auth/logout.actioin"

// const navLinks = [
//   { title: "Home", href: "/" },
//   { title: "Products", href: "/products" },
//   { title: "About", href: "/about" },
//   { title: "Contact", href: "/contact" },
// ]

export function Navbar({ user }: { user: UserDataResponse }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleAction = (action: string) => {
    if (action === "logout") {
      logoutAction()
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4">
        <Link
          href="/"
          className="flex shrink-0 gap-1 justify-center  items-center text-lg font-bold tracking-tight"
        >
          <HomeIcon color="green" className="size-5 text-primary " aria-hidden="true" />
          <span className="hidden sm:inline font-bold text-xl">Rent<span className="text-green-700">Nest</span></span>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex gap-1">
            {/* {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  render={<Link href={link.href} />}
                  className="px-3 py-2"
                >
                  {link.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))} */}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Toggle menu" />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <SheetHeader className="border-b px-6 py-4">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              {/* <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="border-b px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                ))}
              </nav> */}
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex-1 lg:hidden" />
        {user?.success ? (
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
                <AvatarImage src={user?.data?.profilePhoto as string} alt="User avatar" />
                <AvatarFallback>
                  {user?.data?.name
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
                    <span className="text-sm font-medium">
                      {user?.data?.name}
                    </span>
                    <span className="text-xs font-normal text-muted-foreground">
                      {user?.data?.email}
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
          <Link href={"/login"}>Login</Link>
        )}
      </div>
    </header>
  )
}
