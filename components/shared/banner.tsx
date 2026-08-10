
import { getCategories } from "@/services/category.service"
import BannerButton from "./banner-button"
import { ShieldCheck, UserCheck, Sparkles, Home, Key } from "lucide-react"

export default async function Banner() {
  const categories = await getCategories()

  return (
    <div className="relative w-full overflow-hidden border-b border-slate-200 bg-slate-50 px-5 py-20 sm:px-8 sm:py-28">
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 animate-[float_8s_ease-in-out_infinite] rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-1/4 h-72 w-72 animate-[float_10s_ease-in-out_infinite_1s] rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 animate-[float_9s_ease-in-out_infinite_0.5s] rounded-full bg-amber-100/30 blur-3xl" />

      <div className="pointer-events-none absolute top-24 left-[8%] hidden animate-[floatSlow_6s_ease-in-out_infinite] rounded-2xl border border-slate-200 bg-white p-3 shadow-lg lg:block">
        <Home size={22} className="text-blue-600" />
      </div>
      <div className="pointer-events-none absolute top-40 right-[10%] hidden animate-[floatSlow_7s_ease-in-out_infinite_1s] rounded-2xl border border-slate-200 bg-white p-3 shadow-lg lg:block">
        <Key size={22} className="text-emerald-600" />
      </div>
      <div className="pointer-events-none absolute bottom-28 left-[15%] hidden animate-[floatSlow_5.5s_ease-in-out_infinite_0.5s] rounded-2xl border border-slate-200 bg-white p-3 shadow-lg lg:block">
        <ShieldCheck size={22} className="text-blue-600" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-blue-700 shadow-sm backdrop-blur-sm">
          <Sparkles size={12} className="animate-pulse" />
          Trusted by tenants & landlords
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Find your home or{" "}
          <span className="relative inline-block text-blue-600">
            rent out
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 200 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6C40 2 160 2 198 6"
                stroke="#2563eb"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.4"
              />
            </svg>
          </span>{" "}
          your place
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          BashaRent makes it simple for landlords to post properties and for
          tenants to find verified rentals nearby.
        </p>

        <div className="mt-9">
          <BannerButton categories={categories?.data} />
        </div>

        <div className="mx-auto mt-10 flex max-w-sm items-center justify-center gap-8 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:text-sm">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-emerald-600" />
            Verified Listings
          </span>
          <span className="h-4 w-px bg-slate-200" />
          <span className="flex items-center gap-1.5">
            <UserCheck size={16} className="text-blue-600" />
            Direct Contact
          </span>
        </div>
      </div>
    </div>
  )
}
