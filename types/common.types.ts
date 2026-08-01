import { LucideIcon } from "lucide-react"

export type TRentalRequestStatus = "PENDING" | "APPROVED" | "REJECTED"

export type MenuItems = {
  title: string
  url: string
  icon: LucideIcon
}
