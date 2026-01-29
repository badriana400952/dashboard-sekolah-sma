import { Button } from '@/components/ui/button'
import { LoaderFive } from '@/components/ui/loader'
import { Selects } from '@/components/ui/selects'
import useKelas from '@/hooks/options/useKelas'
import useSiswa from '@/hooks/siswa/useSiswa'
import React from 'react'

interface ButtonProps {
    modals: boolean
    setModals: React.Dispatch<React.SetStateAction<boolean>>
    ids: number
    handleEdit:(e: React.FormEvent<HTMLFormElement>, ids: string) => void
    setSelectedSiswa: React.Dispatch<React.SetStateAction<any>>
    selectedSiswa: any
    loading: { get: boolean; post: boolean; put: boolean; delete: boolean }
}

const TambahKelas = ({ modals, setModals, ids, handleEdit, setSelectedSiswa, selectedSiswa, loading }: ButtonProps) => {
    const { optionKelas } = useKelas()
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleEdit(e, ids.toString())
             setModals(false)
        }}>

            <Selects
                label="Kelas"
                placeholder="Pilih Kelas"
                className="w-full mb-1"
                data={optionKelas}
                onChange={(value) => setSelectedSiswa({ ...selectedSiswa, kelas_id: Number(value) })}
            />
            <div className='flex justify-center my-6 gap-2'>
                {loading.put ?
                    <LoaderFive text="Uploading Kelas Siswa..." /> : <>
                        <Button onClick={() => setModals(!modals)} type='button' className='bg-red-700 px-6'>Batal</Button>
                        <Button type='submit' className='px-6 bg-[#1d293d]'>Simpan</Button>
                    </>
                }

            </div>
        </form>

    )
}

export default TambahKelas