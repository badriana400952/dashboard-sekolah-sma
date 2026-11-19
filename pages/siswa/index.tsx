import Modal from '@/components/ui/animated-modal'
import { Button } from '@/components/ui/button'
import ContextDataTable from '@/components/ui/dataTable'
import { Label } from '@/components/ui/label'
import { Selects } from '@/components/ui/selects'
import useOptionTahunAjaran from '@/hooks/options/useOptionTahunAjaran'
import useSiswa from '@/hooks/siswa/useSiswa'
import Link from 'next/link'
import { useState } from 'react'
import TambahKelas from './edit-siswa'
import useKelas from '@/hooks/options/useKelas'
import { Input } from '@/components/ui/input'
import type { Siswa } from '@/interface/siswa';
const Siswa = () => {
    const { 
        siswa, 
        selectedSiswa, 
        loading, 
        params, 
        record,
        setRecord,
        handleEdit, 
        handleGetSiswa, 
        setSelectedSiswa, 
        setParams, 
        handleDelete } = useSiswa()
    const { optTahunAjaran } = useOptionTahunAjaran()
    const { optionKelas } = useKelas()
    const [modals, setModals] = useState(false)

    return (
        <div className='flex-col justify-center p-4'>
            <div className='p-2 flex justify-between items-end mb-5' >
                <h2 className='text-2xl font-bold '>Data Siswa</h2>
                <div>
                    <Button type="button" className='mt-6 px-4 bg-[#1d293d] text-white hover:bg-[#2e446a]' >
                        <Link href="/siswa/form-siswa">Tambah Siswa</Link>
                    </Button>
                </div>
            </div>
            <div className="bg-white w-full  shadow-md hover:shadow-lg  transition-shadow cursor-pointer rounded-sm mb-4 ">
                <div className='w-full bg-[#1d293d] px-2 py-2 text-white  rounded-t-md'>
                    <h2>Pilih Kelas</h2>
                </div>
                <div className="w-full  flex justify-between p-1 px-3 gap-4 mt-2">
                    <div className='flex-col justyfy-start gap-2 flex w-full'>
                        <label htmlFor="tahun" className=''>Tahun Ajaran</label>
                    </div>
                    <div className=" w-full  ">
                        <Selects
                            value={params?.tahun_ajaran_id}
                            data={optTahunAjaran}
                            placeholder="Pilih Tahun Ajaran"
                            className='w-full'
                            onChange={((value) => setParams({ ...params, tahun_ajaran_id: String(value) }))}
                        />
                    </div>
                </div>

                <div className="flex justify-between p-1 px-3 gap-4">
                    <div className='flex-col justyfy-start gap-2 flex w-full'>
                        <label htmlFor="kelas" className=''>Kelas</label>
                    </div>
                    <div className="w-full">
                        <Selects
                            value={params?.kelas_id}
                            data={optionKelas}
                            placeholder="Pilih Kelas"
                            className='w-full'
                            onChange={((value) => setParams({ ...params, kelas_id: String(value) }))}
                        />
                    </div>
                </div>
                <div className="flex justify-between p-1 px-3 gap-4">
                    <div className='flex-col justyfy-start gap-2 flex w-full'>
                        <label htmlFor="nama_siswa" className=''>Nama Siswa</label>
                    </div>
                    <div className="w-full">
                        <Input 
                            type="text" 
                            placeholder='Masukkan Nama Siswa'
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                            value={params?.nama_siswa || ''}
                            onChange={(e) => setParams({...params, nama_siswa: e.target.value})}
                        />
                    </div>
                </div>
                <div className="flex  justify-between p-1 px-3 gap-4">
                    <Button type="submit" onClick={handleGetSiswa} className='mt-6 mb-6 px-6 bg-[#1d293d] text-white hover:bg-[#2e446a]' >
                        Cari Siswa
                    </Button>
                </div>
            </div>

            <div className="bg-white w-full  shadow-md hover:shadow-lg  transition-shadow cursor-pointer rounded-sm mb-4 ">
                <div className='w-full bg-[#1d293d] px-2 py-2 text-white  rounded-t-md'>
                    <h2>Data Siswa</h2>
                </div>
                <div className="w-full  flex justify-start p-1 px-3 gap-4 mt-2">
                    <div className='flex flex-col gap-4'>
                        <Label>Tahun Ajaran</Label>
                        <Label>Kelas</Label>
                        <Label>Nama Siswa</Label>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Label>:</Label>
                        <Label>:</Label>
                        <Label>:</Label>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Label>{params?.tahun_ajaran_id ? optTahunAjaran.find(ta => ta.value === params.tahun_ajaran_id)?.label : "2023/2024"}</Label>
                        <Label>{params?.kelas_id ? optionKelas.find(k => k.value === Number(params.kelas_id))?.label : "VI"}</Label>
                        <Label>{params?.nama_siswa ? params?.nama_siswa : " "}</Label>
                    </div>
                </div>
                <hr className='text-gray-700 my-6' />
                <div className='p-3'>
                    <ContextDataTable<Siswa>
                        className="custom-table rounded-md border border-gray-200"
                        withColumnBorders
                        striped
                        withTableBorder
                        highlightOnHover
                        height={siswa.length > 10 ? 550 : siswa.length === 0 ? 100 : "auto"}
                        records={Array.isArray(siswa) ? siswa : []}
                        columns={[
                            {
                                accessor: "nama_siswa",
                                title: "Nama",
                                render: (row) => row?.nama_siswa,
                            },
                            {
                                accessor: "nama_lengkap_siswa",
                                title: "Nama Lengkap",
                                render: (row) => row?.nama_lengkap_siswa,
                            },
                            {
                                accessor: "jenis_kelamin",
                                title: "Jenis Kelamin",
                                render: (row) => row?.jenis_kelamin,
                            },
                            {
                                accessor: "nis",
                                title: "NIS",
                                render: (row) => row?.nis,
                            },
                            {
                                accessor: "nama",
                                title: "Kelas",
                                render: (row) => row.kelas?.nama,
                            },
                            {
                                accessor: "nama",
                                title: "Tahun Ajaran",
                                render: (row) => row.tahun_ajaran?.nama,
                            },
                            {
                                accessor: "agama",
                                title: "Agama",
                                render: (row) => row?.agama,
                            },
                            {
                                accessor: "nama_ibu",
                                title: "Nama Ibu",
                                render: (row) => row?.nama_ibu,
                            },
                            {
                                accessor: "no_hp_ortu",
                                title: "No HP Orang Tua",
                                render: (row) => row?.no_hp_ortu,
                            },
                            {
                                accessor: "email_ortu",
                                title: "Email Orang Tua",
                                render: (row) => row?.email_ortu,
                            },
                        ]}
                        contextMenuItems={(row) => [
                            {
                                label: "Edit Nilai",
                                onClick: () => {
                                    setRecord({...row})
                                    setModals(true)
                                },
                            },
                            {
                                label: "Hapus",
                                color: "red",
                                onClick: () => handleDelete(row.id), // ⬅️ FIX
                            },
                        ]}
                    />

                </div>
            </div>

            <Modal
                opened={modals}
                onClose={() => setModals(false)}
                size="xl"
                title={"Edit Siswa"}
                centered
            >
                <TambahKelas setModals={setModals} modals={modals} record={record} handleEdit={handleEdit} loading={loading} setRecord={setRecord} />
            </Modal>

        </div >
    )
}

export default Siswa