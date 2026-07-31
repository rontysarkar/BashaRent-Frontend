'use client'

import { CreditCard, Send } from "lucide-react"
import { Button } from "../ui/button"
import { sendRentalRequestAction } from "@/actions/properties/send-rental-request.action"

export default  function PropertyDetailsButton({propertyId}:{propertyId:string}) {
  return (
    <div className="mt-6 space-y-3 border-t border-slate-100 pt-4">
      <Button onClick={()=> sendRentalRequestAction(propertyId)}  className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-xs font-semibold text-white transition hover:bg-blue-700 active:scale-98">
        <Send size={18} />
        Send Request
      </Button>

      <Button 
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs font-semibold text-slate-700 transition hover:bg-blue-500 hover:text-white active:scale-98"
      >
        <CreditCard  size={18} className=" hover:bg-white" />
        Pay
      </Button>
    </div>
  )
}
