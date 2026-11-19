import { useEffect, useState } from 'react'
interface IKelasResponse {
  id: number
  nama_lengkap_siswa: string
  id_siswa: number,
  nis: number
}

interface IKelasOption {
  label: string
  value: number
  nis: number
}

const useSiswa = () => {
  const [optSiswa, setOption] = useState<IKelasOption[]>([])
  useEffect(() => {
    const handleGetOptionSiswa = async () => {
      try {
        const response = await fetch('/api/options/siswa')
        const data = await response.json()
        setOption(data.map((item: IKelasResponse) => ({
          label: item.nama_lengkap_siswa,
          value: item.id,
          nis: item.nis
        })))

      } catch (error) {
        throw error
      }
    }
    handleGetOptionSiswa()
  }, [])
  return { optSiswa }
}

export default useSiswa