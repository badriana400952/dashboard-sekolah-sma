import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const FormRapot = () => {
    return (
        <form className='p-6 flex-col justify-center'>
            <div className="bg-white w-full  shadow-md hover:shadow-lg transition-shadow cursor-pointer rounded-sm mb-4 ">
                <div className='w-full bg-[#1d293d] px-2 py-2 text-white  rounded-t-md'>
                    <h2>Data Diri Siswa</h2>
                </div>
                <div className="w-full bg-r flex justify-between p-1 px-3 gap-4 mt-2">
                    <div className='flex-col justyfy-start gap-2 flex w-full'>
                        <label htmlFor="nis" className=''>Nis</label>
                    </div>
                    <div className=" w-full  ">
                        <Input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                </div>
                <div className="flex justify-between p-1 px-3 gap-4">
                    <div className='flex-col justyfy-start gap-2 flex w-full'>
                        <label htmlFor="nis" className=''>Nama Lengkap</label>
                    </div>
                    <div className=" w-full  ">
                        <Input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                </div>
                <div className="flex justify-between p-1 px-3 gap-4">
                    <div className='flex-col justyfy-start gap-2 flex w-full'>
                        <label htmlFor="nis" className=''>Kelas</label>
                    </div>
                    <div className=" mb-4  w-full">
                        <Input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
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
                            <Input className='w-full mt-1' placeholder='Pendidikan Agama' />
                        </div>
                    </div>
                    <div className="col-span-6 col-start-7">
                        <div>
                            <Label>Pendidikan Kewargenegaraan :</Label>
                            <Input className='w-full mt-1' placeholder='Pendidikan Kewargenegaraan' />
                        </div>
                    </div>
                    <div className="col-span-6 row-start-2">
                        <div>
                            <Label>Bahasa Indonesia :</Label>
                            <Input className='w-full mt-1' placeholder='Bahasa Indonesia' />
                        </div>
                    </div>
                    <div className="col-span-6 col-start-7 row-start-2">
                        <div>
                            <Label>Matematika :</Label>
                            <Input className='w-full mt-1' placeholder='Matematika' />
                        </div>
                    </div>
                    <div className="col-span-6 row-start-3">
                        <div>
                            <Label>Ilmu Pengetahuan Alam :</Label>
                            <Input className='w-full mt-1' placeholder='Ilmu Pengetahuan Alam' />
                        </div>
                    </div>
                    <div className="col-span-6 col-start-7 row-start-3">
                        <div>
                            <Label>Ilmu Pengetahuan Sosial :</Label>
                            <Input className='w-full mt-1' placeholder='Ilmu Pengetahuan Sosial' />
                        </div>
                    </div>
                    <div className="col-span-6 row-start-4">
                        <div>
                            <Label>Seni Budaya :</Label>
                            <Input className='w-full mt-1' placeholder='Seni Budaya' />
                        </div>
                    </div>
                    <div className="col-span-6 col-start-7 row-start-4">
                        <div>
                            <Label>Penjaskes :</Label>
                            <Input className='w-full mt-1' placeholder='Penjaskes' />
                        </div>
                    </div>
                    <div className="col-span-6 row-start-5">
                        <div>
                            <Label>Bahasa Inggris :</Label>
                            <Input className='w-full mt-1' placeholder='Bahasa Inggris' />
                        </div>
                    </div>
                    <div className="col-span-6 col-start-7 row-start-5 mb-4">
                        <div>
                            <Label>Bahasa Jawa :</Label>
                            <Input className='w-full mt-1' placeholder='Bahasa Jawa' />
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