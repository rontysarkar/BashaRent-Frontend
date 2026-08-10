import RegisterForm from "@/components/auth/register-form"
import { HomeIcon } from "lucide-react"
import Link from "next/link"

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-8">
      <div className="animate-fade-in mb-8 text-center">
        <Link href="/" className="flex flex-col shrink-0 items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-sm">
            <HomeIcon
              className="size-5 text-white"
              strokeWidth={2.2}
              aria-hidden="true"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Basha<span className="text-blue-600">Rent</span>
          </span>
        </Link>
      </div>

      <div className="w-full max-w-md">
        <div className="space-y-6 rounded-2xl bg-white p-8 shadow-xl backdrop-blur">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              Create Account
            </h2>
            <p className="mt-1.5 text-sm text-slate-500">
              Create Your BashaRent Account
            </p>
          </div>

          <RegisterForm />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
          </div>

          <div className="text-center">
            <p className="mt-8 text-sm text-slate-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-slate-500">
        © 2026 BashaRent. All rights reserved.
      </p>
    </div>
  )
}
