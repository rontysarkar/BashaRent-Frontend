// "use client"


import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Building2,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"
import PropertyCard from "./property-card"
import { Button } from "../ui/button"
import { getProperties } from "@/services/propertiy.service"

// 1. Type Definitions
export interface Property {
  id: string
  title: string
  price: number
  location: string
  status: string
  amenities: string
  description: string
  landlordId: string
  categoryId: string
  createdAt: string
  updatedAt: string
  image?: string | null
  category?: {
    name: string
  }
}

// Mock Data Example
const sampleProperties: Property[] = [
  {
    id: "df4051db-7030-480e-bbf0-494a37774c93",
    title: "Modern Office Space",
    price: 55000,
    location: "Gulshan, Dhaka",
    status: "AVAILABLE",
    amenities: "Generator, Parking, CCTV, WiFi, AC",
    description:
      "Fully furnished office space with high-speed internet and conference room.",
    landlordId: "1b901838-975a-4df8-8389-f5bfbca6eb1d",
    categoryId: "4073692d-b650-4b33-9ce0-76251844bfc0",
    createdAt: "2026-07-09T15:52:54.989Z",
    updatedAt: "2026-07-09T15:52:54.989Z",
    image: null, // Fallback placeholder test
    category: {
      name: "Office Space",
    },
  },
  {
    id: "a1b2c3d4-e5f6-7890-abcd-1234567890ab",
    title: "Family Apartment Rent",
    price: 25000,
    location: "Mirpur 12, Dhaka",
    status: "AVAILABLE",
    amenities: "Lift, Generator, Parking, Gas",
    description:
      "Spacious 3 bedroom apartment near Metro Station with 24/7 security.",
    landlordId: "1b901838-975a-4df8-8389-f5bfbca6eb1d",
    categoryId: "4073692d-b650-4b33-9ce0-76251844bfc0",
    createdAt: "2026-07-09T15:52:54.989Z",
    updatedAt: "2026-07-09T15:52:54.989Z",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    category: {
      name: "Apartment",
    },
  },
]

export default async function FeaturedPropertiesSection() {
  const properties = await getProperties();
  console.log(properties)
  return (
    <div className="bg-slate-50/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex  justify-between items-center">
          <div className="">
            <h2 className="mt-1 text-xl font-bold text-slate-800 sm:text-3xl">
              Featured Properties
            </h2>
            <p className="mt-1 text-xs  tracking-wide text-slate-500 uppercase sm:text-sm">
              Browse the best available listings
            </p>
          </div>
          <div className=" border rounded-md">
            <Button variant={"ghost"} ><Link
              href="/properties"
              className="inline-flex items-center gap-2"
            >
              Browse All
              <ArrowRight/>
            </Link></Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {properties?.data.slice(0,4).map((property:Property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  )
}
