import Link from "next/link"
import { CheckCircle2, History, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PaymentSuccessPage() {
  return (
    <div className="flex  max-w-7xl w-full  items-center justify-center p-4">
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

        <div className="flex flex-col gap-2.5">
          <Link
            href="/tenant-dashboard/payments"
            className="flex items-center justify-center gap-2"
          >
            <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-700">
              <History size={16} />
              View Payment History
            </Button>
          </Link>

          <Link href="/" className="flex items-center justify-center gap-2">
            <Button variant="outline" className="w-full">
              <Home size={16} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
