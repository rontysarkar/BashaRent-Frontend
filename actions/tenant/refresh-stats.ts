'use server'

import { revalidateTag } from "next/cache"


export const refreshStats = async()=>{

    revalidateTag("tenant-stats", { expire: 0 })
    revalidateTag("tenant-requests", { expire: 0 })
    revalidateTag("tenant-payments", { expire: 0 })
}