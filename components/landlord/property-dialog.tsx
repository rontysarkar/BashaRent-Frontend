"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircle, SquarePen } from "lucide-react"

import { Textarea } from "../ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  createPropertySchema,
  TCreateProperty,
} from "@/validations/landlord.validation"
import { IPropertyResponse } from "@/types/property.types"
import { TCategoriesData } from "@/types/categories.types"
import { useState, useTransition } from "react"
import {
  createPropertyAction,
  updatePropertyAction,
} from "@/actions/landlord/landlord.action"
import { toast } from "sonner"

type propertyDialogProps = {
  mode: "create" | "edit"
  post?: IPropertyResponse
  categories: TCategoriesData[]
}

export function PropertyDialog({
  mode,
  post,
  categories,
}: propertyDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateProperty>({ resolver: zodResolver(createPropertySchema) })
  const [open, setOpen] = useState(false)
  const [isLoading, startTransition] = useTransition()

  const onSubmit = (data: TCreateProperty) => {
    if (mode === "create") {
      startTransition(async () => {
        const res = await createPropertyAction(data)
        if (res.success) {
          toast.success(res?.message)
          setOpen(false)
        }
      })
    } else {
      startTransition(async () => {
        const res = await updatePropertyAction(data, post?.id as string)
        if (res.success) {
          toast.success(res?.message)
          setOpen(false)
        }
      })
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          mode === "create" ? (
            <Button className="inline-flex items-center gap-2 rounded-lg border border-slate-400 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-2xl transition hover:bg-slate-100">
              <PlusCircle size={16} className="text-blue-600" />
              Post Property
            </Button>
          ) : (
            <Button
              variant={"ghost"}
              className="absolute top-0 left-0 cursor-pointer rounded-l-lg px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-3xl"
            >
              <SquarePen size={18} />
            </Button>
          )
        }
      />

      <DialogContent className="max-h-[90vh] overflow-y-auto px-8 pt-6 sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Property</DialogTitle>
          <DialogDescription>
            Fill in the details below to list a new property.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Spacious Penthouse"
                defaultValue={post && post.title}
                {...register("title")}
              />
              {errors.title && (
                <p className="pl-1 text-xs text-red-500">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="High-end penthouse with a large rooftop terrace..."
                rows={3}
                defaultValue={post && post.description}
                {...register("description")}
              />
              {errors.description && (
                <p className="pl-1 text-xs text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="grid gap-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="95000"
                  defaultValue={post && post.price}
                  {...register("price", { valueAsNumber: true })}
                />
                {errors.price && (
                  <p className="pl-1 text-xs text-red-500">
                    {errors.price.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <select
                  defaultValue={mode === "edit" ? post?.status : "AVAILABLE"}
                  id="status"
                  {...register("status")}
                  className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  <option value="AVAILABLE">Available</option>
                  <option value="RENTED">Rented</option>
                </select>
                {errors.status && (
                  <p className="text-xs text-red-500">
                    {errors.status.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="categoryId">Category</Label>
                <select
                  id="categoryId"
                  {...register("categoryId")}
                  defaultValue={post && post.categoryId}
                  className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  {categories?.map((category) => (
                    <option key={category?.id} value={category?.id}>
                      {category?.name}
                    </option>
                  ))}
                </select>
                {errors.categoryId && (
                  <p className="text-xs text-red-500">
                    {errors.categoryId.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Bashundhara, Dhaka"
                  defaultValue={post && post.location}
                  {...register("location")}
                />
                {errors.location && (
                  <p className="pl-1 text-xs text-red-500">
                    {errors.location.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="amenities">Amenities</Label>
                <Input
                  id="amenities"
                  placeholder="WiFi, AC, Parking, Garden"
                  defaultValue={post && post.amenities}
                  {...register("amenities")}
                />
                {errors.amenities && (
                  <p className="pl-1 text-xs text-red-500">
                    {errors.amenities.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="photo">Photo URL</Label>
              <Input
                id="photo"
                placeholder="https://example.com/image.jpg"
                defaultValue={post && (post.photo as string)}
                {...register("photo")}
              />
              {errors.photo && (
                <p className="pl-1 text-xs text-red-500">
                  {errors.photo.message}
                </p>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button
              className={"cursor-pointer"}
              onClick={() => setOpen(false)}
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              className={"cursor-pointer bg-blue-700"}
              variant={"default"}
              type="submit"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent"></div>
                  Saving...
                </span>
              ) : (
                <span>Save Property</span>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}




