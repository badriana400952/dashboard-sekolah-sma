import { Button } from '@/components/ui/button'
import { DateInput } from '@/components/ui/date-input'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LoaderFive } from '@/components/ui/loader'
import { Selects } from '@/components/ui/selects'
import { jenisKelamin } from '@/data/jenis-kelamin'
import useKelas from '@/hooks/options/useKelas'
import useOptionTahunAjaran from '@/hooks/options/useOptionTahunAjaran'
import { Siswa } from '@/interface/siswa'
import React from 'react'

interface ButtonProps {
    modals: boolean
    setModals: React.Dispatch<React.SetStateAction<boolean>>
    record: Siswa
    handleEdit: (e: React.FormEvent<HTMLFormElement>, ids: string) => void
    setRecord: React.Dispatch<React.SetStateAction<any>>
    loading: { get: boolean; post: boolean; put: boolean; delete: boolean }
}

const TambahKelas = ({ modals, setModals, record, handleEdit, setRecord,loading  }: ButtonProps) => {
    const { optionKelas } = useKelas()
    const { optTahunAjaran } = useOptionTahunAjaran()
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleEdit(e, record.id.toString())
            setModals(false)
        }}>
            <div className='p-6 flex-col justify-center'>
                <div className="bg-white  shadow-md hover:shadow-lg transition-shadow cursor-pointer rounded-md ">
                    <div className='w-full bg-[#1d293d] px-2 py-2 text-white  rounded-t-md'>
                        <h2>Update Data Siswa</h2>
                    </div>
                    <div className="grid grid-cols-12 gap-3 p-5">
                        <div className="col-span-4">
                            <Label>NIS</Label>
                        </div>
                        <div className="col-span-1">:</div>
                        <div className="col-span-7">
                            <Input
                                className="w-full"
                                placeholder="NIS"
                                value={record?.nis}
                                onChange={(e) =>
                                    setRecord({
                                        ...record,
                                        nis: Number(e.target.value),
                                    })
                                }
                            />
                        </div>

                        {/* Nama Siswa */}
                        <div className="col-span-4">
                            <Label>Nama Siswa</Label>
                        </div>
                        <div className="col-span-1">:</div>
                        <div className="col-span-7">
                            <Input
                                className="w-full"
                                placeholder="Nama Siswa"
                                value={record?.nama_siswa}
                                onChange={(e) =>
                                    setRecord({ ...record, nama_siswa: e.target.value })
                                }
                            />
                        </div>

                        {/* Nama Lengkap */}
                        <div className="col-span-4">
                            <Label>Nama Lengkap Siswa</Label>
                        </div>
                        <div className="col-span-1">:</div>
                        <div className="col-span-7">
                            <Input
                                className="w-full"
                                placeholder="Nama Lengkap Siswa"
                                value={record?.nama_lengkap_siswa}
                                onChange={(e) =>
                                    setRecord({
                                        ...record,
                                        nama_lengkap_siswa: e.target.value,
                                    })
                                }
                            />
                        </div>

                        {/* Jenis Kelamin */}
                        <div className="col-span-4">
                            <Label>Jenis Kelamin</Label>
                        </div>
                        <div className="col-span-1">:</div>
                        <div className="col-span-7">
                            <Selects
                                className="w-full"
                                value={record?.jenis_kelamin}
                                data={jenisKelamin}
                                onChange={(e) =>
                                    setRecord({ ...record, jenis_kelamin: e })
                                }
                            />
                        </div>

                        {/* Tanggal Lahir */}
                        <div className="col-span-4">
                            <Label>Tanggal Lahir</Label>
                        </div>
                        <div className="col-span-1">:</div>
                        <div className="col-span-7">
                            <DateInput
                                value={record?.ttl}
                                placeholder="Pilih tanggal"
                                onChange={(value: any) =>
                                    setRecord({ ...record, ttl: value })
                                }
                            />
                        </div>

                        {/* Agama */}
                        <div className="col-span-4">
                            <Label>Agama</Label>
                        </div>
                        <div className="col-span-1">:</div>
                        <div className="col-span-7">
                            <Input
                                className="w-full"
                                value={record?.agama}
                                placeholder="Agama"
                                onChange={(e) =>
                                    setRecord({ ...record, agama: e.target.value })
                                }
                            />
                        </div>

                        {/* Nama Ibu */}
                        <div className="col-span-4">
                            <Label>Nama Ibu</Label>
                        </div>
                        <div className="col-span-1">:</div>
                        <div className="col-span-7">
                            <Input
                                className="w-full"
                                placeholder="Nama Ibu"
                                value={record?.nama_ibu}
                                onChange={(e) =>
                                    setRecord({ ...record, nama_ibu: e.target.value })
                                }
                            />
                        </div>

                        {/* No HP Ortu */}
                        <div className="col-span-4">
                            <Label>No. HP Orang Tua</Label>
                        </div>
                        <div className="col-span-1">:</div>
                        <div className="col-span-7">
                            <Input
                                className="w-full"
                                placeholder="No. HP Orang Tua"
                                value={record?.no_hp_ortu}
                                onChange={(e) =>
                                    setRecord({ ...record, no_hp_ortu: e.target.value })
                                }
                            />
                        </div>

                        {/* Email Ortu */}
                        <div className="col-span-4">
                            <Label>Email Orang Tua</Label>
                        </div>
                        <div className="col-span-1">:</div>
                        <div className="col-span-7">
                            <Input
                                className="w-full"
                                value={record?.email_ortu}
                                placeholder="Email Orang Tua"
                                onChange={(e) =>
                                    setRecord({ ...record, email_ortu: e.target.value })
                                }
                            />
                        </div>

                        {/* Kelas */}
                        <div className="col-span-4">
                            <Label>Kelas</Label>
                        </div>
                        <div className="col-span-1">:</div>
                        <div className="col-span-7">
                            <Selects
                                className="w-full"
                                value={String(record?.kelas_id || '')}
                                data={optionKelas}
                                onChange={(e) =>
                                    setRecord({
                                        ...record,
                                        kelas_id: Number(e),
                                    })
                                }
                            />
                        </div>

                        {/* Tahun Ajaran */}
                        <div className="col-span-4">
                            <Label>Tahun Ajaran</Label>
                        </div>
                        <div className="col-span-1">:</div>
                        <div className="col-span-7">
                            <Selects
                                className="w-full"
                                value={String(record?.tahun_ajaran_id || '')}
                                data={optTahunAjaran}
                                onChange={(e) =>
                                    setRecord({
                                        ...record,
                                        tahun_ajaran_id: Number(e),
                                    })
                                }
                            />
                        </div>

                        {/* Button */}
                        <div className="col-span-12">
                            <Button
                                type="submit"
                                className="w-full mt-4 bg-[#1d293d] text-white"
                            >
                                Update
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default TambahKelas