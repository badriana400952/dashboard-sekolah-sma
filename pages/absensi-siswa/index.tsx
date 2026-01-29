'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import AttendanceSheet from '@/components/attendance-sheet'
import DailyAttendanceDashboard from '@/components/daily-attendance-dashboard'

export default function Home() {
  const [view, setView] = useState<'sheet' | 'dashboard'>('sheet')

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">Sistem Manajemen Absensi</h1>
            <div className="flex gap-2">
              <Button
                onClick={() => setView('sheet')}
                variant={view === 'sheet' ? 'default' : 'outline'}
                className="text-sm"
              >
                Lembar Absensi Formal
              </Button>
              <Button
                onClick={() => setView('dashboard')}
                variant={view === 'dashboard' ? 'default' : 'outline'}
                className="text-sm"
              >
                Dashboard Harian
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="print:p-0">
        {view === 'sheet' && <AttendanceSheet />}
        {view === 'dashboard' && <DailyAttendanceDashboard />}
      </div>
    </div>
  )
}
