import { IUserData, UserStatus } from "@/types/user.types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTransition } from "react"
import { updateUserStatusAction } from "@/actions/admin/admin.action"
import { toast } from "sonner"
import { TableCell, TableRow } from "../ui/table"
import { Loader2 } from "lucide-react"

export default function UserTableRow({ user }: { user: IUserData }) {
  const [isBannedLoading, startBannedLoading] = useTransition()
  const [isUnbannedLoading, startUnbannedLoading] = useTransition()
  const isBanned = user?.status == "BANNED"

  const handleUpdateUserStatus = (status: UserStatus, userId: string) => {
    const action = async () => {
      const res = await updateUserStatusAction(userId, status)
      if (res.success) {
        toast.success(`User ${status} Successfully`)
      } else {
        toast.error(res?.message)
      }
    }

    if (status === "BANNED") {
      startBannedLoading(() => action())
    } else {
      startUnbannedLoading(() => action())
    }
  }
  return (
    <TableRow key={user?.id} className="hover:bg-slate-50/50">
      <TableCell>
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user?.profilePhoto || ""} alt={user?.name} />
            <AvatarFallback className="bg-slate-100 font-semibold text-slate-700">
              {user?.name?.slice(0, 2)?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-slate-900">{user?.name}</p>
            <p className="text-xs text-slate-500">{user?.email}</p>
          </div>
        </div>
      </TableCell>

      <TableCell>
        <span className="text-xs font-medium text-slate-600 capitalize">
          {user?.role || "Tenant"}
        </span>
      </TableCell>

      <TableCell>
        <Badge
          variant="outline"
          className={
            isBanned
              ? "border-rose-200 bg-rose-50 text-rose-700"
              : "border-emerald-200 bg-emerald-50 text-emerald-700"
          }
        >
          {isBanned ? "BANNED" : "ACTIVE"}
        </Badge>
      </TableCell>

      <TableCell className="text-right">
        {isBanned ? (
          <Button
            onClick={() => handleUpdateUserStatus("ACTIVE", user?.id)}
            size="sm"
            variant="outline"
            className="h-8 border-emerald-200 bg-emerald-50 text-xs font-medium text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800"
          >
            {" "}
            {isUnbannedLoading ? (
              <span className="px-2">
                <Loader2 className="animate-spin" />
              </span>
            ) : (
              <span>Unban</span>
            )}
          </Button>
        ) : (
          <Button
            size="sm"
            onClick={() => handleUpdateUserStatus("BANNED", user?.id)}
            variant="destructive"
            className="h-8 px-4 text-xs font-medium"
          >
            {isBannedLoading ? (
              <span className="px-1">
                <Loader2 className="animate-spin" />
              </span>
            ) : (
              <span>Ban</span>
            )}
          </Button>
        )}
      </TableCell>
    </TableRow>
  )
}
