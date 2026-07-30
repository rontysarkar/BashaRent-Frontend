import React from "react";

export default function PropertyCardSkeleton() {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs animate-pulse">
      
      {/* Top Section */}
      <div>
        {/* Image Placeholder */}
        <div className="aspect-[16/10] w-full bg-slate-200" />

        {/* Content Box */}
        <div className="p-4 space-y-3">
          {/* Title Placeholder */}
          <div className="h-4 w-3/4 rounded-md bg-slate-200" />

          {/* Location Placeholder */}
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-slate-200" />
            <div className="h-3 w-1/2 rounded-md bg-slate-200" />
          </div>

          {/* Description Placeholder */}
          <div className="space-y-1.5 pt-1">
            <div className="h-3 w-full rounded-md bg-slate-200" />
            <div className="h-3 w-4/5 rounded-md bg-slate-200" />
          </div>

          {/* Amenities Chips Placeholder */}
          <div className="border-t border-slate-100 pt-3">
            <div className="flex items-center gap-2">
              <div className="h-5 w-16 rounded-md bg-slate-200" />
              <div className="h-5 w-16 rounded-md bg-slate-200" />
              <div className="h-5 w-16 rounded-md bg-slate-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Price Placeholder */}
      <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/80 px-4 py-3">
        <div className="h-3 w-10 rounded-md bg-slate-200" />
        <div className="h-4 w-20 rounded-md bg-slate-200" />
      </div>

    </div>
  );
}