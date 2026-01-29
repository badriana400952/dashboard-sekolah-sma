import { ILoading } from '@/interface/loading'
import { Siswa } from '@/interface/siswa'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const useKelasSiswa = () => {
    const [kelasSiswa, setSiswa] = useState<Siswa[]>([])
    const [loading, setLoading] = useState<ILoading>({} as ILoading)

    const handleGetKelasSiswa = async () => {
        setLoading((prev) => ({
            ...prev, get: true,
            post: false,
            put: false,
            delete: false
        }))
        try {
            const response = await fetch('/api/kelas-siswa')
            const data = await response.json()
            setLoading((prev) => ({
                ...prev, get: false,
                post: false,
                put: false,
                delete: false
            }))
            setSiswa(data)
        } catch (error) {
            throw error
        }
    }


    return {
        kelasSiswa,
        loading,
        handleGetKelasSiswa,
    }
}

export default useKelasSiswa