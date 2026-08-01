"use client"

import { useTransition } from "react"
import { Button } from "../ui/button"
import { TRentalRequestStatus } from "@/types/common.types"
import { approveOrRejectAction } from "@/actions/landlord/landlord.action"
import { toast } from "sonner"

export default function RentalRequestCardButton({
  status,
  rentalRequestId,
}: {
  rentalRequestId: string
  status: string
}) {
  const [isLoadingApproved, startTransitionApproved] = useTransition()
  const [isLoadingReject, startTransitionReject] = useTransition()

  const handleAction = (action: TRentalRequestStatus) => {
    if (action === "APPROVED") {
      startTransitionApproved(async () => {
        const res = await approveOrRejectAction(rentalRequestId, action)
        if (res.success) {
          toast.success(`Request ${action} Successfully`)
        }
      })
    }else{
      startTransitionReject(async () => {
      const res = await approveOrRejectAction(rentalRequestId, action)
      if (res.success) {
        toast.success(`Request ${action} Successfully`)
      }
    })
    }

    
  }
  return (
    status === "PENDING" && (
      <div className="mt-4 flex gap-2">
        <Button
          onClick={() => handleAction("APPROVED")}
          size="sm"
          className="flex-1 bg-green-600 hover:bg-green-700"
        >
          {isLoadingApproved ? (
            <span>
              <div className="h-4 w-4 animate-spin rounded-full border-2  border-r-transparent"></div>
            </span>
          ) : (
            <span>Approve</span>
          )}
          
        </Button>
        <Button
          onClick={() => handleAction("REJECTED")}
          size="sm"
          variant="outline"
          className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
        >
          {isLoadingReject ? (
            <span>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-red-600 border-r-transparent"></div>
            </span>
          ) : (
            <span>Reject</span>
          )}
          {/* <span>Reject</span> */}
        </Button>
      </div>
    )
  )
}
