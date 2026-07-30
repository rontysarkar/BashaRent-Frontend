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
import { IPropertyResponse } from "@/types/property.types"






export default async function FeaturedPropertiesSection() {
  const properties = await getProperties();
  
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
          {properties?.data.slice(0,4).map((property:IPropertyResponse) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  )
}
