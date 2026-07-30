import Link from "next/link";
import { Search, PlusCircle, ShieldCheck, UserCheck } from "lucide-react";

export default function Banner() {
  return (
    <div className="w-full  border-y border-slate-200  px-5 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-2xl text-center">
        
        <h1 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
          Find your home or rent out your place
        </h1>

        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          RentNest makes it simple for landlords to post properties and for tenants to find verified rentals nearby.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <Search size={16} />
            Browse Homes
          </Link>

          <Link
            href="/list-property"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            <PlusCircle size={16} className="text-blue-600" />
            Post Property
          </Link>
        </div>

        <div className="mt-6 flex justify-center gap-6 border-t border-slate-200 pt-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck size={15} className="text-emerald-600" /> Verified Listings
          </span>
          <span className="flex items-center gap-1">
            <UserCheck size={15} className="text-blue-600" /> Direct Contact
          </span>
        </div>

      </div>
    </div>
  );
}