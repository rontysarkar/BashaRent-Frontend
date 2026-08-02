import { getTenantPaymentHistory } from "@/actions/tenant/tenant.action"
import PaymentHistoryCard from "@/components/tenant/payment-history-card"
import { TPaymentHistoryResponse } from "@/types/payment-history.types"
import { CreditCard } from "lucide-react"

export default async function PaymentHistoryPage() {
  const res = await getTenantPaymentHistory()
  const payments = res?.success ? res?.data : []

  return (
    <div className=" md:ml-8 max-w-5xl space-y-6 p-4 sm:p-6">
      <div className="flex flex-col gap-1 border-b pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Payment History
        </h1>
        <p className="text-sm text-slate-500">
          View and manage all your completed transactions and rental payments.
        </p>
      </div>
      {payments.length === 0 ? (
        <div className="rounded-xl border border-dashed bg-slate-50 py-12 text-center">
          <CreditCard className="mx-auto h-12 w-12 text-slate-400" />
          <h3 className="mt-2 text-sm font-semibold text-slate-900">
            No payments found
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            You haven&apos;t made any rental payments yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {payments.map((payment: TPaymentHistoryResponse) => {
            return <PaymentHistoryCard key={payment.id} payment={payment} />
          })}
        </div>
      )}
    </div>
  )
}
