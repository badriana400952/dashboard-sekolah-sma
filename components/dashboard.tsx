'use client'

import { useState } from 'react'
import { Menu, LogOut, Home, Calendar, BarChart3, DollarSign, Users } from 'lucide-react'
import Link from 'next/link'

export default function Dashboard(children: React.ReactNode) {
  const [sidebarOpen, setOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-[#1a733d] text-white transition-all duration-300 flex flex-col shadow-lg`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <h1 className={`font-bold text-lg ${!sidebarOpen && 'text-center'}`}>
            {sidebarOpen ? 'SIM Akademik' : 'SA'}
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-8 space-y-4">
          <Link
            href="#"
            className="flex items-center gap-4 px-4 py-3 bg-primary text-white rounded-lg font-medium transition-colors"
          >
            <Home size={20} />
            {sidebarOpen && 'Dashboard'}
          </Link>

          <Link
            href="#"
            className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <Calendar size={20} />
            {sidebarOpen && 'Jadwal'}
          </Link>

          <Link
            href="#"
            className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <BarChart3 size={20} />
            {sidebarOpen && 'Rapor Siswa'}
          </Link>

          <Link
            href="#"
            className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <DollarSign size={20} />
            {sidebarOpen && 'Keuangan'}
          </Link>

          <Link
            href="#"
            className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <Users size={20} />
            {sidebarOpen && 'Data Siswa'}
          </Link>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-700">
          <button className="flex items-center gap-4 px-4 py-3 w-full text-slate-400 hover:bg-slate-700 rounded-lg transition-colors">
            <LogOut size={20} />
            {sidebarOpen && 'Logout'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between shadow-sm">
          <button
            onClick={() => setOpen(!sidebarOpen)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="text-sm font-medium">Admin Beta Nurul Auwalin</div>
          </div>
        </header>
            {children}
 
      </div>
    </div>
  )
}
