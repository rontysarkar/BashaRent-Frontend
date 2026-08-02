import Image from "next/image"
import { Star, Building, Calendar, User } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getMyReviews } from "@/actions/tenant/my-reviews.action"
import { TReviewsResponse } from "@/types/reviews.types"

export default async function MyReviewsPage() {
  const res = await getMyReviews()
  const reviews = res?.success ? res?.data : []
  return (
    <div className="w-full lg:ml-8">
      <div className="max-w-5xl space-y-6 p-4 sm:p-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Reviews</h1>
          <p className="text-sm text-slate-500">
            Manage and view all the reviews you&apos;ve submitted for rented
            properties.
          </p>
        </div>

        <div className="space-y-4">
          {reviews.map((review: TReviewsResponse) => (
            <Card
              key={review?.id}
              className="overflow-hidden border-slate-200 shadow-sm transition-shadow hover:shadow-md"
            >
              <CardHeader className="border-b bg-slate-50/50 pb-3">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2">
                    <Building size={18} className="shrink-0 text-emerald-600" />
                    <h3 className="line-clamp-1 font-semibold text-slate-800">
                      {review?.property?.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1 self-start rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 sm:self-auto">
                    <Star size={15} className="fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-amber-700">
                      {Math.min(review?.rating, 5)} / 5
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-4">
                <p className="text-sm leading-relaxed text-slate-700 italic">
                  {review?.comment}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-3 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    {review?.property?.landlord?.profilePhoto ? (
                      <Image
                        src={review?.property?.landlord?.profilePhoto}
                        alt={review?.property?.landlord?.name}
                        width={24}
                        height={24}
                        className="rounded-full border object-cover"
                      />
                    ) : (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200">
                        <User size={12} className="text-slate-500" />
                      </div>
                    )}
                    <span>
                      Landlord:{" "}
                      <strong className="text-slate-700">
                        {review?.property?.landlord?.name}
                      </strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Badge
                      variant="outline"
                      className="border-emerald-200 bg-emerald-50/50 text-emerald-600"
                    >
                      ৳{review?.property?.price?.toLocaleString()}/mo
                    </Badge>

                    <div className="flex items-center gap-1 text-slate-400">
                      <Calendar size={13} />
                      <span>
                        {new Date(review.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
