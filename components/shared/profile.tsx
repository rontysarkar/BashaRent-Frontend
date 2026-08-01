"use client"

import { Mail, Calendar, Shield, User as UserIcon, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { IUserData } from "@/types/user.types"

const statusStyles: Record<string, string> = {
  ACTIVE: "bg-green-50 text-green-700 border border-green-200",
  BANNED: "bg-red-50 text-red-700 border border-red-200",
}

const roleStyles: Record<string, string> = {
  LANDLORD: "bg-blue-50 text-blue-700 border border-blue-200",
  TENANT: "bg-purple-50 text-purple-700 border border-purple-200",
  ADMIN: "bg-slate-100 text-slate-700 border border-slate-300",
}

function formatDate(dateString?: string) {
  if (!dateString) return "N/A"
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return "N/A"
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default function Profile({ user }: { user: IUserData }) {
  const name = user?.name || "Unknown User"
  const email = user?.email || "No email provided"
  const role = user?.role || "N/A"
  const status = user?.status || "N/A"
  const bio = user?.bio
  const profilePhoto = user?.profilePhoto
  return (
    <div className="p-6 lg:p-10">
      <div className="mb-8 lg:mb-10">
        <h1 className="text-2xl font-bold text-slate-800 lg:text-3xl">
          My Profile
        </h1>
        <p className="mt-1 text-sm text-slate-500 lg:text-base">
          View and manage your account information
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8 lg:p-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-5 lg:gap-6">
            <Avatar className="size-25">
              <AvatarImage src={profilePhoto as string} alt="User avatar" />
              <AvatarFallback>
                {user?.name
                  .trim()
                  .split(/\s+/)
                  .map((word) => word[0].toUpperCase())
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div>
              <h2 className="text-lg font-semibold text-slate-800 lg:text-2xl">
                {name}
              </h2>
              <div className="mt-2 flex flex-wrap gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium lg:text-sm ${
                    roleStyles[role] ||
                    "border border-slate-200 bg-slate-100 text-slate-600"
                  }`}
                >
                  {role}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium lg:text-sm ${
                    statusStyles[status] ||
                    "border border-slate-200 bg-slate-100 text-slate-600"
                  }`}
                >
                  {status}
                </span>
              </div>
            </div>
          </div>

          <Button variant="outline" size="lg" className="gap-2">
            <Pencil size={16} />
            Edit Profile
          </Button>
        </div>

        <div className="my-8 border-t" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 lg:h-12 lg:w-12">
              <Mail size={18} className="text-slate-500" />
            </div>
            <div>
              <p className="text-xs text-slate-400 lg:text-sm">Email</p>
              <p className="text-sm font-medium text-slate-700 lg:text-base">
                {email}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 lg:h-12 lg:w-12">
              <Shield size={18} className="text-slate-500" />
            </div>
            <div>
              <p className="text-xs text-slate-400 lg:text-sm">Role</p>
              <p className="text-sm font-medium text-slate-700 lg:text-base">
                {role}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 lg:h-12 lg:w-12">
              <Calendar size={18} className="text-slate-500" />
            </div>
            <div>
              <p className="text-xs text-slate-400 lg:text-sm">Joined On</p>
              <p className="text-sm font-medium text-slate-700 lg:text-base">
                {formatDate(user?.createdAt)}
              </p>
            </div>
          </div>
        </div>

        <div className="my-8 border-t" />

        <div>
          <p className="text-xs text-slate-400 lg:text-sm">Bio</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 lg:text-base">
            {bio ? (
              bio
            ) : (
              <span className="text-slate-400 italic">No bio added yet.</span>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
