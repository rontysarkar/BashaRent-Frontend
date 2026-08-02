import Link from "next/link"
import { XCircle, ArrowLeft, RefreshCw, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PaymentCancelPage() {
  return (
    <div className="flex  max-h-[70vh] min-h-[80vh] mx-auto max-w-7xl items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-6 text-center shadow-sm sm:p-8">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <XCircle size={40} />
        </div>

        <h1 className="text-2xl font-bold text-slate-900">Payment Cancelled</h1>
        <p className="mt-2 text-sm text-slate-500">
          You have cancelled the payment process. Don&apos;t worry, no charges
          were made to your account.
        </p>
        <div className="my-6 space-y-2 rounded-xl border bg-slate-50 p-4 text-left text-xs text-slate-600">
          <div className="flex items-start gap-2">
            <HelpCircle size={16} className="mt-0.5 shrink-0 text-slate-400" />
            <p>
              If this was a mistake or your session timed out, you can safely
              try making the payment again from your booking requests.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <Link
            href="/tenant-dashboard/my-requests"
            className="flex items-center justify-center gap-2"
          >
            <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">
              <RefreshCw size={16} />
              Try Again
            </Button>
          </Link>

          <Link href="/" className="flex items-center justify-center gap-2">
            <Button variant="outline" className="w-full">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
