import Link from "next/link"
import NavbarDropdownMenu from "./navbar-dropdown-menu"
import { HomeIcon } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center justify-center gap-1 text-lg font-bold tracking-tight"
        >
          <HomeIcon
            color="green"
            className="size-6 text-primary"
            aria-hidden="true"
          />
          <span className="text-2xl font-bold sm:inline">
            Rent<span className="text-green-700">Nest</span>
          </span>
        </Link>
        <div className="flex-1" />
        <NavbarDropdownMenu />
      </div>
    </header>
  )
}
