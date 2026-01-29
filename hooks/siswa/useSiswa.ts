import { ILoading } from '@/interface/loading'
import { Siswa } from '@/interface/siswa'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const useSiswa = () => {
    const [siswa, setSiswa] = useState<Siswa[]>([])
    const [selectedSiswa, setSelectedSiswa] = useState<Siswa | null>(null)
    const [loading, setLoading] = useState<ILoading>({} as ILoading)
    const router = useRouter()

    const handleGetSiswa = async () => {
        setLoading((prev) => ({
            ...prev, get: true,
            post: false,
            put: false,
            delete: false
        }))
        try {
            const response = await fetch('/api/siswa')
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

    useEffect(() => {
        handleGetSiswa()
    }, [])
    const handleSimpan = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading((prev) => ({
            ...prev, get: false,
            post: true,
            put: false,
            delete: false
        }))
        try {
            const siswa = await fetch('/api/siswa', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...selectedSiswa,
                    nama_lengkap_siswa: "UNDEFINED"
                })
            })
            if (!siswa.ok) {
                throw new Error(siswa.statusText)
            }
            setLoading((prev) => ({
                ...prev, get: false,
                post: false,
                put: false,
                delete: false
            }))
            const response = await siswa.json()
            handleGetSiswa()
            router.push(`/siswa`)
            return response
        } catch (error) {
            throw error
        }
    }
    const handleEdit = async (
        e: React.FormEvent<HTMLFormElement>,
        ids: string
    ) => {
        e.preventDefault()

        setLoading({ get: false, post: false, put: true, delete: false })

        try {
            const res = await fetch(`/api/siswa/${ids}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(selectedSiswa),
            })

            if (!res.ok) throw new Error(res.statusText)

            await res.json()
            await handleGetSiswa() // ✅ ini cukup

        } catch (error) {
            console.error(error)
        } finally {
            setLoading({ get: false, post: false, put: false, delete: false })
        }
    }

    return {
        siswa,
        loading,
        selectedSiswa,
        handleGetSiswa,
        handleSimpan,
        setSelectedSiswa,
        handleEdit
    }
}

export default useSiswa