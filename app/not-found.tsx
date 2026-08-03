import Link from "next/link"
import { ArrowLeft, Home, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[85vh] flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-emerald-600 shadow-sm">
          <Building2 size={40} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-widest text-emerald-600 uppercase">
            404 Error
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Page Not Found
          </h1>
          <p className="text-sm leading-relaxed text-slate-500">
            Sorry, the page you are looking for doesn’t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/">
            <Button className="flex h-10 items-center gap-2 bg-emerald-600 px-5 text-sm text-white hover:bg-emerald-700">
              <Home size={16} />
              <span>Back to Home</span>
            </Button>
          </Link>

          <Link href="/properties">
            <Button
              variant="outline"
              className="flex h-10 items-center gap-2 border-slate-200 px-5 text-sm text-slate-700 hover:bg-slate-50"
            >
              <ArrowLeft size={16} />
              <span>Browse Properties</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
