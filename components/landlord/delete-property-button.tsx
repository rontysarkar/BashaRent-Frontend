"use client"
import { Trash, Trash2Icon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useTransition } from "react"
import { deletePropertyAction } from "@/actions/landlord/landlord.action"
import { toast } from "sonner"

export function DeletePropertyButton({ propertyId }: { propertyId: string }) {
  const [isLoading, startTransition] = useTransition()

  const handleDeleteProperty = () => {
    startTransition(async () => {
      const res = await deletePropertyAction(propertyId)
      if (res.success) {
        toast.success("Property Deleted Successfully")
      }
    })
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button
            variant={"destructive"}
            className="absolute top-0 right-0 cursor-pointer rounded-r-md px-2.5 py-1 text-[11px] font-medium text-rose-700 backdrop-blur-3xl"
          >
            <Trash size={18} />
          </Button>
        }
      />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete property?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            property listing and remove all associated data from the server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteProperty}
            variant="destructive"
          >
            {isLoading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-red-600 border-r-transparent"></div>
            ) : (
              <span>Delete</span>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
