import { TPaymentHistoryResponse } from "@/types/payment-history.types"
import {
  Building2,
  Calendar,
  CheckCircle2,
  CreditCard,
  Hash,
  Mail,
  MapPin,
  Star,
  User,
} from "lucide-react"
import { CreateReviewDialog } from "./create-reviews-dialog"

export default function PaymentHistoryCard({
  payment,
}: {
  payment: TPaymentHistoryResponse
}) {
  const { property } = payment?.rentalRequest
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }
  return (
    <div
      key={payment?.id}
      className="rounded-xl border bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md"
    >
      <div className="flex flex-col justify-between gap-3 border-b pb-4 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-lg bg-emerald-50 p-2.5 text-emerald-600 sm:mt-0">
            <Building2 size={22} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-800 sm:text-lg">
              {property?.title}
            </h3>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
              <MapPin size={13} className="shrink-0 text-slate-400" />
              {property?.location}
            </p>
          </div>
        </div>

        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          <CheckCircle2 size={14} />
          {payment?.status}
        </span>
      </div>

      <div className="my-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div>
          <span className="block text-xs font-medium text-slate-400">
            Amount Paid
          </span>
          <span className="text-lg font-bold text-slate-900">
            ৳{payment?.amount?.toLocaleString()}
          </span>
        </div>

        <div>
          <span className="block text-xs font-medium text-slate-400">
            Payment Date
          </span>
          <span className="mt-1 flex items-center gap-1 text-xs font-medium text-slate-700 sm:text-sm">
            <Calendar size={14} className="shrink-0 text-slate-400" />
            {formatDate(payment?.paidAt as string)}
          </span>
        </div>
        <div>
          <span className="block text-xs font-medium text-slate-400">
            Method
          </span>
          <span className="mt-1 flex items-center gap-1 text-xs font-medium text-slate-700 uppercase sm:text-sm">
            <CreditCard size={14} className="shrink-0 text-slate-400" />
            {payment?.provider}
          </span>
        </div>

        <div>
          <span className="block text-xs font-medium text-slate-400">
            Transaction ID
          </span>
          <span
            title={payment?.transactionId}
            className="mt-1 flex max-w-[140px] items-center gap-1 truncate font-mono text-xs text-slate-600"
          >
            <Hash size={13} className="shrink-0 text-slate-400" />
            {payment?.transactionId}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-3 text-xs text-slate-500">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <User size={13} className="text-slate-400" />
            <span>
              Landlord:{" "}
              <strong className="font-medium text-slate-700">
                {property?.landlord?.name}
              </strong>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Mail size={13} className="text-slate-400" />
            <span>{property?.landlord?.email}</span>
          </div>
        </div>

        {payment?.status?.toLowerCase() === "completed" && (
          <CreateReviewDialog propertyId={payment?.rentalRequest?.property?.id}/>
        )}
      </div>
    </div>
  )
}
