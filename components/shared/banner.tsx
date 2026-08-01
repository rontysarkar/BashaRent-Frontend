import { getCategories } from "@/services/category.service"
import BannerButton from "./banner-button"
import { ShieldCheck, UserCheck } from "lucide-react"
export default async function Banner() {
  const categories = await getCategories()
  return (
    <div className="w-full border-y border-slate-200 px-5 py-8 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
          Find your home or Rent out your place
        </h1>

        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          RentNest makes it simple for landlords to post properties and for
          tenants to find verified rentals nearby.
        </p>
        <BannerButton categories={categories?.data} />
        <div className="mt-6 flex justify-center gap-6 border-t border-slate-200 pt-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck size={15} className="text-emerald-600" /> Verified
            Listings
          </span>
          <span className="flex items-center gap-1">
            <UserCheck size={15} className="text-blue-600" /> Direct Contact
          </span>
        </div>
      </div>
    </div>
  )
}
