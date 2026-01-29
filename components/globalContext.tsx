'use client'

import { createContext, useContext, useState } from 'react'

type GlobalContextType = {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

const GlobalContext = createContext<GlobalContextType>({
  sidebarOpen: true,
  setSidebarOpen: () => {},
})

export function GlobalProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)



  return (
    <GlobalContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => useContext(GlobalContext)

export default GlobalContext
