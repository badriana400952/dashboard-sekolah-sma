import { useEffect, useState } from 'react'
interface IKelasResponse {
  id: number
  nama: string
}

interface IKelasOption {
  label: string
  value: number
}

const useKelas = () => {
  const [optionKelas, setOption] = useState<IKelasOption[]>([])
  useEffect(() => {
    const handleGetOptionKelas = async () => {
      try {
        const response = await fetch('/api/options/kelas')
        const data = await response.json()
        setOption(data.map((item: IKelasResponse) => ({
          label: item.nama,
          value: item.id
        })))

      } catch (error) {
        throw error
      }
    }
    handleGetOptionKelas()
  }, [])
  return { optionKelas }
}

export default useKelas