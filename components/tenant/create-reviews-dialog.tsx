"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Loader2, Star } from "lucide-react"
import { Textarea } from "../ui/textarea"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useTransition } from "react"
import { createReviewsAction } from "@/actions/tenant/my-reviews.action"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const createReviewSchema = z.object({
  rating: z.number().min(1, "Please select a rating"),
  comment: z.string().min(6, "Reviews must be at least 6 characters"),
})

type createReviewType = z.infer<typeof createReviewSchema>

export function CreateReviewDialog({ propertyId }: { propertyId: string }) {
  const [hoveredStar, setHoveredStar] = useState<number>(0)
  const [isLoading, startTransition] = useTransition()
  const [open, setOpen] = useState(false)

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<createReviewType>({
    resolver: zodResolver(createReviewSchema),
    defaultValues: {
      rating: 0,
      comment: "",
    },
  })

  const router = useRouter();
  const selectedRating = watch("rating")

  const onSubmit = (data: createReviewType) => {
    startTransition(async () => {
      const payload = { ...data, propertyId, rating: String(data.rating) }
      const res = await createReviewsAction(payload)
      if (res.success) {
        toast.success(res?.message)
      } else {
        toast.error(res?.message)
      }
      reset()
      setOpen(false)
      router.push('/tenant-dashboard/my-reviews')
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <button className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-amber-600 focus:ring-2 focus:ring-amber-500/20 focus:outline-none">
            <Star size={13} className="fill-white" />
            Write a Review
          </button>
        }
      />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Write a Property Review</DialogTitle>
          <DialogDescription>
            Share your honest feedback about your stay.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-4">
            <span className="mb-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Select Rating
            </span>

            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => {
                const isActive = star <= (hoveredStar || selectedRating)
                return (
                  <button
                    key={star}
                    type="button"
                    onClick={() =>
                      setValue("rating", star, { shouldValidate: true })
                    }
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    className="p-1 transition-transform hover:scale-110 focus:outline-none"
                  >
                    <Star
                      size={26}
                      className={
                        isActive
                          ? "fill-amber-400 text-amber-400"
                          : "fill-slate-200 text-slate-200"
                      }
                    />
                  </button>
                )
              })}
            </div>

            {errors.rating && (
              <p className="mt-2 text-xs font-medium text-red-500">
                {errors.rating.message}
              </p>
            )}
          </div>

          <div>
            <Textarea
              {...register("comment")}
              id="comment"
              name="comment"
              placeholder="Write your experience..."
              className="min-h-[90px] resize-none"
            />
            {errors.comment && (
              <p className="py-2 pl-1 text-xs text-red-500">
                {errors.comment.message}
              </p>
            )}
          </div>

          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            {isLoading ? (
              <Button disabled className="px-5">
                <Loader2 className="mr-2 h-3 w-3 animate-spin" />
              </Button>
            ) : (
              <Button type="submit">Review</Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
