import { Calendar, Users, DollarSign } from 'lucide-react'

export default function DashboardContent() {
  return (
    <>
      <div className="relative h-[400px] w-full flex items-center justify-center overflow-hidden rounded-xl">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full p-3"
          style={{
            backgroundImage: "url('/backg.png')",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-3">
            Selamat Datang, Admin!
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Sistem Informasi Akademik MI MWB Wonorejo, Kecamatan Taun Biliar, Jawa Timur
          </p>
          <button className="bg-primary hover:bg-[#243c68] px-8 py-3 rounded-full font-medium transition-colors">
            Mulai
          </button>
        </div>
      </div>


      {/* Dashboard Cards Section */}
      <div className="flex-1 overflow-auto px-8 py-10">
        <div className="mb-8">
          <div className="bg-[#1d293d] text-white px-6 py-4 rounded-xl font-bold text-lg mb-8">
            Dashboard SIM Akademik MI MWB Wonorejo
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Jadwal Pelajaran Card */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Calendar className="text-primary" size={32} />
                </div>
                <div>
                  <p className="text-slate-600 text-sm font-medium">Jadwal</p>
                  <p className="text-slate-800 font-semibold">Pelajaran</p>
                </div>
              </div>
            </div>

            {/* Data Siswa Card */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Users className="text-primary" size={32} />
                </div>
                <div>
                  <p className="text-slate-600 text-sm font-medium">Data</p>
                  <p className="text-slate-800 font-semibold">Siswa</p>
                </div>
              </div>
            </div>

            {/* Keuangan Siswa Card */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <DollarSign className="text-primary" size={32} />
                </div>
                <div>
                  <p className="text-slate-600 text-sm font-medium">Keuangan</p>
                  <p className="text-slate-800 font-semibold">Siswa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 pt-6 text-center text-slate-500 text-sm">
          Copyright 2025 SIM Akademik - All rights reserved
        </div>
      </div>
    </>

  )
}

