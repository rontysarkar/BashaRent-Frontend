"use client"

import { CreditCard, Send } from "lucide-react"
import { Button } from "../ui/button"
import { sendRentalRequestAction } from "@/actions/properties/send-rental-request.action"
import { toast } from "sonner"
import { useEffect, useState, useTransition } from "react"
import { getPropertyStatus } from "@/services/propertiy.service"

export default function PropertyDetailsButton({
  propertyId,
}: {
  propertyId: string
}) {
  const [isLoading, startTransition] = useTransition()
//   const [status,setStatus] = useState<'PENDING' | "APPROVED" | "REJECTED">('')

  const handleAction = (mode: string) => {
    startTransition(async () => {
      if (mode === "sendRequest") {
        const result = await sendRentalRequestAction(propertyId)
        if (!result.success) {
          toast.error("Only Tenant can request")
        }
        toast.success(
          "Rental request sent successfully! Waiting for landlord approval."
        )
      }
    })
  }

  useEffect(() => {
    const checkStatus = async () => {
      const propertyStatus = await getPropertyStatus(propertyId)
      console.log(propertyStatus)
    }

    checkStatus()
  }, [propertyId])
  return (
    <div className="mt-6 space-y-3 border-t border-slate-100 pt-4">
      <Button
        onClick={() => handleAction("sendRequest")}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-xs font-semibold text-white transition hover:bg-blue-700 active:scale-98"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent"></div>
            Sending...
          </span>
        ) : (
          <span className="flex gap-2">
            <Send size={18} /> Send Request
          </span>
        )}
      </Button>

      <Button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs font-semibold text-slate-700 transition hover:bg-blue-500 hover:text-white active:scale-98">
        <CreditCard size={18} className="hover:bg-white" />
        Pay
      </Button>
    </div>
  )
}
