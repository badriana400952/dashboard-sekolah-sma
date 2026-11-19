import { Button } from '@/components/ui/button';
import ContextDataTable from '@/components/ui/dataTable';
import { DateInput } from '@/components/ui/date-input';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Selects } from '@/components/ui/selects';
import { jenisKelamin } from '@/data/jenis-kelamin';
import useKelas from '@/hooks/options/useKelas';
import useOptionTahunAjaran from '@/hooks/options/useOptionTahunAjaran';
import useSiswa from '@/hooks/siswa/useSiswa';
import { Trash } from 'lucide-react';
import { InputNamaBulanTahun } from "copong-date";

const FormSiswa = () => {
    const { 
        dataGroup, 
        setSelectedSiswa, 
        selectedSiswa, 
        setDataGroup, 
        handlegroupingSiswa, 
        handleClearState,
        handleSimpan
     } = useSiswa()
    const { optionKelas } = useKelas()
    const { optTahunAjaran } = useOptionTahunAjaran()
    console.log({ dataGroup })
    return (
        <form  onSubmit={handleSimpan}>
            <div className='p-6 flex-col justify-center'>
                <div className="bg-white  shadow-md hover:shadow-lg transition-shadow cursor-pointer rounded-md ">
                    <div className='w-full bg-[#1d293d] px-2 py-2 text-white  rounded-t-md'>
                        <h2>Input Data Siswa</h2>
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
                                value={selectedSiswa?.nis}
                                onChange={(e) =>
                                    setSelectedSiswa({
                                        ...selectedSiswa,
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
                                value={selectedSiswa?.nama_siswa}
                                onChange={(e) =>
                                    setSelectedSiswa({ ...selectedSiswa, nama_siswa: e.target.value })
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
                                value={selectedSiswa?.nama_lengkap_siswa}
                                onChange={(e) =>
                                    setSelectedSiswa({
                                        ...selectedSiswa,
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
                                value={selectedSiswa?.jenis_kelamin}
                                data={jenisKelamin}
                                onChange={(e) =>
                                    setSelectedSiswa({ ...selectedSiswa, jenis_kelamin: e })
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
                                value={selectedSiswa?.ttl}
                                placeholder="Pilih tanggal"
                                onChange={(value: any) =>
                                    setSelectedSiswa({ ...selectedSiswa, ttl: value })
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
                                value={selectedSiswa?.agama}
                                placeholder="Agama"
                                onChange={(e) =>
                                    setSelectedSiswa({ ...selectedSiswa, agama: e.target.value })
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
                                value={selectedSiswa?.nama_ibu}
                                onChange={(e) =>
                                    setSelectedSiswa({ ...selectedSiswa, nama_ibu: e.target.value })
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
                                value={selectedSiswa?.no_hp_ortu}
                                onChange={(e) =>
                                    setSelectedSiswa({ ...selectedSiswa, no_hp_ortu: e.target.value })
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
                                value={selectedSiswa?.email_ortu}
                                placeholder="Email Orang Tua"
                                onChange={(e) =>
                                    setSelectedSiswa({ ...selectedSiswa, email_ortu: e.target.value })
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
                                value={String(selectedSiswa?.kelas_id || '')}
                                data={optionKelas}
                                onChange={(e) =>
                                    setSelectedSiswa({
                                        ...selectedSiswa,
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
                                value={String(selectedSiswa?.tahun_ajaran_id || '')}
                                data={optTahunAjaran}
                                onChange={(e) =>
                                    setSelectedSiswa({
                                        ...selectedSiswa,
                                        tahun_ajaran_id: Number(e),
                                    })
                                }
                            />
                        </div>

                        {/* Button */}
                        <div className="col-span-12">
                            <Button
                                type="button"
                                onClick={() => {
                                    handlegroupingSiswa()
                                    handleClearState()
                                }}
                                className="w-full mt-4 bg-[#1d293d] text-white"
                            >
                                Simpan
                            </Button>
                        </div>
                    </div>


                </div>
            </div>

            <div className='p-6'>
                <ContextDataTable
                    className="custom-table rounded-md border border-gray-200"
                    withColumnBorders
                    striped
                    withTableBorder
                    highlightOnHover
                    height={dataGroup?.length > 10 ? 550 : dataGroup.length === 0 ? 100 : "auto"}
                    records={Array.isArray(dataGroup) ? dataGroup : []}
                    columns={[
                        {
                            accessor: "nama_siswa",
                            title: "Nama",
                        },
                        {
                            accessor: "nis",
                            title: "NIS",
                        },
                        {
                            accessor: "jenis_kelamin",
                            title: "Jenis Kelamin",
                            width: 150,
                        },
                        {
                            accessor: "agama",
                            title: "Agama",
                        },
                        {
                            accessor: "ttl",
                            title: "Tanggal Lahir",
                            render: (row) => InputNamaBulanTahun(row.ttl),
                        },
                        {
                            accessor: "nama_ibu",
                            title: "Nama Ibu",
                        },
                        {
                            accessor: "no_hp_ortu",
                            title: "No HP Orang Tua",
                        },
                        {
                            accessor: "email_ortu",
                            title: "Email Orang Tua",
                        },
                    ]}
                    contextMenuItems={(row) => [
                        {
                            label: "Delete",
                            icon: <Trash />,
                            onClick: () => {
                                setDataGroup((prev) => prev.filter((item) => item.nis !== row.nis))
                            },
                        },
                    ]}
                />

                <div className='mt-8 flex justify-center gap-4 '>
                    <Button
                        type="button"
                        onClick={() => {
                            setDataGroup([])
                            handleClearState()
                        }}
                        className="w-64 mt-4 bg-red-700 text-white"
                    >
                        Hapus Semua Data
                    </Button>
                    <Button
                        type="submit"
                        className="w-64 mt-4 bg-[#1d293d] text-white"
                    >
                        Simpan
                    </Button>

                </div>

            </div>
        </form>
    )
}

export default FormSiswa