

import { getAllUsers } from "@/actions/admin/admin.action"
import UserTable from "@/components/admin/user-table"
import { IUserData } from "@/types/user.types"
import { ShieldAlert, UserCheck, Users } from "lucide-react"



export default async function UsersPage() {
  const res = await getAllUsers()
  const result: IUserData[] = res?.success ? res?.data : []

  const totalUsers = result.length
  const activeUsers = result.filter(
    (u) => u.status === "ACTIVE"
  ).length
  const bannedUsers = result.filter(
    (u) => u.status === "BANNED"
  ).length

  return (
    <div className="space-y-6 p-6 lg:ml-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          User Management
        </h1>
        <p className="text-sm text-slate-500">
          Manage user accounts, view status, and update account permissions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm">
          <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
            <Users size={20} />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Total Users</p>
            <h3 className="text-xl font-bold text-slate-900">{totalUsers}</h3>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm">
          <div className="rounded-lg bg-emerald-50 p-3 text-emerald-600">
            <UserCheck size={20} />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Active Users</p>
            <h3 className="text-xl font-bold text-slate-900">{activeUsers}</h3>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm">
          <div className="rounded-lg bg-rose-50 p-3 text-rose-600">
            <ShieldAlert size={20} />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Banned Users</p>
            <h3 className="text-xl font-bold text-slate-900">{bannedUsers}</h3>
          </div>
        </div>
      </div>

      <UserTable users={result}/>
    </div>
  )
}