import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Selects } from '@/components/ui/selects'
import useKelas from '@/hooks/options/useKelas'
import useOptionTahunAjaran from '@/hooks/options/useOptionTahunAjaran'
import useSiswa from '@/hooks/options/useSiswa'
import useRapor from '@/hooks/rapor/useRapor'

const FormRapot = () => {
    const {optSiswa} = useSiswa()
    const {optionKelas} = useKelas()
    const {optTahunAjaran} = useOptionTahunAjaran()
    const {data, method} = useRapor()

    return (
        <form className='p-6 flex-col justify-center'>
            <div className="bg-white w-full  shadow-md hover:shadow-lg transition-shadow cursor-pointer rounded-sm mb-4 ">
                <div className='w-full bg-[#1d293d] px-2 py-2 text-white  rounded-t-md'>
                    <h2>Data Diri Siswa</h2>
                </div>
                <div className="flex justify-between p-1 px-3 gap-4">
                    <div className='flex-col justyfy-start gap-2 flex w-full'>
                        <label htmlFor="nis" className=''>Nama Lengkap</label>
                    </div>
                     <div className=" w-full  ">
                        <Selects  data={optSiswa} placeholder='Nama Lengkap' className="w-full" onChange={(e) => method.handleChangeRapor('id_siswa', e)}/>
                    </div>
                </div>
                <div className="w-full bg-r flex justify-between p-1 px-3 gap-4 mt-2">
                    <div className='flex-col justyfy-start gap-2 flex w-full'>
                        <label htmlFor="nis" className=''>Nis</label>
                    </div>
                    <div className=" w-full  ">
                        <Input disabled type="text" placeholder='NIS'
                        value={optSiswa.find(item => String(item.value) === String(data?.payloads?.id_siswa))
                        ?.nis} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                   
                </div>
                <div className="flex justify-between p-1 px-3 gap-4">
                    <div className='flex-col justyfy-start gap-2 flex w-full'>
                        <label htmlFor="nis" className=''>Kelas</label>
                    </div>
                    <div className="w-full">
                       <Selects  data={optionKelas} placeholder='10 IPA' className="w-full" onChange={(e) => method.handleChangeRapor('id_kelas', e)}/>
                    </div>
                </div>
                <div className="flex justify-between p-1 px-3 gap-4">
                    <div className='flex-col justyfy-start gap-2 flex w-full'>
                        <label htmlFor="nis" className=''>Tahun Ajaran</label>
                    </div>
                    <div className=" mb-4  w-full">
                  
                        <Selects  data={optionKelas} placeholder='2025/2026' className="w-full" onChange={(e) => method.handleChangeRapor('id_tahun_ajaran', e)}/>
                    </div>
                </div>
            </div>


            <div className="bg-white  shadow-md hover:shadow-lg transition-shadow cursor-pointer rounded-md ">
                <div className='w-full bg-[#1d293d] px-2 py-2 text-white  rounded-t-md'>
                    <h2>Masukan Nilai Siswa</h2>
                </div>

                <div className="grid grid-cols-12 grid-rows-5 p-1 px-3 gap-4 mt-4 ">
                    <div className="col-span-6">
                        <div>
                            <Label>Pendidikan Agama :</Label>
                            <Input className='w-full mt-1' type='number' placeholder='Pendidikan Agama' onChange={(e)   => method.handleChangeRapor('pendidikan_agama', e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-span-6 col-start-7">
                        <div>
                            <Label>Pendidikan Kewargenegaraan :</Label>
                            <Input className='w-full mt-1' type='number' placeholder='Pendidikan Kewargenegaraan' onChange={(e) => method.handleChangeRapor('pendidikan_kewarganegaraan', e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-span-6 row-start-2">
                        <div>
                            <Label>Bahasa Indonesia :</Label>
                            <Input className='w-full mt-1' type='number' placeholder='Bahasa Indonesia' onChange={(e) => method.handleChangeRapor('bahasa_indonesia', e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-span-6 col-start-7 row-start-2">
                        <div>
                            <Label>Matematika :</Label>
                            <Input className='w-full mt-1' type='number' placeholder='Matematika' onChange={(e) => method.handleChangeRapor('matematika', e.target.value)} />
                        </div>
                    </div>
                    <div className="col-span-6 row-start-3">
                        <div>
                            <Label>Ilmu Pengetahuan Alam :</Label>
                            <Input className='w-full mt-1' type='number' placeholder='Ilmu Pengetahuan Alam' onChange={(e) => method.handleChangeRapor('ilmu_pengetahuan_alam', e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-span-6 col-start-7 row-start-3">
                        <div>
                            <Label>Ilmu Pengetahuan Sosial :</Label>
                            <Input className='w-full mt-1' type='number' placeholder='Ilmu Pengetahuan Sosial' onChange={(e) => method.handleChangeRapor('ilmu_pengetahuan_sosial', e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-span-6 row-start-4">
                        <div>
                            <Label>Seni Budaya :</Label>
                            <Input className='w-full mt-1' type='number' placeholder='Seni Budaya' onChange={(e) => method.handleChangeRapor('seni_budaya', e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-span-6 col-start-7 row-start-4">
                        <div>
                            <Label>Penjaskes :</Label>
                            <Input className='w-full mt-1' type='number' placeholder='Penjaskes' onChange={(e) => method.handleChangeRapor('penjaskes', e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-span-6 row-start-5">
                        <div>
                            <Label>Bahasa Inggris :</Label>
                            <Input className='w-full mt-1' type='number' placeholder='Bahasa Inggris' onChange={(e) => method.handleChangeRapor('bahasa_inggris', e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-span-6 col-start-7 row-start-5 mb-4">
                        <div>
                            <Label>Bahasa Jawa :</Label>
                            <Input className='w-full mt-1' type='number' placeholder='Bahasa Jawa' onChange={(e) => method.handleChangeRapor('bahasa_jawa', e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-span-12 row-start-6">
                        <Button className='w-full bg-[#1d293d] text-white hover:bg-[#2e446a]'>
                            Simpan
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormRapot