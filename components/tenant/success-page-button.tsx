'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import {  History, Home } from "lucide-react"
import { refreshStats } from '@/actions/tenant/refresh-stats'

export default function SuccessPageButton() {

    useEffect(()=>{
        refreshStats();
    },[])
  return (
    <div className="flex flex-col gap-2.5">
          <Link
            href="/tenant-dashboard/payments"
            className="flex items-center justify-center gap-2"
          >
            <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-700">
              <History size={16} />
              View Payment History
            </Button>
          </Link>

          <Link href="/" className="flex items-center justify-center gap-2">
            <Button variant="outline" className="w-full">
              <Home size={16} />
              Back to Home
            </Button>
          </Link>
        </div>
  )
}
