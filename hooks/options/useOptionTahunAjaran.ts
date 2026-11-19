import React, { useEffect, useState } from 'react'

interface OptionTahunAjaran {
    value: number | string
    label: string
}
interface ResponseAPITahunAjaran {
    id: number | string
    nama: string
}
const useOptionTahunAjaran = () => {
    const [optTahunAjaran, setOptTahunAjaran] = useState<OptionTahunAjaran[]>([])

    useEffect(() => {
    const fetchTahunAjaran = async () => {
        try {
            const response = await fetch('/api/options/tahun-ajaran')
            const data = await response.json()
            setOptTahunAjaran(data.map((item: ResponseAPITahunAjaran) => ({
                value: item.id,
                label: item.nama
            })))
        } catch (error) {
            throw error
        }
    }

        fetchTahunAjaran()
    }, [])

    return { optTahunAjaran }
}

export default useOptionTahunAjaran