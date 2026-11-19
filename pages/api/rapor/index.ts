import { prisma } from "@/lib/prisma"
    import { normalize } from "@/lib/utils";
    import { NextApiRequest, NextApiResponse } from "next";


    export default async function handler(req: NextApiRequest, res: NextApiResponse) {
        const id_kelas = normalize(req.query.id_kelas)
        const nama_siswa = normalize(req.query.nama_siswa)
        try {
            if (req.method === 'GET') {
                const response = await prisma.rapor.findFirst({
                    where: {
                    ...(nama_siswa && {
                        siswa: {
                            nama_siswa:{
                                contains: String(nama_siswa),
                                mode: 'insensitive'
                            }
                        }
                    }),
                    ...(id_kelas && { id_kelas: Number(id_kelas) }),
                    },
                    include: {
                        siswa: true,
                        kelas: true,
                        tahun_ajaran: true
                    },
                })
                res.status(200).json(response)
            }
            if (req.method === 'POST') {
                const {id_siswa, id_kelas , id_tahun_ajaran,pendidikan_agama, pendidikan_kewarganegaraan, bahasa_indonesia, matematika, ilmu_pengetahuan_alam, ilmu_pengetahuan_sosial, seni_budaya,penjaskes, bahasa_inggris, bahasa_jawa } = req.body
                const validated = [
                    {value: id_siswa, message: "Siswa Wajib Diisi"},
                    {value: id_kelas, message: "Kelas Wajib Diisi"},
                    {value: id_tahun_ajaran, message: "Tahun Ajaran Wajib Diisi"},
                    {value: pendidikan_agama, message: "Pendidikan Agama Wajib Diisi"},
                    {value: pendidikan_kewarganegaraan, message: "Pendidikan Kewarganegaraan Wajib Diisi"},
                    {value: bahasa_indonesia, message: "Bahasa Indonesia Wajib Diisi"},
                    {value: matematika, message: "Matematika Wajib Diisi"},
                    {value: ilmu_pengetahuan_alam, message: "Ilmu Pengetahuan Alam Wajib Diisi"},
                    {value: ilmu_pengetahuan_sosial, message: "Ilmu Pengetahuan Sosial Wajib Diisi"},
                    {value: seni_budaya, message: "Seni Budaya Wajib Diisi"},
                    {value: penjaskes, message: "Penjaskes Wajib Diisi"},
                    {value: bahasa_inggris, message: "Bahasa Inggris Wajib Diisi"},
                    {value: bahasa_jawa, message: "Bahasa Jawa Wajib Diisi"},
                ]
                const error = validated.find(item => !item.value)
                if (error) {
                    return res.status(400).json({ message: error.message })
                }
                const response = await prisma.rapor.createMany({
                    data: {
                        id_siswa,
                        id_kelas,
                        id_tahun_ajaran,
                        pendidikan_agama,
                        pendidikan_kewarganegaraan,
                        bahasa_indonesia,
                        matematika,
                        ilmu_pengetahuan_alam,
                        ilmu_pengetahuan_sosial,
                        seni_budaya,
                        penjaskes,
                        bahasa_inggris,
                        bahasa_jawa
                    }
                })
                res.status(200).json(response)
            }
        } catch (error) {
            console.error({error})
            res.status(500).json({ message: 'Internal Server Error' })
        }
    }