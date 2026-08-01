import { getLandlordDashboardStats } from "@/actions/landlord/landlord.action"
import { Building2, ClipboardList, Wallet } from "lucide-react"

export default async function page() {
  const res = await getLandlordDashboardStats();
  const result = res?.success ? res?.data : [];
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-slate-500">
          A quick summary of your properties and activity
        </p>
      </div>


      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        <div className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
              <Building2 size={28} className="text-blue-600" />
            </div>
          </div>
          <h2 className="mt-6 text-4xl font-bold text-slate-800">{result?.totalProperties}</h2>
          <p className="mt-2 text-sm font-medium text-slate-500">
            Total Properties
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Listings currently on the platform
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50">
              <ClipboardList size={28} className="text-amber-600" />
            </div>
          </div>
          <h2 className="mt-6 text-4xl font-bold text-slate-800">{result?.activeRequests}</h2>
          <p className="mt-2 text-sm font-medium text-slate-500">
            Active Requests
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Requests waiting for your response
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50">
              <Wallet size={28} className="text-green-600" />
            </div>
          </div>
          <h2 className="mt-6 text-4xl font-bold text-slate-800">৳{result?.totalEarnings}</h2>
          <p className="mt-2 text-sm font-medium text-slate-500">
            Total Earnings
          </p>
          <p className="mt-1 text-xs text-slate-400">
            From completed payments
          </p>
        </div>
      </div>
    </div>
  )
}
