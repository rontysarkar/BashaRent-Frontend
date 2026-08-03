import React from "react"

export default function PropertySkeleton() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[1, 2, 3, 4, 5, 6,7,8].map((i) => (
        <div key={i} className=" h-52 md:h-74  animate-pulse rounded-2xl  bg-gray-200" />
      ))}
    </div>
  )
}
