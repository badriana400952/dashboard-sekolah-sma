'use client'

import React, { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface Student {
  no: number
  name: string
  gender: 'L' | 'P'
  attendance: ('H' | 'I' | 'S' | 'A' | '')[]
}

export default function AttendanceSheet() {
  const printRef = useRef<HTMLDivElement>(null)
  const [students, setStudents] = useState<Student[]>([
    { no: 1, name: 'Adi Priyanto', gender: 'L', attendance: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] },
    { no: 2, name: 'Budi Santoso', gender: 'L', attendance: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] },
    { no: 3, name: 'Cindy Wijaya', gender: 'P', attendance: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] },
    { no: 4, name: 'Dewi Lestari', gender: 'P', attendance: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] },
    { no: 5, name: 'Eka Putra', gender: 'L', attendance: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] },
    { no: 6, name: 'Fitri andayani', gender: 'P', attendance: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] },
  ])

  const toggleAttendanceStatus = (studentIndex: number, dayIndex: number) => {
    const statuses: ('H' | 'I' | 'S' | 'A' | '')[] = ['H', 'I', 'S', 'A', '']
    const currentStatus = students[studentIndex].attendance[dayIndex]
    const currentIndex = statuses.indexOf(currentStatus)
    const nextStatus = statuses[(currentIndex + 1) % statuses.length]

    const updatedStudents = [...students]
    updatedStudents[studentIndex].attendance[dayIndex] = nextStatus
    setStudents(updatedStudents)
  }

  const getAttendanceColor = (status: string) => {
    switch (status) {
      case 'H':
        return 'bg-blue-200 text-blue-900'
      case 'I':
        return 'bg-yellow-200 text-yellow-900'
      case 'S':
        return 'bg-red-200 text-red-900'
      case 'A':
        return 'bg-gray-300 text-gray-900'
      default:
        return 'bg-white'
    }
  }

  const getAttendanceLabel = (status: string) => {
    switch (status) {
      case 'H':
        return 'H'
      case 'I':
        return 'I'
      case 'S':
        return 'S'
      case 'A':
        return 'A'
      default:
        return ''
    }
  }

  const countAttendance = (attendance: ('H' | 'I' | 'S' | 'A')[]) => {
    return {
      h: attendance.filter(a => a === 'H').length,
      i: attendance.filter(a => a === 'I').length,
      s: attendance.filter(a => a === 'S').length,
      a: attendance.filter(a => a === 'A').length,
    }
  }

  const maleCount = students.filter(s => s.gender === 'L').length
  const femaleCount = students.filter(s => s.gender === 'P').length

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 print:p-0 print:bg-white">
      <div className="hidden print:block mb-4">
        <button onClick={handlePrint} className="hidden">
          Print
        </button>
      </div>

      <div
        ref={printRef}
        className="w-full max-w-6xl bg-white shadow-lg print:shadow-none print:max-w-full print:p-0 p-8"
        style={{ aspectRatio: '210 / 297' }}
      >
        {/* Header Section */}
        <div className="border-b-2 border-black pb-4 mb-4">
          <div className="flex items-start justify-between mb-2">
            <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center">
              <Image src="/log.png" width={40} height={40} alt="Logo Sekolah" className=" object-contain" />
            </div>
            <div className="flex-1 text-center px-4">
              <p className="text-xs font-bold">PEMERINTAH KABUPATEN RELANG LIBUNG</p>
              <p className="text-xs font-bold">DINAS PENDIDIKAN</p>
              <p className="text-xs font-bold">SMP NEGERI 2 RELANG LIBUNG</p>
              <p className="text-xs">Jalan Ahmad Yani No. 45 Kode Pos 96122</p>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-3">
          <h1 className="text-lg font-bold">ABSENSI KEHADIRAN SISWA</h1>
          <p className="text-xs">
            Semester: I | Tahun Pelajaran: 2024/2025 | Kelas: VII-A
          </p>
        </div>

        {/* Attendance Table */}
        <div className="mb-4 overflow-x-auto text-xs">
          <table className="w-full border-collapse border border-black">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-black p-1 h-8">No</th>
                <th className="border border-black p-1 h-8 min-w-[120px]">Nama Siswa</th>
                <th className="border border-black p-1 h-8 w-8">JK</th>
                {Array.from({ length: 31 }).map((_, i) => (
                  <th key={i} className="border border-black p-0.5 h-8 w-6 text-center">
                    {i + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.no} className="h-6">
                  <td className="border border-black p-1 text-center font-semibold">
                    {student.no}
                  </td>
                  <td className="border border-black p-1">{student.name}</td>
                  <td className="border border-black p-1 text-center">{student.gender}</td>
                  {student.attendance.map((status, idx) => (
                    <td
                      key={idx}
                      onClick={() => toggleAttendanceStatus(student.no - 1, idx)}
                      className={`border border-black p-0.5 text-center font-semibold text-xs cursor-pointer hover:opacity-75 transition-opacity ${getAttendanceColor(
                        status
                      )}`}
                      title="Klik untuk mengubah status"
                    >
                      {getAttendanceLabel(status)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="text-xs mb-3 flex gap-6">
          <div className="flex items-center gap-2">
            <span className="w-6 h-4 bg-blue-200 border border-black"></span>
            <span>H = Hadir</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-4 bg-yellow-200 border border-black"></span>
            <span>I = Izin</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-4 bg-red-200 border border-black"></span>
            <span>S = Sakit</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-4 bg-gray-300 border border-black"></span>
            <span>A = Alfa</span>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-4 pt-4 border-t-2 border-black text-xs">
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <p className="font-bold">Rekap Jenis Kelamin:</p>
              <p>Laki-laki: {maleCount} siswa</p>
              <p>Perempuan: {femaleCount} siswa</p>
            </div>
            <div>
              <p className="font-bold">Total Siswa: {students.length}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-6">
            <div className="text-center">
              <p className="mb-12 font-bold">Guru Mata Pelajaran</p>
              <p className="border-t border-black inline-block w-32"></p>
              <p className="text-xs">_____________________</p>
            </div>
            <div className="text-center">
              <p className="mb-12 font-bold">Kepala Sekolah</p>
              <p className="border-t border-black inline-block w-32"></p>
              <p className="text-xs">_____________________</p>
            </div>
          </div>

          <div className="mt-4 text-xs text-right">
            <p>Tanggal: _______________</p>
            <p>Tempat: _______________</p>
          </div>
        </div>
      </div>

      {/* Print Button */}
      <Button onClick={handlePrint} className="mt-6 print:hidden">
        Print / Save as PDF
      </Button>
    </div>
  )
}
