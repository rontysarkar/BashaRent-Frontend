import { getAdminStats } from "@/actions/admin/admin.action"
import { Ban, Building2, RotateCwFadingClock, Users } from "lucide-react"

type TAdminDashboardStats = {
  totalUser: number
  totalProperty: number
  pendingRequests: number
  bannedUsers: number
}

export default async function AdminPage() {
  const res = await getAdminStats()
  const result: TAdminDashboardStats = res?.success ? res?.data : []
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Platform Overview</h1>
        <p className="mt-1 text-sm text-slate-500">
          Monitor your platform&apos;s growth and recent activities.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
              <Users size={28} className="text-blue-600" />
            </div>
          </div>
          <h2 className="mt-6 text-4xl font-bold text-slate-800">
            {result?.totalUser}
          </h2>
          <p className="mt-2 text-sm font-medium text-slate-500">Total Users</p>
          <p className="mt-1 text-xs text-slate-400">
            Active platform accounts
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50">
              <Building2 size={28} className="text-amber-600" />
            </div>
          </div>
          <h2 className="mt-6 text-4xl font-bold text-slate-800">
            {result?.totalProperty}
          </h2>
          <p className="mt-2 text-sm font-medium text-slate-500">
            Total Properties
          </p>
          <p className="mt-1 text-xs text-slate-400">Listed rental places</p>
        </div>

        <div className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50">
              <RotateCwFadingClock size={28} className="text-green-600" />
            </div>
          </div>
          <h2 className="mt-6 text-4xl font-bold text-slate-800">
            {result?.pendingRequests}
          </h2>
          <p className="mt-2 text-sm font-medium text-slate-500">
            Pending Requests
          </p>
          <p className="mt-1 text-xs text-slate-400">Awaiting admin approval</p>
        </div>
        <div className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50">
              <Ban size={28} className="text-red-600" />
            </div>
          </div>
          <h2 className="mt-6 text-4xl font-bold text-slate-800">
            {result?.bannedUsers}
          </h2>
          <p className="mt-2 text-sm font-medium text-slate-500">
            Banned Users
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Suspended or restricted accounts
          </p>
        </div>
      </div>
    </div>
  )
}
