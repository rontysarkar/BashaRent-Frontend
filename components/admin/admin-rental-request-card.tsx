import { TAdminRentalRequestResponse } from "@/types/response.types"
import { Card, CardContent, CardHeader } from "../ui/card"
import {
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  User,
  UserCheck,
  XCircle,
} from "lucide-react"
import { TRentalRequestStatus } from "@/types/common.types"
import { Badge } from "@/components/ui/badge"

const getStatusBadge = (status: TRentalRequestStatus) => {
  switch (status) {
    case "PENDING":
      return (
        <Badge
          variant="outline"
          className="flex items-center gap-1 border-amber-200 bg-amber-50 font-medium text-amber-700"
        >
          <Clock size={12} />
          Pending
        </Badge>
      )
    case "APPROVED":
      return (
        <Badge
          variant="outline"
          className="flex items-center gap-1 border-emerald-200 bg-emerald-50 font-medium text-emerald-700"
        >
          <CheckCircle2 size={12} />
          Approved
        </Badge>
      )
    case "REJECTED":
      return (
        <Badge
          variant="outline"
          className="flex items-center gap-1 border-rose-200 bg-rose-50 font-medium text-rose-700"
        >
          <XCircle size={12} />
          Rejected
        </Badge>
      )
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export default function AdminRentalRequestCard({
  request,
}: {
  request: TAdminRentalRequestResponse
}) {
  return (
    <Card className="flex flex-col justify-between overflow-hidden border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
      <div>
        <CardHeader className="border-b bg-slate-50/60 p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-emerald-600 uppercase">
                <Building2 size={14} />
                <span>Property</span>
              </div>
              <h3
                className="line-clamp-1 text-base font-semibold text-slate-900"
                title={request?.property?.title}
              >
                {request?.property?.title}
              </h3>
            </div>
            {getStatusBadge(request?.status)}
          </div>

          <div className="mt-2 flex items-center gap-1 text-sm font-bold text-slate-800">
            <DollarSign size={15} className="text-slate-500" />
            <span>৳{request?.property?.price?.toLocaleString()}</span>
            <span className="text-xs font-normal text-slate-500">/ month</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 p-4 text-xs">
          <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
            <div className="mb-1 flex items-center gap-1.5 font-medium text-slate-500">
              <User size={13} className="text-blue-500" />
              <span>Requested By (Tenant)</span>
            </div>
            <p className="text-sm font-semibold text-slate-800">
              {request?.tenant?.name}
            </p>
          </div>

          <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
            <div className="mb-1 flex items-center gap-1.5 font-medium text-slate-500">
              <UserCheck size={13} className="text-emerald-500" />
              <span>Property Owner (Landlord)</span>
            </div>
            <p className="text-sm font-semibold text-slate-800">
              {request?.property?.landlord?.name}
            </p>
            <p className="text-[11px] text-slate-500">
              {request?.property?.landlord?.email}
            </p>
          </div>
        </CardContent>
      </div>

      <div className="flex items-center justify-between border-t bg-slate-50/30 px-4 py-2.5 text-[11px] text-slate-400">
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          Requested on:
        </span>
        <span className="font-medium text-slate-600">
          {formatDate(request?.createdAt)}
        </span>
      </div>
    </Card>
  )
}
