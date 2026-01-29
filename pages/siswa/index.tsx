import Modal from '@/components/ui/animated-modal'
import { Button } from '@/components/ui/button'
import ContextDataTable from '@/components/ui/dataTable'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useSiswa from '@/hooks/siswa/useSiswa'
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import TambahKelas from './tambah-kelas'
import useKelasSiswa from '@/hooks/kelas-siswa/useKelasSiswa'
import { KelasSiswa } from '@/interface/kelas-siswa'

const Siswa = (props) => {
    const { siswa, handleEdit, setSelectedSiswa, selectedSiswa, loading } = useSiswa()
    const { handleGetKelasSiswa, kelasSiswa } = useKelasSiswa()
    const [modals, setModals] = useState(false)
    const [ids, setIds] = useState(0)
    useEffect(() => {
        handleGetKelasSiswa()
    }, [])

    console.log({ kelasSiswa })
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
                        <Input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                </div>
                <div className="flex justify-between p-1 px-3 gap-4">
                    <div className='flex-col justyfy-start gap-2 flex w-full'>
                        <label htmlFor="semester" className=''>Semester</label>
                    </div>
                    <div className=" w-full  ">
                        <Input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                </div>
                <div className="flex justify-between p-1 px-3 gap-4">
                    <div className='flex-col justyfy-start gap-2 flex w-full'>
                        <label htmlFor="kelas" className=''>Kelas</label>
                    </div>
                    <div className="w-full">
                        <Input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                </div>
                <div className="flex  justify-between p-1 px-3 gap-4">
                    <Button type="button" className='mt-6 mb-6 px-6 bg-[#1d293d] text-white hover:bg-[#2e446a]' >
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
                        <Label>Semester</Label>
                        <Label>Kelas</Label>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Label>:</Label>
                        <Label>:</Label>
                        <Label>:</Label>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Label>2023/2024</Label>
                        <Label>Ganjil</Label>
                        <Label>VI</Label>
                    </div>
                </div>
                <hr className='text-gray-700 my-6' />
                <div className='p-3'>
                    <ContextDataTable<KelasSiswa>
                        className="custom-table rounded-md border border-gray-200"
                        withColumnBorders
                        striped
                        withTableBorder
                        highlightOnHover
                        height={kelasSiswa.length > 10 ? 550 : kelasSiswa.length === 0 ? 100 : "auto"}
                        records={Array.isArray(kelasSiswa) ? kelasSiswa : []}
                        columns={[
                            {
                                accessor: "nama_siswa",
                                title: "Nama",
                                render: (row) => row.siswa?.nama_siswa,
                            },
                            {
                                accessor: "nama_lengkap_siswa",
                                title: "Nama Lengkap",
                                render: (row) => row.siswa?.nama_lengkap_siswa,
                            },
                            {
                                accessor: "jenis_kelamin",
                                title: "Jenis Kelamin",
                                render: (row) => row.siswa?.jenis_kelamin,
                            },
                            {
                                accessor: "nis",
                                title: "NIS",
                                render: (row) => row.siswa?.nis,
                            },
                            {
                                accessor: "kelas.nama",
                                title: "Kelas",
                                render: (row) => row.kelas?.nama,
                            },
                            {
                                accessor: "tahun_ajaran.nama",
                                title: "Tahun Ajaran",
                                render: (row) => row.tahun_ajaran?.nama,
                            },
                            {
                                accessor: "agama",
                                title: "Agama",
                                render: (row) => row.siswa?.agama,
                            },
                            {
                                accessor: "nama_ibu",
                                title: "Nama Ibu",
                                render: (row) => row.siswa?.nama_ibu,
                            },
                            {
                                accessor: "no_hp_ortu",
                                title: "No HP Orang Tua",
                                render: (row) => row.siswa?.no_hp_ortu,
                            },
                            {
                                accessor: "email_ortu",
                                title: "Email Orang Tua",
                                render: (row) => row.siswa?.email_ortu,
                            },
                        ]}
                        contextMenuItems={(row) => [
                            {
                                label: "Lihat Detail",
                                onClick: () => console.log("Detail:", row),
                            },
                            {
                                label: "Edit Nilai",
                                onClick: () => console.log("Edit:", row),
                            },
                            {
                                label: "Tambah Kelas",
                                onClick: () => {
                                    setIds(row.siswa_id) // ⬅️ FIX
                                    setModals(true)
                                },
                            },
                            {
                                label: "Hapus",
                                color: "red",
                                onClick: () => console.log("Hapus:", row.id),
                            },
                        ]}
                    />

                </div>
            </div>

            <Modal
                opened={modals}
                onClose={() => setModals(false)}
                size="md"
                title={"Tambah Kelas"}
                centered
            >
                <TambahKelas setModals={setModals} modals={modals} ids={ids} handleEdit={handleEdit} setSelectedSiswa={setSelectedSiswa} selectedSiswa={selectedSiswa} loading={loading} />
            </Modal>

        </div >
    )
}

export default Siswa