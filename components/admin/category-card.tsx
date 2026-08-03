import { ICategory } from '@/app/(dashboard)/admin-dashboard/categories/page'
import { Calendar, Tag } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from '../ui/card'

export default function CategoryCard({category}:{category:ICategory}) {
  return (
    <Card
              key={category.id}
              className="group relative overflow-hidden border-slate-200 bg-white transition-all hover:border-emerald-200 hover:shadow-md"
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                      <Tag size={18} />
                    </div>
                    <span className="line-clamp-1 text-sm font-semibold text-slate-800">
                      {category.name}
                    </span>
                  </div>

                
                </div>

                <div className="mt-3 flex items-center gap-1 border-t pt-2 text-[11px] text-slate-400">
                  <Calendar size={11} />
                  <span>
                    {new Date(category.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </CardContent>
            </Card>
  )
}
