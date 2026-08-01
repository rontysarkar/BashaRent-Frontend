import { MapPin, CheckCircle2, ShieldCheck } from "lucide-react"
import { IPropertyResponse } from "@/types/property.types"
import { PropertyDialog } from "./property-dialog"
import CardImageBox from "../shared/card-image-box"
import { getCategories } from "@/services/category.service"
import { DeletePropertyButton } from "./delete-property-button"

export default async function MyPropertyCard({
  property,
}: {
  property: IPropertyResponse
}) {
  const amenityList = property.amenities
    ? property.amenities
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : []
  const categories = await getCategories()

  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:shadow-md">
      <div>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <CardImageBox
            url={property?.photo as string}
            title={property?.title}
          />

          <PropertyDialog
            mode="edit"
            post={property}
            categories={categories?.data}
          />
          <DeletePropertyButton propertyId={property?.id} />
        </div>

        <div className="flex justify-between px-2 pt-2">
          {property.category?.name && (
            <div className="rounded-md bg-amber-50 px-2 py-1 text-[10px] font-medium text-amber-700 backdrop-blur-sm">
              {property.category.name}
            </div>
          )}
          {property.status && (
            <div className="flex items-center gap-1 rounded-md bg-green-50 px-2 py-1 text-[10px] font-semibold text-green-700 shadow-xs">
              <ShieldCheck size={12} />
              <span>{property.status}</span>
            </div>
          )}
        </div>
        <div className="my-1 px-3">
          <h3 className="line-clamp-1 text-base font-semibold text-slate-800 transition hover:text-blue-600">
            {property.title}
          </h3>

          <div className="mt-1.5 flex items-center gap-1 text-xs text-slate-500">
            <MapPin size={14} className="shrink-0 text-blue-600" />
            <span className="truncate">{property.location}</span>
          </div>

          <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-slate-600">
            {property.description}
          </p>

          {amenityList.length > 0 && (
            <div className="mt-3.5 border-t border-slate-100 py-2">
              <div className="flex flex-wrap items-center gap-1.5">
                {amenityList.slice(0, 2).map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                  >
                    <CheckCircle2 size={11} className="text-emerald-600" />
                    {item}
                  </span>
                ))}
                {amenityList.length > 2 && (
                  <span className="text-[11px] font-medium text-slate-400">
                    +{amenityList.length - 2} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/80 px-4 py-2.5">
        <span className="text-xs font-medium text-slate-500">Rent:</span>
        <div className="flex items-center gap-1">
          <span className="text-sm font-bold text-slate-900">
            {(property.price ?? 0).toLocaleString("en-IN")} BDT
          </span>
          <span className="text-[10px] font-normal text-slate-500">/mo</span>
        </div>
      </div>
    </div>
  )
}
