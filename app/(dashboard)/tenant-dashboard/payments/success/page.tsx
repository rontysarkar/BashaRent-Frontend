
import { CheckCircle2, History, Home } from "lucide-react"


import SuccessPageButton from "@/components/tenant/success-page-button"

export default function PaymentSuccessPage() {
  
  return (
    <div className="flex w-full max-w-7xl items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-2xl border bg-white p-6 text-center shadow-sm sm:p-8">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 size={40} className="animate-bounce" />
        </div>

        <h1 className="text-2xl font-bold text-slate-900">
          Payment Successful!
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Thank you for your payment. Your booking request has been confirmed.
        </p>

        <div className="my-6 space-y-2 rounded-xl border bg-slate-50 p-4 text-left">
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-slate-500">Status</span>
            <span className="font-semibold text-emerald-600">Completed</span>
          </div>
        </div>

        <SuccessPageButton/>
      </div>
    </div>
  )
}
