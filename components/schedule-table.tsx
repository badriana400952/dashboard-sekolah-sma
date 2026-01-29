'use client'

import { Card } from '@/components/ui/card'

const scheduleData = [
  {
    class: 'X',
    sessions: [
      { time: '07.00 - 07.45', mon: 'Pendidikan Agama', tue: 'Pend. Kewarganegaraan', wed: 'Bahasa Indonesia', thu: 'Matematika', fri: 'Bahasa Inggris', sat: 'Seni Budaya' },
      { time: '07.45 - 08.30', mon: 'Pendidikan Agama', tue: 'Pend. Kewarganegaraan', wed: 'Bahasa Indonesia', thu: 'Matematika', fri: 'Bahasa Inggris', sat: 'Seni Budaya' },
      { time: '08.30 - 09.15', mon: 'Pendidikan Jasmani', tue: 'Pendidikan Jasmani', wed: 'Pendidikan Jasmani', thu: 'Pendidikan Jasmani', fri: 'Pendidikan Jasmani', sat: 'Pendidikan Jasmani' },
      { time: '09.15 - 10.00', mon: 'Pendidikan Jasmani', tue: 'Pendidikan Jasmani', wed: 'Pendidikan Jasmani', thu: 'Pendidikan Jasmani', fri: 'Pendidikan Jasmani', sat: 'Pendidikan Jasmani' },
      { time: '10.00 - 10.15', mon: 'ISTIRAHAT', tue: 'ISTIRAHAT', wed: 'ISTIRAHAT', thu: 'ISTIRAHAT', fri: 'ISTIRAHAT', sat: 'ISTIRAHAT', isBreak: true },
      { time: '10.15 - 11.00', mon: 'Sejarah Indonesia', tue: 'Sejarah Indonesia', wed: 'Geografi', thu: 'Geografi', fri: 'Biologi', sat: 'Kimia' },
      { time: '11.00 - 11.45', mon: 'Sejarah Indonesia', tue: 'Sejarah Indonesia', wed: 'Geografi', thu: 'Geografi', fri: 'Biologi', sat: 'Kimia' },
      { time: '11.45 - 12.30', mon: 'Fisika', tue: 'Kimia', wed: 'Biologi', thu: 'Fisika', fri: 'Kimia', sat: 'Biologi' },
      { time: '12.30 - 13.15', mon: 'HALAL AN MAKAN', tue: 'HALAL AN MAKAN', wed: 'HALAL AN MAKAN', thu: 'HALAL AN MAKAN', fri: 'HALAL AN MAKAN', sat: 'HALAL AN MAKAN', isBreak: true },
      { time: '13.15 - 14.00', mon: 'Kompetensi Kejuruan', tue: 'Kompetensi Kejuruan', wed: 'Kompetensi Kejuruan', thu: 'Kompetensi Kejuruan', fri: 'Kompetensi Kejuruan', sat: 'Kompetensi Kejuruan' },
      { time: '14.00 - 14.45', mon: 'Kompetensi Kejuruan', tue: 'Kompetensi Kejuruan', wed: 'Kompetensi Kejuruan', thu: 'Kompetensi Kejuruan', fri: 'Kompetensi Kejuruan', sat: 'Kompetensi Kejuruan' },
      { time: '14.45 - 15.00', mon: 'Doa Penutup', tue: 'Doa Penutup', wed: 'Doa Penutup', thu: 'Doa Penutup', fri: 'Doa Penutup', sat: 'Doa Penutup' },
    ]
  },
  {
    class: 'XI',
    sessions: [
      { time: '07.00 - 07.45', mon: 'Pendidikan Agama', tue: 'Pend. Kewarganegaraan', wed: 'Bahasa Indonesia', thu: 'Matematika', fri: 'Bahasa Inggris', sat: 'Seni Budaya' },
      { time: '07.45 - 08.30', mon: 'Pendidikan Agama', tue: 'Pend. Kewarganegaraan', wed: 'Bahasa Indonesia', thu: 'Matematika', fri: 'Bahasa Inggris', sat: 'Seni Budaya' },
      { time: '08.30 - 09.15', mon: 'Pendidikan Jasmani', tue: 'Pendidikan Jasmani', wed: 'Pendidikan Jasmani', thu: 'Pendidikan Jasmani', fri: 'Pendidikan Jasmani', sat: 'Pendidikan Jasmani' },
      { time: '09.15 - 10.00', mon: 'Pendidikan Jasmani', tue: 'Pendidikan Jasmani', wed: 'Pendidikan Jasmani', thu: 'Pendidikan Jasmani', fri: 'Pendidikan Jasmani', sat: 'Pendidikan Jasmani' },
      { time: '10.00 - 10.15', mon: 'ISTIRAHAT', tue: 'ISTIRAHAT', wed: 'ISTIRAHAT', thu: 'ISTIRAHAT', fri: 'ISTIRAHAT', sat: 'ISTIRAHAT', isBreak: true },
      { time: '10.15 - 11.00', mon: 'Sejarah Indonesia', tue: 'Sejarah Indonesia', wed: 'Geografi', thu: 'Geografi', fri: 'Biologi', sat: 'Kimia' },
      { time: '11.00 - 11.45', mon: 'Sejarah Indonesia', tue: 'Sejarah Indonesia', wed: 'Geografi', thu: 'Geografi', fri: 'Biologi', sat: 'Kimia' },
      { time: '11.45 - 12.30', mon: 'Fisika', tue: 'Kimia', wed: 'Biologi', thu: 'Fisika', fri: 'Kimia', sat: 'Biologi' },
      { time: '12.30 - 13.15', mon: 'HALAL AN MAKAN', tue: 'HALAL AN MAKAN', wed: 'HALAL AN MAKAN', thu: 'HALAL AN MAKAN', fri: 'HALAL AN MAKAN', sat: 'HALAL AN MAKAN', isBreak: true },
      { time: '13.15 - 14.00', mon: 'Kompetensi Kejuruan', tue: 'Kompetensi Kejuruan', wed: 'Kompetensi Kejuruan', thu: 'Kompetensi Kejuruan', fri: 'Kompetensi Kejuruan', sat: 'Kompetensi Kejuruan' },
      { time: '14.00 - 14.45', mon: 'Kompetensi Kejuruan', tue: 'Kompetensi Kejuruan', wed: 'Kompetensi Kejuruan', thu: 'Kompetensi Kejuruan', fri: 'Kompetensi Kejuruan', sat: 'Kompetensi Kejuruan' },
      { time: '14.45 - 15.00', mon: 'Doa Penutup', tue: 'Doa Penutup', wed: 'Doa Penutup', thu: 'Doa Penutup', fri: 'Doa Penutup', sat: 'Doa Penutup' },
    ]
  },
  {
    class: 'XII',
    sessions: [
      { time: '07.00 - 07.45', mon: 'Pendidikan Agama', tue: 'Pend. Kewarganegaraan', wed: 'Bahasa Indonesia', thu: 'Matematika', fri: 'Bahasa Inggris', sat: 'Seni Budaya' },
      { time: '07.45 - 08.30', mon: 'Pendidikan Agama', tue: 'Pend. Kewarganegaraan', wed: 'Bahasa Indonesia', thu: 'Matematika', fri: 'Bahasa Inggris', sat: 'Seni Budaya' },
      { time: '08.30 - 09.15', mon: 'Pendidikan Jasmani', tue: 'Pendidikan Jasmani', wed: 'Pendidikan Jasmani', thu: 'Pendidikan Jasmani', fri: 'Pendidikan Jasmani', sat: 'Pendidikan Jasmani' },
      { time: '09.15 - 10.00', mon: 'Pendidikan Jasmani', tue: 'Pendidikan Jasmani', wed: 'Pendidikan Jasmani', thu: 'Pendidikan Jasmani', fri: 'Pendidikan Jasmani', sat: 'Pendidikan Jasmani' },
      { time: '10.00 - 10.15', mon: 'ISTIRAHAT', tue: 'ISTIRAHAT', wed: 'ISTIRAHAT', thu: 'ISTIRAHAT', fri: 'ISTIRAHAT', sat: 'ISTIRAHAT', isBreak: true },
      { time: '10.15 - 11.00', mon: 'Sejarah Indonesia', tue: 'Sejarah Indonesia', wed: 'Geografi', thu: 'Geografi', fri: 'Biologi', sat: 'Kimia' },
      { time: '11.00 - 11.45', mon: 'Sejarah Indonesia', tue: 'Sejarah Indonesia', wed: 'Geografi', thu: 'Geografi', fri: 'Biologi', sat: 'Kimia' },
      { time: '11.45 - 12.30', mon: 'Fisika', tue: 'Kimia', wed: 'Biologi', thu: 'Fisika', fri: 'Kimia', sat: 'Biologi' },
      { time: '12.30 - 13.15', mon: 'HALAL AN MAKAN', tue: 'HALAL AN MAKAN', wed: 'HALAL AN MAKAN', thu: 'HALAL AN MAKAN', fri: 'HALAL AN MAKAN', sat: 'HALAL AN MAKAN', isBreak: true },
      { time: '13.15 - 14.00', mon: 'Kompetensi Kejuruan', tue: 'Kompetensi Kejuruan', wed: 'Kompetensi Kejuruan', thu: 'Kompetensi Kejuruan', fri: 'Kompetensi Kejuruan', sat: 'Kompetensi Kejuruan' },
      { time: '14.00 - 14.45', mon: 'Kompetensi Kejuruan', tue: 'Kompetensi Kejuruan', wed: 'Kompetensi Kejuruan', thu: 'Kompetensi Kejuruan', fri: 'Kompetensi Kejuruan', sat: 'Kompetensi Kejuruan' },
      { time: '14.45 - 15.00', mon: 'Doa Penutup', tue: 'Doa Penutup', wed: 'Doa Penutup', thu: 'Doa Penutup', fri: 'Doa Penutup', sat: 'Doa Penutup' },
    ]
  }
]

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
const dayKeys = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const

export function ScheduleTable() {
  return (
    <div className="space-y-8">
      {scheduleData.map((classData) => (
        <div key={classData.class}>
          <h2 className="text-2xl font-bold text-primary mb-4">Kelas {classData.class}</h2>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full border-collapse ">
              <thead>
                <tr>
                  <th className="bg-[#1d293d] text-primary-foreground border border-primary p-3 text-center font-bold min-w-24">
                    JAM
                  </th>
                  {days.map((day) => (
                    <th key={day} className="bg-[#1d293d] text-primary-foreground border border-primary p-3 text-center font-bold min-w-32">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {classData.sessions.map((session, idx) => (
                  <tr key={idx}>
                    <td className={`border border-border p-3 text-center font-semibold text-sm ${
                      session.isBreak ? 'bg-yellow-100 text-secondary-foreground' : 'bg-background'
                    }`}>
                      {session.time}
                    </td>
                    {dayKeys.map((dayKey) => (
                      <td key={dayKey} className={`border border-border p-3 text-center text-sm ${
                        session.isBreak 
                          ? 'bg-yellow-100 text-secondary-foreground font-semibold' 
                          : 'bg-background hover:bg-muted'
                      }`}>
                        {session[dayKey]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}
