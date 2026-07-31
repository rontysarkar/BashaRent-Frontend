import { MenuItems } from "@/types/common.types"
import { UserRole } from "@/types/user.types"
import {
  Building,
  Building2,
  ClipboardCheck,
  CreditCard,
  FileClock,
  LayoutDashboard,
  Star,
  Tags,
  UserCog,
  Users,
} from "lucide-react"

export const tenantMenu = [
  {
    title: "Dashboard",
    url: "/tenant-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Browse Properties",
    url: "/properties",
    icon: Building2,
  },
  {
    title: "Payments",
    url: "/tenant-dashboard/payments",
    icon: CreditCard,
  },
  {
    title: "My Reviews",
    url: "/tenant-dashboard/my-reviews",
    icon: Star,
  },
  {
    title: "Profile",
    url: "/tenant-dashboard/profile",
    icon: UserCog,
  },
]

export const landlordMenu = [
  {
    title: "Dashboard",
    url: "/landlord-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Properties",
    url: "/landlord-dashboard/my-properties",
    icon: Building2,
  },
  {
    title: "Rental Request",
    url: "/landlord-dashboard/rental-request",
    icon: ClipboardCheck,
  },
  {
    title: "Profile",
    url: "/landlord-dashboard/profile",
    icon: UserCog,
  },
]

export const adminMenu = [
  {
    title: "Dashboard",
    url: "/admin-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "User Management",
    url: "/admin-dashboard/users",
    icon: Users,
  },
  {
    title: "Properties",
    url: "/admin-dashboard/properties",
    icon: Building,
  },
  {
    title: "Rental Requests (All)",
    url: "/admin-dashboard/rental-requests",
    icon: FileClock,
  },
  {
    title: "Categories",
    url: "/admin-dashboard/categories",
    icon: Tags,
  },
  {
    title: "Profile",
    url: "/admin-dashboard/profile",
    icon: UserCog,
  },
]



export const menuConfig: Record<UserRole, MenuItems[]> = {
  TENANT: tenantMenu,
  LANDLORD: landlordMenu,
  ADMIN: adminMenu,
}
