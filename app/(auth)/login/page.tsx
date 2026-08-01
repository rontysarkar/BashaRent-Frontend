import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center px-4 py-8">

      <div className="mb-8 text-center animate-fade-in">
        <div className="inline-flex items-center justify-center mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
            <span className="text-white font-bold text-lg">R</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Rent Nest</h1>
        <p className="text-xs text-slate-500 tracking-widest mt-1.5 font-medium">PROPERTY RENT SOLUTION</p>
      </div>


      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6 backdrop-blur">

          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Login</h2>
            <p className="text-slate-500 text-sm mt-1.5">Welcome back to the RentNest</p>
          </div>


          <LoginForm/>

          <div className="relative ">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
          </div>

  
          <div className="text-center ">
            <p className="text-sm text-slate-600 mt-8">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-slate-500 text-xs mt-8">© 2026 RENT NEST. All rights reserved.</p>
    </div>
  )
}
