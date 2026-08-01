import { TTenantRentalRequestResponse } from "@/types/response.types"
import { Calendar, Mail, User } from "lucide-react"
import PaymentButton from "./payment-button"

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

export function TenantRequestsCard({
  request,
}: {
  request: TTenantRentalRequestResponse
}) {
  return (
    <div className="flex h-full flex-col rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-slate-800">
          {request.property.title}
        </h3>
        <div className="flex flex-col items-end gap-1">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${statusStyles[request.status]}`}
          >
            {request.status}
          </span>
        </div>
      </div>

      <p className="mt-1 text-sm font-medium text-slate-700">
        ৳{request.property.price.toLocaleString()}
        <span className="font-normal text-slate-400"> / month</span>
      </p>

      <div className="my-3 border-t" />

      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <User size={14} />
          <span>{request?.property?.landlord?.name}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Mail size={14} />
          <span>{request?.property?.landlord?.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Calendar size={14} />
          <span>Requested on {formatDate(request.createdAt)}</span>
        </div>
      </div>

      <div className="mt-4 pt-2">
        {request?.property?.status === "RENTED" ? (
          <div className="rounded-md border border-amber-200 bg-amber-50 p-2.5 text-center">
            <p className="text-xs font-medium text-amber-800">
              Already booked by someone else
            </p>
          </div>
        ) : request.status === "APPROVED" ? (
          <PaymentButton rentalRequestId={request?.id} className="w-full" />
        ) : request.status === "PENDING" ? (
          <div className="rounded-md border border-blue-100 bg-blue-50 p-2.5 text-center">
            <p className="text-xs font-medium text-blue-700">
              Waiting for landlord approval
            </p>
          </div>
        ) : request.status === "REJECTED" ? (
          <div className="rounded-md border border-red-100 bg-red-50 p-2.5 text-center">
            <p className="text-xs font-medium text-red-700">
              Request rejected by landlord
            </p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
