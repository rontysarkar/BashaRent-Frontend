import { getLandlordRentalRequestsAction } from "@/actions/landlord/landlord.action"
import { RentalRequestCard } from "@/components/landlord/rental-request-card"
import { TRentalRequestResponse } from "@/types/response.types"
import { Inbox } from "lucide-react"

export default async function RentalRequestsPage() {
  const result = await getLandlordRentalRequestsAction()
  const requests = result.success ? result.data : []
  return (
    <div className="max-w-6xl p-6">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-slate-800">Rental Requests</h1>
        <p className="text-sm text-slate-500">
          Manage incoming requests for your properties
        </p>
      </div>

      {requests.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center">
          <Inbox className="mb-3 text-slate-300" size={40} />
          <p className="text-sm text-slate-500">No rental requests yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {requests.map((request: TRentalRequestResponse) => (
            <RentalRequestCard key={request.id} request={request} />
          ))}
        </div>
      )}
    </div>
  )
}
