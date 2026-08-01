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
import { Pencil } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useTransition } from "react"
import {
  TUpdateProfile,
  updateProfileSchema,
} from "@/validations/auth.validation"
import { useAuth } from "@/context/auth-context"
import { updateProfileAction } from "@/actions/auth/update-profile.action"
import { toast } from "sonner"

export function ProfileEditDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUpdateProfile>({ resolver: zodResolver(updateProfileSchema) })
  const [open, setOpen] = useState(false)
  const [isLoading, startTransition] = useTransition()
  const { user } = useAuth()
  const onSubmit = (data: TUpdateProfile) => {
    startTransition(async () => {
      const result = await updateProfileAction(data)
      if (result.success) {
        toast.success("Profile Updated Successfully")
        setOpen(false)
      }
    })
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button variant="outline" size="lg" className="gap-2">
            <Pencil size={16} />
            Edit Profile
          </Button>
        }
      />

      <DialogContent className="max-h-[90vh] overflow-y-auto px-8 pt-6 sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Name</Label>
              <Input
                id="name"
                placeholder="Spacious Penthouse"
                defaultValue={user?.name ?? ""}
                {...register("name")}
              />
              {errors.name && (
                <p className="pl-1 text-xs text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">bio</Label>
              <Input
                id="bio"
                placeholder="High-end penthouse with a large rooftop terrace..."
                defaultValue={user?.bio ?? ""}
                {...register("bio")}
              />
              {errors.bio && (
                <p className="pl-1 text-xs text-red-500">
                  {errors.bio.message}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="photo">Photo URL</Label>
              <Input
                id="profilePhoto"
                placeholder="https://example.com/image.jpg"
                defaultValue={user?.profilePhoto || undefined}
                {...register("profilePhoto")}
              />
              {errors.profilePhoto && (
                <p className="pl-1 text-xs text-red-500">
                  {errors.profilePhoto.message}
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
