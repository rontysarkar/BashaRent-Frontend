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
import { Loader2, Plus, Star } from "lucide-react"
import { Textarea } from "../ui/textarea"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useTransition } from "react"
import { createReviewsAction } from "@/actions/tenant/my-reviews.action"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Input } from "../ui/input"
import {
  createCategorySchema,
  TCreateCategory,
} from "@/validations/category.validation"
import { createCategoryAction } from "@/actions/admin/admin.action"

export function CreateCategoryDialog() {
  const [open, setOpen] = useState(false)
  const [isLoading, startTransition] = useTransition()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TCreateCategory>({
    resolver: zodResolver(createCategorySchema),
  })

  const onSubmit = (data: TCreateCategory) => {
    startTransition(async () => {
      const res = await createCategoryAction(data)
      if (res.success) {
        toast.success("Category Created Successfully")
      } else {
        toast.error(res?.message)
      }
      setOpen(false)
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button className="flex items-center gap-2 bg-emerald-600 text-white shadow-sm hover:bg-emerald-700">
            <Plus size={16} />
            <span>Add Category</span>
          </Button>
        }
      />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Write a Category Name</DialogTitle>
          <DialogDescription>
            Add a new property category to your platform.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              {...register("name")}
              id="name"
              name="name"
              placeholder="Write your category name..."
              className="min-h-[50px] resize-none"
            />
            {errors.name && (
              <p className="py-2 pl-1 text-xs text-red-500">
                {errors.name.message}
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
              <Button type="submit">Create</Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
