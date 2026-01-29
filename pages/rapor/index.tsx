import { Button } from '@/components/ui/button';
import ContextDataTable from '@/components/ui/dataTable';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Selects } from '@/components/ui/selects';
import { nilaiSiswa } from '@/data/rapot';
import { Box, Group } from '@mantine/core';
import { IconEdit, IconEye, IconSum, IconTrash } from '@tabler/icons-react';
import Link from 'next/link';
import { daftarKelasRombel } from './kelas';
const Rapot = () => {
  const totalNilai = nilaiSiswa.reduce(
    (acc, curr) => acc + curr.nilai,
    0
  );

  return (
    <div className="p-4 flex justify-center">
      <div className="w-full p-4">
        <div className='mb-4 flex justify-between items-center' >
        <form className='flex justify-start items-center gap-4 '>
          <div>
            <Label>Nama</Label>
            <Input className='w-64 mt-1' placeholder='Nama' />
          </div>
          <div>
            <Label>Nis</Label>
            <Input placeholder='Nis' className='w-64 mt-1' />
          </div>
          <Selects
            label="Kelas"
            placeholder="Pilih Kelas"
            className="w-64 mb-1"
            data={daftarKelasRombel}
          />
          <Button type="submit" className='mt-6 px-6 bg-[#1d293d] text-white hover:bg-[#2e446a]'>Cari</Button>
        </form>
        <div className='flex flex-col items-end'>
          <Button type="button" className='mt-6 px-6 bg-[#1d293d] text-white hover:bg-[#2e446a]' >
            <Link href="/rapor/form-rapor">Tambah Rapor</Link>
          </Button>
        </div>
        </div>

        <div className='grid grid-cols-2 grid-rows-1 gap-4 bg-[#1d293d] text-white p-4 rounded-md mb-3' >
          <div className='col-span-1'>
            <Box >Nis : 2023387</Box>
            <Box>Nama Siswa : Badri Fadhilah</Box>
            <Box>Kelas: X</Box>
          </div>
          <div className='col-span-1'>
            <Box >Tahun Ajaran : 2023/2024</Box>
            <Box>Semester : Ganjil</Box>
            <Box>Wali Kelas: Fadhilah </Box>
          </div>
        </div>
        <ContextDataTable
          className="custom-table rounded-md border border-gray-200"
          withColumnBorders
          striped
          highlightOnHover
          height={550}
          columns={[
            {
              accessor: 'no',
              width: 160,
              footer: (
                <Group gap="xs">
                  <Box mb={-4}>
                    <IconSum size="1.25em" />
                  </Box>
                </Group>
              ),
            },
            {
              accessor: 'mataPelajaran',
              footer: (
                <Box>
                  <Group gap="xs" mt={8}>
                    <Box fw={600}>Jumlah</Box>
                  </Group>
                  <Group gap="xs" mt={8}>
                    <Box fw={600}>Rata-rata</Box>
                  </Group>
                  <Group gap="xs" mt={8}>
                    <Box fw={600}>Peringkat kelas ke:</Box>
                  </Group>
                </Box>
              ),
            },
            { accessor: 'kkm' },
            {
              accessor: 'nilai',
              render: ({ nilai }) => nilai,
              footer: (
                <Box>
                  <Group gap="xs" mt={8}>
                    <Box fw={600}>Jumlah</Box>
                  </Group>
                  <Group gap="xs" mt={8}>
                    <Box fw={600}>Rata-rata</Box>
                  </Group>
                  <Group gap="xs" mt={8}>
                    <Box fw={600}>1</Box>
                  </Group>
                </Box>
              ),
            },
            {
              accessor: 'huruf', footer: (
                <Box>
                  <Group gap="xs" mt={8}>
                    <Box fw={600}>Delapan ratus dua</Box>
                  </Group>
                  <Group gap="xs" mt={8}>
                    <Box fw={600}>Delapan ratus koma dua</Box>
                  </Group>
                  <Group gap="xs" mt={8}>
                    <Box fw={600}>Dari siswa</Box>
                  </Group>
                </Box>
              ),
            },
            { accessor: 'deskripsi' }
          ]}
          records={Array.isArray(nilaiSiswa) ? nilaiSiswa : []}
          contextMenuItems={(row) => [
            {
              label: "Lihat Detail",
              icon: <IconEye size={16} />,
              onClick: () => console.log("Detail:", row),
            },
            {
              label: "Edit Nilai",
              icon: <IconEdit size={16} />,
              onClick: () => console.log("Edit:", row),
            },
            {
              label: "Hapus",
              color: "red",
              icon: <IconTrash size={16} />,
              onClick: () => console.log("Hapus:", row),
            },
          ]}
        />
      </div>
    </div>
  )
}

export default Rapot