'use client'

import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
    Home,
    Calendar,
    Users,
    DollarSign,
    BarChart3,
    LogOut,
    User,
} from 'lucide-react'
import { useGlobal } from '../globalContext'
import Image from 'next/image'

export default function Sidebar() {
    const { sidebarOpen } = useGlobal()
    const router = useRouter()

    const menu = [
        { label: 'Dashboard', icon: Home, href: '/' },
        { label: 'Jadwal', icon: Calendar, href: '/jadwal' },
        { label: 'Rapor', icon: BarChart3, href: '/rapor' },
        // { label: 'Keuangan', icon: DollarSign, href: '/keuangan' },
        { label: 'Siswa', icon: User, href: '/siswa' },
        { label: 'Absensi Siswa', icon: Users, href: '/absensi-siswa' },
    ]

    return (
        <aside
            className={`${sidebarOpen ? 'w-64' : 'w-20'
                } bg-slate-800 text-white transition-all duration-300 flex flex-col`}
        >
            {/* Logo */}
            <div className="p-6 border-b border-slate-700">
                <h1 className={`font-bold text-lg ${!sidebarOpen && 'text-center'}`}>
                    {sidebarOpen ?
                        <>
                            <div className='flex justify-start items-center gap-2'>
                                <Image src="/log.png" alt="Logo" width={40} height={40} /><p>SIM Akademik</p>
                            </div>
                        </> : <Image src="/log.png" alt="Logo" width={40} height={40} />}
                </h1>
            </div>

            {/* Menu */}
            <nav className="flex-1 px-4 py-6 space-y-2">
                {menu.map(({ label, icon: Icon, href }) => {
                    const active = router.pathname === href
                    return (
                        <Link
                            key={label}
                            href={href}
                            className={`flex items-center gap-4 px-4 py-3 rounded-lg transition
                                    ${active
                                    ? 'bg-primary text-white'
                                    : 'text-slate-400 hover:bg-slate-700'
                                }`}
                        >
                            <Icon size={20} />
                            {sidebarOpen && label}
                        </Link>
                    )
                })}
            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-slate-700">
                <button className="flex items-center gap-4 px-4 py-3 w-full text-slate-400 hover:bg-slate-700 rounded-lg">
                    <LogOut size={20} />
                    {sidebarOpen && 'Logout'}
                </button>
            </div>
        </aside>
    )
}
