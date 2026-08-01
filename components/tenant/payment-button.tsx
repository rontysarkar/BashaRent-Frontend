"use client"
import React, { useState, useTransition } from "react"
import { Button } from "../ui/button"
import { CreditCard, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { paymentAction } from "@/actions/tenant/payment.action"
import { useRouter } from "next/navigation"

type TPaymentButtonProps = { className?: string; rentalRequestId: string }

export default function PaymentButton({
  className,
  rentalRequestId,
}: TPaymentButtonProps) {
  const [isLoading, startTransition] = useTransition()
  const router = useRouter()

  const handlePayment = () => {
    startTransition(async () => {
      const res = await paymentAction(rentalRequestId)
      console.log(res)
      if (res?.success) {
        router.push(res?.data?.url)
      }
    })
  }
  return (
    <Button
      onClick={handlePayment}
      className={cn(
        "bg-emerald-600 text-white hover:bg-emerald-700",
        className
      )}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <CreditCard className="mr-2 h-4 w-4" />
          Pay Now
        </>
      )}
    </Button>
  )
}
