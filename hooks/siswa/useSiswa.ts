import { ILoading } from '@/interface/loading'
import { Siswa } from '@/interface/siswa'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const useSiswa = () => {
    const [siswa, setSiswa] = useState<Siswa[]>([])
    const [selectedSiswa, setSelectedSiswa] = useState<Siswa | null>(null)
    const [dataGroup, setDataGroup] = useState<Siswa[]>([])
    const [loading, setLoading] = useState<ILoading>({} as ILoading)
    const router = useRouter()
    const [record, setRecord] = useState({} as Siswa)
    const [params, setParams] = useState({
        tahun_ajaran_id: '',
        kelas_id: '',
        nama_siswa: ''
    })

    const handleGetSiswa = async () => {
        setLoading((prev) => ({
            ...prev, get: true,
            post: false,
            put: false,
            delete: false
        }))
        const paramsData = {
            ...(params.tahun_ajaran_id &&  { tahun_ajaran_id: params.tahun_ajaran_id  }),
            ...(params.kelas_id && { kelas_id: params.kelas_id }),
            ...(params.nama_siswa &&   { nama_siswa: params.nama_siswa }),
        }
        try {
            const response = await fetch(`/api/siswa?${new URLSearchParams(paramsData as any)}`)
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

    const handlegroupingSiswa = () => {
        if (!selectedSiswa) return
        setDataGroup((prev) => [...prev, selectedSiswa])
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
                body: JSON.stringify(dataGroup)
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
                body: JSON.stringify(record),
            })

            if (!res.ok) throw new Error(res.statusText)

            await res.json()
            await handleGetSiswa()
        } catch (error) {
            console.error(error)
        } finally {
            setLoading({ get: false, post: false, put: false, delete: false })
        }
    }

    const handleClearState = () => {
        setSelectedSiswa({
            ...selectedSiswa,
            nis: 0,
            nama_siswa: '',
            nama_lengkap_siswa: '',
            jenis_kelamin: '',
            ttl: null,
            agama: '',
            nama_ibu: '',
            no_hp_ortu: '',
            email_ortu: '',
            kelas_id: 0,
            tahun_ajaran_id: 0
        })
    }

    const handleDelete = async (ids: number) => {
        try {
            const res = await fetch(`/api/siswa/${ids}`, {
                method: "DELETE",
            })
            console.log({res})
            if (!res.ok) throw new Error(res.statusText)
            handleGetSiswa()
        } catch (error) {
            throw error
        }
    }

    return {
        siswa,
        loading,
        selectedSiswa,
        dataGroup,
        params,
        record,
        setRecord,
        setParams,
        handleGetSiswa,
        handleSimpan,
        setSelectedSiswa,
        handleEdit,
        handlegroupingSiswa,
        setDataGroup,
        handleClearState,
        handleDelete
    }
}

export default useSiswa