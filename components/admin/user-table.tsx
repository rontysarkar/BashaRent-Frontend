"use client"
import { IUserData } from "@/types/user.types"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react"

import UserTableRow from "./user-table-row"

type userRole = "LANDLORD" | "TENANT" | "ADMIN" | "ALL"
type userStats = "ACTIVE" | "BANNED" | "ALL"

export default function UserTable({ users }: { users: IUserData[] }) {
  const [status, setStatus] = useState<userStats>("ALL")
  const [role, setRole] = useState<userRole>("ALL")
  const [search, setSearch] = useState("")

  const filteredUsers = users.filter((user) => {
    const matchStatus = status === "ALL" || user.status == status
    const matchRole = role === "ALL" || user.role === role
    const matchSearch =
      user?.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())

    return matchRole && matchSearch && matchStatus
  })

  return (
    <div className="rounded-xl border bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-72">
          <Search
            size={16}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400"
          />
          <Input
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 text-xs"
          />
        </div>

        <div className="flex items-center gap-2">
          <Select
            value={status}
            onValueChange={(value) => {
              if (value) {
                setStatus(value as userStats)
              }
            }}
            defaultValue="ALL"
          >
            <SelectTrigger className="w-[140px] text-xs">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Status</SelectItem>
              <SelectItem value="ACTIVE">Active</SelectItem>
              <SelectItem value="BANNED">Banned</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={role}
            onValueChange={(value) => {
              if (value) {
                setRole(value as userRole)
              }
            }}
          >
            <SelectTrigger className="w-[140px] text-xs">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Roles</SelectItem>
              <SelectItem value="TENANT">Tenant</SelectItem>
              <SelectItem value="LANDLORD">Landlord</SelectItem>
              <SelectItem value="ADMIN">Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Table>
        <TableHeader className="bg-slate-50/50">
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers?.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                className="h-32 text-center text-sm text-slate-500"
              >
                No users found.
              </TableCell>
            </TableRow>
          ) : (
            filteredUsers?.map((user: IUserData) => (
              <UserTableRow key={user.id} user={user} />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
