import { getAllRentalRequest } from "@/actions/admin/admin.action"
import { TAdminRentalRequestResponse } from "@/types/response.types"
import AdminRentalRequestCard from "@/components/admin/admin-rental-request-card"
import { BookCheck, RotateCwFadingClock, ShieldAlert, UserCheck, Users } from "lucide-react"

export default async function AdminRentalRequestsPage() {
  const res = await getAllRentalRequest()
  const requests: TAdminRentalRequestResponse[] = res?.success ? res?.data : []

  // const totalPending = requests?.filter((r)=> r.status === 'PENDING').length;
  // const totalApprove = requests?.filter((r)=>r.status === 'APPROVED').length;
  // const totalRejected = requests?.filter((r)=>r.status === 'REJECTED').length

  const { totalPending, totalApprove, totalRejected } = (requests || []).reduce(
    (acc, r) => {
      if (r.status === "PENDING") acc.totalPending++
      else if (r.status === "APPROVED") acc.totalApprove++
      else if (r.status === "REJECTED") acc.totalRejected++
      return acc
    },
    { totalPending: 0, totalApprove: 0, totalRejected: 0 }
  )

  return (
    <div className="space-y-6 p-6 md:ml-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Rental Requests
        </h1>
        <p className="text-sm text-slate-500">
          Overview of all property rental applications submitted by tenants.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm">
          <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
            <RotateCwFadingClock size={20} />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Total Pending</p>
            <h3 className="text-xl font-bold text-slate-900">{totalPending}</h3>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm">
          <div className="rounded-lg bg-emerald-50 p-3 text-emerald-600">
            <BookCheck size={20} />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Total Approved</p>
            <h3 className="text-xl font-bold text-slate-900">{totalApprove}</h3>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm">
          <div className="rounded-lg bg-rose-50 p-3 text-rose-600">
            <ShieldAlert size={20} />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Total Rejected</p>
            <h3 className="text-xl font-bold text-slate-900">{totalRejected}</h3>
          </div>
        </div>
      </div>

      {requests.length === 0 ? (
        <div className="flex h-40 items-center justify-center rounded-xl border border-dashed bg-white text-sm text-slate-500">
          No rental requests found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {requests.map((request: TAdminRentalRequestResponse) => (
            <AdminRentalRequestCard key={request.id} request={request} />
          ))}
        </div>
      )}
    </div>
  )
}
