'use client'

import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export function DownloadButton() {
  const handleDownload = () => {
    // Create a simple HTML for printing/downloading
    const element = document.createElement('a')
    const scheduleHTML = document.documentElement.innerHTML
    const blob = new Blob([scheduleHTML], { type: 'text/html;charset=utf-8' })
    element.href = URL.createObjectURL(blob)
    element.download = 'jadwal-mata-pelajaran.html'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
    URL.revokeObjectURL(element.href)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="flex gap-4">
      <Button
        onClick={handleDownload}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
      >
        <Download size={20} />
        Download Jadwal Mata Pelajaran
      </Button>
      <Button
        onClick={handlePrint}
        variant="outline"
        className="px-6 py-3 rounded-lg font-semibold bg-transparent"
      >
        Print
      </Button>
    </div>
  )
}
