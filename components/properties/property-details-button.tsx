"use client"

import { CreditCard, Send } from "lucide-react"
import { Button } from "../ui/button"
import { sendRentalRequestAction } from "@/actions/properties/send-rental-request.action"
import { toast } from "sonner"
import { useEffect, useState, useTransition } from "react"
import { PropertyStatusTypes } from "@/types/property.types"
import { getPropertyRequestStatus } from "@/services/property.service"
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"
import { paymentAction } from "@/actions/tenant/payment.action"

export default function PropertyDetailsButton({
  propertyId,
  propertyStatus,
}: {
  propertyId: string
  propertyStatus: string
}) {
  const [isLoading, startTransition] = useTransition()
  const [status, setStatus] = useState<PropertyStatusTypes>("NONE")
  const { user } = useAuth()
  const router = useRouter()

  const handleAction = (mode: string) => {
    startTransition(async () => {
      if (mode === "sendRequest") {
        if (!user) {
          return router.push("/login")
        }
        if (user?.role !== "TENANT") {
          toast.error(
            ` You are a ${user?.role}, so you can't submit rental requests!`
          )
          return
        }

        if (propertyStatus === "RENTED") {
          toast.message(
            "This property is already rented and no longer available."
          )
          return
        }

        const result = await sendRentalRequestAction(propertyId)

        if (!result.success) {
          toast.error(result?.message)
        } else {
          toast.success(
            "Rental request sent successfully! Waiting for landlord approval."
          )
          setStatus("PENDING")
        }
      }
    })
  }

  useEffect(() => {
    const checkStatus = async () => {
      const propertyStatus = await getPropertyRequestStatus(propertyId)
      if (propertyStatus.success) {
        setStatus(propertyStatus?.data?.status)
      }
    }

    checkStatus()
  }, [propertyId])

  const getButtonStyles = () => {
    if (status === "PENDING") {
      return "bg-amber-500 hover:bg-amber-500 cursor-not-allowed opacity-90 text-white"
    }
    if (status === "APPROVED") {
      return "bg-emerald-600 hover:bg-emerald-600 cursor-not-allowed text-white"
    }
    if (status === "REJECTED") {
      return "bg-rose-500 hover:bg-rose-600 cursor-not-allowed text-white"
    }

    // Default / NONE status
    return "bg-green-600 hover:bg-blue-700 text-white active:scale-98"
  }
  return (
    <div className="mt-6 space-y-3 border-t border-slate-100 pt-4">
      <Button
        disabled={status !== "NONE"}
        onClick={() => handleAction("sendRequest")}
        className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-semibold transition ${getButtonStyles()}`}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent"></div>
            Sending...
          </span>
        ) : status === "NONE" ? (
          <span className="flex items-center justify-center gap-2">
            {" "}
            <Send size={18} /> Send Request
          </span>
        ) : (
          <span>{status}</span>
        )}
      </Button>

      <Button
        onClick={() => router.push("/tenant-dashboard/my-requests")}
        disabled={user?.role === 'TENANT' ? false : true}
        className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-semibold transition ${
          user && user?.role === 'TENANT'
            ? "cursor-pointer bg-blue-600 text-white shadow-md hover:bg-blue-700 active:scale-98"
            : "cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-400 opacity-60"
        }`}
      >
        <CreditCard size={18} />
        My Request
      </Button>
    </div>
  )
}
