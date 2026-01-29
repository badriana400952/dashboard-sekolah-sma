'use client'

import React, { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface AttendanceRecord {
  id: string
  name: string
  status: 'Hadir' | 'Izin' | 'Sakit' | 'Alfa'
}

interface Class {
  id: string
  name: string
}

interface Subject {
  id: string
  name: string
}

export default function DailyAttendanceDashboard() {
  const [selectedClass, setSelectedClass] = useState<string>('')
  const [selectedSubject, setSelectedSubject] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  )
  const [selectedTime, setSelectedTime] = useState<string>('08:00')
  const [filterMonth, setFilterMonth] = useState<string>('all')
  const [view, setView] = useState<'class' | 'student'>('class')

  // Sample data
  const classes: Class[] = [
    { id: '1', name: 'VII-A' },
    { id: '2', name: 'VII-B' },
    { id: '3', name: 'VIII-A' },
    { id: '4', name: 'VIII-B' },
    { id: '5', name: 'IX-A' },
  ]

  const subjects: Subject[] = [
    { id: '1', name: 'Matematika' },
    { id: '2', name: 'Bahasa Indonesia' },
    { id: '3', name: 'Bahasa Inggris' },
    { id: '4', name: 'IPA' },
    { id: '5', name: 'IPS' },
  ]

  const attendanceData: AttendanceRecord[] = [
    { id: '1', name: 'Adi Priyanto', status: 'Hadir' },
    { id: '2', name: 'Budi Santoso', status: 'Hadir' },
    { id: '3', name: 'Cindy Wijaya', status: 'Izin' },
    { id: '4', name: 'Dewi Lestari', status: 'Sakit' },
    { id: '5', name: 'Eka Putra', status: 'Hadir' },
    { id: '6', name: 'Fitri Handayani', status: 'Hadir' },
    { id: '7', name: 'Gilang Ramadhan', status: 'Alfa' },
    { id: '8', name: 'Hana Kusuma', status: 'Hadir' },
  ]

  // Calculate summary statistics
  const summary = useMemo(() => {
    const hadir = attendanceData.filter(a => a.status === 'Hadir').length
    const izin = attendanceData.filter(a => a.status === 'Izin').length
    const sakit = attendanceData.filter(a => a.status === 'Sakit').length
    const alfa = attendanceData.filter(a => a.status === 'Alfa').length

    return { hadir, izin, sakit, alfa, total: attendanceData.length }
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hadir':
        return 'bg-blue-100 text-blue-900 border border-blue-300'
      case 'Izin':
        return 'bg-yellow-100 text-yellow-900 border border-yellow-300'
      case 'Sakit':
        return 'bg-red-100 text-red-900 border border-red-300'
      case 'Alfa':
        return 'bg-gray-200 text-gray-900 border border-gray-300'
      default:
        return 'bg-gray-100'
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Hadir':
        return 'bg-blue-500 text-white'
      case 'Izin':
        return 'bg-yellow-500 text-white'
      case 'Sakit':
        return 'bg-red-500 text-white'
      case 'Alfa':
        return 'bg-gray-600 text-white'
      default:
        return 'bg-gray-400'
    }
  }

  const handleExportPDF = () => {
    alert('Export PDF functionality will be implemented with a PDF library')
  }

  const handleExportExcel = () => {
    alert('Export Excel functionality will be implemented with a spreadsheet library')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard Absensi Harian Siswa
          </h1>
          <p className="text-gray-600">Kelola dan pantau kehadiran siswa secara real-time</p>
        </div>

        {/* Filter Section */}
        <Card className="mb-6 border-gray-200 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Filter & Pencarian</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Class Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pilih Kelas
                </label>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih kelas" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map(cls => (
                      <SelectItem key={cls.id} value={cls.id}>
                        {cls.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Subject Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pilih Mata Pelajaran
                </label>
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih mata pelajaran" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map(subj => (
                      <SelectItem key={subj.id} value={subj.id}>
                        {subj.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date Picker */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pilih Tanggal
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Time Picker */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jam Pelajaran
                </label>
                <input
                  type="time"
                  value={selectedTime}
                  onChange={e => setSelectedTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Month Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter Bulan
                </label>
                <Select value={filterMonth} onValueChange={setFilterMonth}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih bulan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Bulan</SelectItem>
                    <SelectItem value="1">Januari</SelectItem>
                    <SelectItem value="2">Februari</SelectItem>
                    <SelectItem value="3">Maret</SelectItem>
                    <SelectItem value="4">April</SelectItem>
                    <SelectItem value="5">Mei</SelectItem>
                    <SelectItem value="6">Juni</SelectItem>
                    <SelectItem value="7">Juli</SelectItem>
                    <SelectItem value="8">Agustus</SelectItem>
                    <SelectItem value="9">September</SelectItem>
                    <SelectItem value="10">Oktober</SelectItem>
                    <SelectItem value="11">November</SelectItem>
                    <SelectItem value="12">Desember</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Export Buttons */}
            <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200">
              <Button
                onClick={handleExportPDF}
                variant="outline"
                className="text-sm bg-transparent"
              >
                Export PDF
              </Button>
              <Button
                onClick={handleExportExcel}
                variant="outline"
                className="text-sm bg-transparent"
              >
                Export Excel
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Siswa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{summary.total}</div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-sm bg-blue-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">Hadir</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">{summary.hadir}</div>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 shadow-sm bg-yellow-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-yellow-700">Izin</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-900">{summary.izin}</div>
            </CardContent>
          </Card>

          <Card className="border-red-200 shadow-sm bg-red-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-red-700">Sakit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-900">{summary.sakit}</div>
            </CardContent>
          </Card>

          <Card className="border-gray-300 shadow-sm bg-gray-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">Alfa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{summary.alfa}</div>
            </CardContent>
          </Card>
        </div>

        {/* View Toggle */}
        <div className="mb-6 flex gap-2">
          <Button
            onClick={() => setView('class')}
            variant={view === 'class' ? 'default' : 'outline'}
            className="text-sm"
          >
            Rekap Per Kelas
          </Button>
          <Button
            onClick={() => setView('student')}
            variant={view === 'student' ? 'default' : 'outline'}
            className="text-sm"
          >
            Rekap Per Siswa
          </Button>
        </div>

        {/* Attendance Table */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle>
              {view === 'class' ? 'Absensi Harian Per Kelas' : 'Rekap Absensi Per Siswa'}
            </CardTitle>
            <CardDescription>
              {selectedDate && `Tanggal: ${new Date(selectedDate).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">No</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">
                      Nama Siswa
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">
                      Status Kehadiran
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((record, idx) => (
                    <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-600">{idx + 1}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">{record.name}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(
                            record.status
                          )}`}
                        >
                          {record.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                        >
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Class Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Persentase Kehadiran</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { label: 'Hadir', value: summary.hadir, color: 'bg-blue-500', percentage: ((summary.hadir / summary.total) * 100).toFixed(1) },
                  { label: 'Izin', value: summary.izin, color: 'bg-yellow-500', percentage: ((summary.izin / summary.total) * 100).toFixed(1) },
                  { label: 'Sakit', value: summary.sakit, color: 'bg-red-500', percentage: ((summary.sakit / summary.total) * 100).toFixed(1) },
                  { label: 'Alfa', value: summary.alfa, color: 'bg-gray-600', percentage: ((summary.alfa / summary.total) * 100).toFixed(1) },
                ].map(item => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="font-medium text-gray-700">{item.label}</span>
                      <span className="text-gray-600">
                        {item.value} ({item.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Catatan Penting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                  <p className="font-medium text-yellow-900">Siswa Izin</p>
                  <p className="text-yellow-800">Cindy Wijaya</p>
                </div>
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="font-medium text-red-900">Siswa Sakit</p>
                  <p className="text-red-800">Dewi Lestari</p>
                </div>
                <div className="p-3 bg-gray-100 border border-gray-300 rounded-md">
                  <p className="font-medium text-gray-900">Siswa Alfa</p>
                  <p className="text-gray-800">Gilang Ramadhan</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
