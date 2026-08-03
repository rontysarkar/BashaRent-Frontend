import { Building2, Home } from "lucide-react"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50/90 backdrop-blur-md">
      <div className="relative flex flex-col items-center">

        <div className="relative flex items-center justify-center">
          <div className="absolute h-24 w-24 animate-ping rounded-full bg-emerald-500/10 duration-1000" />
          <div className="absolute h-16 w-16 animate-pulse rounded-full bg-emerald-500/20" />


          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/25">
            <Building2 className="h-8 w-8 animate-bounce" />
          </div>


          <div className="absolute -right-2 -top-1 flex h-7 w-7 animate-pulse items-center justify-center rounded-full bg-amber-500 text-white shadow-md">
            <Home className="h-4 w-4" />
          </div>
        </div>


        <div className="mt-6 flex flex-col items-center space-y-3">
          <h2 className="text-xl font-bold tracking-tight text-slate-800">
            Rent<span className="text-emerald-600">Nest</span>
          </h2>

          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <span>Finding available properties</span>
            <span className="flex gap-0.5">
              <span className="h-1 w-1 animate-bounce rounded-full bg-emerald-600 [animation-delay:-0.3s]" />
              <span className="h-1 w-1 animate-bounce rounded-full bg-emerald-600 [animation-delay:-0.15s]" />
              <span className="h-1 w-1 animate-bounce rounded-full bg-emerald-600" />
            </span>
          </div>

          <div className="h-1 w-32 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  )
}