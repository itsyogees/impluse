'use client'

import Sidebar from '@/components/ui/Sidebar'
import DashboardContent from '@/components/sections/DashboardContent'

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <DashboardContent />
    </div>
  )
}
