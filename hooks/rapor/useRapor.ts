import { IRapor } from '@/interface/rapor'
import { useState } from 'react'

const useRapor = () => {
  const [payloads, setPayloads] = useState<IRapor>({} as IRapor)
  const [responseRapor, setResponseRapor] = useState<IRapor>({} as IRapor)
  const [params, setParams] = useState({
    kelas_id: '',
    nama_siswa: ''
  })

  const handleChangeRapor = (key: string, value: string | number) => {
    console.log(value, "valuevalue")
    setPayloads({
      ...payloads,
      [key]: value,
    })
  }
  const handleGetRapor = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/rapor')
      const data = await response.json()
      setResponseRapor(data)
    } catch (error) {
      throw error
    }
  }

  return {
    data: { payloads, responseRapor,params },
    method: { handleChangeRapor, handleGetRapor,setParams }
  }
}

export default useRapor