"use client"

import { Input } from "@base-ui/react"
import { Loader2, RotateCcw, Search, SlidersHorizontal } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useRef, useState, useTransition } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button"

export default function PropertyQueryInput() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const debounceReference = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isSearchPending, startSearchTransition] = useTransition()
  const [isPending, startTransition] = useTransition()
  const [text, setText] = useState(searchParams.get("searchTerm") ?? "")

  const [status, setStatus] = useState(searchParams.get("status") ?? "")
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") ?? "")
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") ?? "")
  const [amenities, setAmenities] = useState(
    searchParams.get("amenities") ?? ""
  )
  const [isOpen, setIsOpen] = useState(false)

  const handleSearch = (q: string) => {
    if (debounceReference.current) {
      clearTimeout(debounceReference.current)
    }

    debounceReference.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString())
      if (q.trim()) {
        params.set("searchTerm", q)
      } else {
        params.delete("searchTerm")
      }

      startSearchTransition(() => {
        router.push(`${pathname}?${params}`)
      })
    }, 500)
  }

  const handleApplyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())

    if (minPrice) params.set("minPrice", minPrice)
    else params.delete("minPrice")

    if (maxPrice) params.set("maxPrice", maxPrice)
    else params.delete("maxPrice")

    if (status && status !== "") params.set("status", status)
    else params.delete("status")

    if (amenities && amenities !== "") params.set("amenities", amenities.trim())
    else params.delete("amenities")

    params.delete("page")

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`)
      setIsOpen(false)
    })
  }

  const handleResetFilters = () => {
    setMinPrice("")
    setMaxPrice("")
    setStatus("")
    setAmenities("")

    const params = new URLSearchParams(searchParams.toString())
    params.delete("minPrice")
    params.delete("maxPrice")
    params.delete("status")
    params.delete("amenities")
    params.delete("page")

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`)
      setIsOpen(false)
    })
  }

  return (
    <div className="flex flex-col gap-8 border-b p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:w-72">
        <Search
          size={16}
          className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400"
        />
        <Input
          onChange={(e) => {
            setText(e.target.value)
            handleSearch(e.target.value)
          }}
          value={text}
          placeholder="Search by name or location..."
          className="w-full rounded-lg border py-2.5 pr-8 pl-9 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
        />
        {isSearchPending && (
          <Loader2 className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 animate-spin text-slate-400" />
        )}
      </div>
      <div className="flex items-center gap-2">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger
            render={
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 border-slate-200 py-4 text-slate-700 hover:bg-slate-50"
              >
                <SlidersHorizontal size={15} />
                <span>Filters</span>
              </Button>
            }
          />
          <PopoverContent className="w-80 space-y-4 p-5" align="end">
            <div className="flex items-center justify-between border-b pb-3">
              <h4 className="text-sm font-semibold text-slate-800">
                Filter Properties
              </h4>
              <Button
                onClick={handleResetFilters}
                variant="ghost"
                size="sm"
                className="flex h-auto items-center gap-1 p-0 text-xs text-rose-600 hover:bg-transparent hover:text-rose-700"
              >
                <RotateCcw size={12} />
                Reset
              </Button>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-600">
                Price Range (৳)
              </label>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full rounded-md border p-2 text-xs"
                />
                <span className="text-xs text-slate-400">-</span>
                <Input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full rounded-md border p-2 text-xs"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-600">
                Status
              </label>
              <Select
                value={status}
                onValueChange={(v) => {
                  setStatus(v as string)
                }}
              >
                <SelectTrigger className="h-9 w-full text-xs">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Status</SelectItem>
                  <SelectItem value="AVAILABLE">Available</SelectItem>
                  <SelectItem value="RENTED">Rented</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-600">
                Amenities
              </label>
              <Select
                value={amenities}
                onValueChange={(v) => {
                  setAmenities(v as string)
                }}
              >
                <SelectTrigger className="h-9 w-full text-xs">
                  <SelectValue placeholder="Select Amenities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Amenities</SelectItem>
                  <SelectItem value="Ac">Ac</SelectItem>
                  <SelectItem value="WiFi">WiFi</SelectItem>
                  <SelectItem value="Parking">Parking</SelectItem>
                  <SelectItem value="Swimming">Swimming </SelectItem>
                  <SelectItem value="Security">Security</SelectItem>
                </SelectContent>
              </Select>
            </div> */}

            <div className="pt-2">
              <Button
                onClick={handleApplyFilters}
                disabled={isPending}
                className="h-9 w-full bg-emerald-600 text-xs text-white hover:bg-emerald-700"
              >
                {isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Apply Filters"
                )}
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
