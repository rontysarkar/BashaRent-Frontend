import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

import CategoryCard from "@/components/admin/category-card"
import { getCategories } from "@/services/category.service"
import { CreateCategoryDialog } from "@/components/admin/create-category-dialog"

export interface ICategory {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

export default async function CategoriesPage() {
  const res = await getCategories()
  const categories: ICategory[] = res?.data || []
  return (
    <div className="max-w-7xl space-y-6 p-6 md:ml-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Categories
          </h1>
          <p className="text-sm text-slate-500">
            Manage property categories for your rental platform.
          </p>
        </div>

        <CreateCategoryDialog/>
      </div>

      {categories.length === 0 ? (
        <div className="flex h-32 items-center justify-center rounded-xl border border-dashed bg-white text-sm text-slate-500">
          No categories found.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  )
}
