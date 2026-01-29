import { Menu } from 'lucide-react'
import { useGlobal } from '../globalContext'

export default function Header() {
        const { sidebarOpen,setSidebarOpen } = useGlobal()
  return (
    <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center">
      <button className="p-2 hover:bg-slate-100 rounded-lg"      onClick={() => setSidebarOpen(!sidebarOpen)}>
        <Menu size={22} />
      </button>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
          A
        </div>
        <span className="text-sm font-medium">
          Admin Beta Nurul Auwalin
        </span>
      </div>
    </header>
  )
}
