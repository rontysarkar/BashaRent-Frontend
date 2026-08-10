import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Heart,
} from "lucide-react"
import PropertyDetailsImageBox from "./property-details-image-box"
import { PropertyDetailsResponse } from "@/types/property.types"
import PropertyDetailsButton from "./property-details-button"

interface PropertyDetailsProps {
  property: PropertyDetailsResponse
}

export default async function PropertyDetails({
  property,
}: PropertyDetailsProps) {
  const amenityList = property.amenities
    ? property.amenities
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : []

  const formattedDate = new Date(property.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  )

  return (
    <div className="bg-slate-50/50 py-8 text-slate-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            <span>Back to Listings</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            >
              <Share2 size={18} />
            </button>
            <button
              type="button"
              className="rounded-lg border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-50 hover:text-rose-600"
            >
              <Heart size={18} />
            </button>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                  {property.category?.name || "Property"}
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  <ShieldCheck size={14} />
                  {property.status}
                </span>
              </div>

              <h1 className="mt-3 text-xl font-bold text-slate-900 sm:text-2xl">
                {property.title}
              </h1>

              <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin size={16} className="shrink-0 text-blue-600" />
                <span>{property.location}</span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-left md:text-right">
              <span className="text-xs font-medium text-slate-500">
                Rent Price
              </span>
              <div className="text-2xl font-extrabold text-slate-900">
                {(property.price ?? 0).toLocaleString("en-IN")}{" "}
                <span className="text-sm font-semibold text-blue-600">BDT</span>
                <span className="text-xs font-normal text-slate-500">
                  {" "}
                  / month
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <PropertyDetailsImageBox
              url={property?.photo as string}
              title={property?.title as string}
            />

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900">Description</h2>
              <p className="mt-3 text-sm leading-relaxed whitespace-pre-line text-slate-600">
                {property.description}
              </p>
            </div>

            {amenityList.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <h2 className="text-lg font-bold text-slate-900">
                  Amenities & Features
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {amenityList.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2.5 text-xs font-medium text-slate-700"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-emerald-600"
                      />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-900">
                Landlord Details
              </h3>

              <div className="mt-4 flex items-center gap-3">
                <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-100 text-slate-500">
                  {property.landlord?.profilePhoto ? (
                    <Image
                      src={property.landlord.profilePhoto}
                      alt={property.landlord.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <User size={24} />
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-800 capitalize">
                    {property.landlord?.name || "Landlord"}
                  </h4>
                  <span className="text-xs text-slate-500">Property Owner</span>
                </div>
              </div>

              {property.landlord?.bio && (
                <p className="mt-3 text-xs text-slate-600 italic">
                  {property.landlord.bio}
                </p>
              )}

              <PropertyDetailsButton
                propertyStatus={property?.status}
                propertyId={property?.id}
              />
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900">
                Property Information
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4">
                <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
                  <Calendar size={18} className="text-blue-600" />
                  <div>
                    <p className="text-[11px] font-medium text-slate-400">
                      Listed Date
                    </p>
                    <p className="text-xs font-semibold text-slate-700">
                      {formattedDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
                  <Building2 size={18} className="text-blue-600" />
                  <div>
                    <p className="text-[11px] font-medium text-slate-400">
                      Category
                    </p>
                    <p className="text-xs font-semibold text-slate-700">
                      {property.category?.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
