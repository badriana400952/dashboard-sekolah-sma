import { DownloadButton } from '@/components/download-button'
import { ScheduleTable } from '@/components/schedule-table'
import React from 'react'

const JadwalPage = () => {
  return (
   <main className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-red-600 text-white px-3 py-1 rounded text-xs font-bold mb-4">
            Semester 1
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">JADWAL MATA PELAJARAN</h1>
          <p className="text-lg text-muted-foreground mb-1">
            SMK PEMERINTAHAN SUKTI HUSANTARA TAMBUN SELATAN BEKASI
          </p>
          <p className="text-md text-muted-foreground">
            Tahun Pelajaran 2019 - 2020
          </p>
        </div>

        {/* Schedule Table */}
        <div className="mb-12 overflow-x-auto">
          <ScheduleTable />
        </div>

        {/* Legend */}
        <div className="flex gap-8 justify-center mb-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#1d293d] rounded"></div>
            <span>Kelas Teori/Praktik</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-100 rounded"></div>
            <span>Istirahat/Halal an makan siang</span>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center">
          <DownloadButton />
        </div>
      </div>
    </main>
  )
}

export default JadwalPage