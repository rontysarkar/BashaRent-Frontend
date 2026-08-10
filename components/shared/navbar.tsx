import Link from "next/link"
import NavbarDropdownMenu from "./navbar-dropdown-menu"
import { HomeIcon } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-sm">
            <HomeIcon
              className="size-5 text-white"
              strokeWidth={2.2}
              aria-hidden="true"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Basha<span className="text-blue-600">Rent</span>
          </span>
        </Link>
        <div className="flex-1" />
        <NavbarDropdownMenu />
      </div>
    </header>
  )
}
