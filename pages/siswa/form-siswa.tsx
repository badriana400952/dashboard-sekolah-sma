import { Button } from '@/components/ui/button'
import { DatePickerInput } from '@mantine/dates';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useSiswa from '@/hooks/siswa/useSiswa'
import React from 'react'
import { DateInput } from '@/components/ui/date-input';
import { jenisKelamin } from '@/data/jenis-kelamin';
import { Selects } from '@/components/ui/selects';

const FormSiswa = (props) => {
    const { setSelectedSiswa, selectedSiswa, handleSimpan } = useSiswa()
    return (
        <form className='p-6 flex-col justify-center' onSubmit={handleSimpan}>
            <div className="bg-white  shadow-md hover:shadow-lg transition-shadow cursor-pointer rounded-md ">
                <div className='w-full bg-[#1d293d] px-2 py-2 text-white  rounded-t-md'>
                    <h2>Input Data Siswa</h2>
                </div>


                <div className="grid grid-cols-12 grid-rows-9 gap-1 p-5">
                    <div className="col-span-4">
                        <Label>Nis</Label>
                    </div>
                    <div className="col-start-5">:</div>
                    <div className="col-span-7 col-start-6">
                        <Input className='w-full mt-1'
                            placeholder='Nis'
                            name='nis'
                            value={selectedSiswa?.nis}
                            onChange={(e) =>
                                setSelectedSiswa({
                                    ...selectedSiswa,
                                    nis: Number(e.target.value)
                                })}
                        />
                    </div>
                    <div className="col-span-4 row-start-2">
                        <Label>Nama Siswa</Label>
                    </div>
                    <div className="col-start-5 row-start-2">:</div>
                    <div className="col-span-7 col-start-6 row-start-2">
                        <Input className='w-full mt-1' placeholder='Nama Siswa' value={selectedSiswa?.nama_siswa}
                            onChange={(e) => setSelectedSiswa({ ...selectedSiswa, nama_siswa: e.target.value })} />
                    </div>
                    <div className="col-span-4 row-start-3">
                        <Label>Jenis Kelamin</Label>
                    </div>
                    <div className="col-start-5 row-start-3">:</div>
                    <div className="col-span-7 col-start-6 row-start-3">
                        <Selects
                        className='w-full'
                            value={selectedSiswa?.jenis_kelamin}
                            data={jenisKelamin}
                            onChange={((e) => setSelectedSiswa({ ...selectedSiswa, jenis_kelamin: e }))}
                        />
                    </div>
                    <div className="col-span-4 row-start-4">
                        <Label>Tanggal Lahir</Label>
                    </div>
                    <div className="col-start-5 row-start-4">:</div>
                    <div className="col-span-7 col-start-6 row-start-4">
                        <DateInput
                            value={selectedSiswa?.ttl}
                            placeholder="Pilih tanggal"
                            onChange={(value: any) => {
                                setSelectedSiswa({ ...selectedSiswa, ttl: value });
                            }}
                        />
                    </div>
                    <div className="col-span-4 row-start-5">
                        <Label>Agama</Label>
                    </div>
                    <div className="col-start-5 row-start-5">:</div>
                    <div className="col-span-7 col-start-6 row-start-5">
                        <Input className='w-full mt-1' placeholder='Agama'
                            onChange={((e) => setSelectedSiswa({ ...selectedSiswa, agama: e.target.value }))} />
                    </div>
                    <div className="col-span-4 row-start-6">
                        <Label>Nama Ibu</Label>
                    </div>
                    <div className="col-start-5 row-start-6">:</div>
                    <div className="col-span-7 col-start-6 row-start-6">
                        <Input className='w-full mt-1' placeholder='Nama Ibu'
                            onChange={((e) => setSelectedSiswa({ ...selectedSiswa, nama_ibu: e.target.value }))} />
                    </div>
                    <div className="col-span-4 row-start-7">
                        <Label>No. HP Orang Tua</Label>
                    </div>
                    <div className="col-start-5 row-start-7">:</div>
                    <div className="col-span-7 col-start-6 row-start-7">
                        <Input className='w-full mt-1' placeholder='No. HP Orang Tua'
                            onChange={((e) => setSelectedSiswa({ ...selectedSiswa, no_hp_ortu: e.target.value }))} />
                    </div>
                    <div className="col-span-4 row-start-8">
                        <Label>Email Orang Tua</Label>
                    </div>
                    <div className="col-start-5 row-start-8">:</div>
                    <div className="col-span-7 col-start-6 row-start-8">
                        <Input className='w-full mt-1' placeholder='Email Orang Tua'
                            name='email_ortu'
                            onChange={((e) => setSelectedSiswa({ ...selectedSiswa, email_ortu: e.target.value }))} />
                    </div>
                    <div className="col-span-12 row-start-9">
                        <Button type="submit" className="w-full mt-4 bg-[#1d293d] text-white">Simpan</Button>
                    </div>
                </div>

            </div>
        </form>
    )
}

export default FormSiswa