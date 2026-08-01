import { TRentalRequestResponse } from "@/types/response.types"
import { Calendar, Mail, User } from "lucide-react"
import RentalRequestCardButton from "./rental-request-card-button"

const statusStyles = {
  PENDING: "bg-amber-50 text-amber-700 border border-amber-200",
  APPROVED: "bg-green-50 text-green-700 border border-green-200",
  REJECTED: "bg-red-50 text-red-700 border border-red-200",
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export function RentalRequestCard({
  request,
}: {
  request: TRentalRequestResponse
}) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-slate-800">
          {request.property.title}
        </h3>
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${statusStyles[request.status]}`}
        >
          {request.status}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium text-slate-700">
        ৳{request.property.price.toLocaleString()}
        <span className="font-normal text-slate-400"> / month</span>
      </p>

      <div className="my-3 border-t" />

      <div className="space-y-1">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <User size={14} />
          <span>{request.tenant.name}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Mail size={14} />
          <span>{request.tenant.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Calendar size={14} />
          <span>Requested on {formatDate(request.createdAt)}</span>
        </div>
      </div>

      <RentalRequestCardButton
        rentalRequestId={request?.id}
        status={request?.status}
      />
    </div>
  )
}
