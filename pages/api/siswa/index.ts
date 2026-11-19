import { prisma } from "@/lib/prisma"
import { normalize } from "@/lib/utils"
import { NextApiRequest, NextApiResponse } from "next"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const tahun_ajaran_id = normalize(req.query.tahun_ajaran_id)
    const kelas_id = normalize(req.query.kelas_id)
    const nama_siswa = normalize(req.query.nama_siswa)
    try {
        if (req.method === 'GET') {
            const siswa = await prisma.siswa.findMany({
                where: {
                    ...(tahun_ajaran_id && { tahun_ajaran_id: Number(tahun_ajaran_id) }),
                    ...(kelas_id && { kelas_id: Number(kelas_id) }),
                    ...(nama_siswa && { nama_siswa: { contains: String(nama_siswa), mode: 'insensitive' } }),
                },
                include: {
                    kelas: true,
                    tahun_ajaran: true,
                }
            })

            res.status(200).json(siswa)
        }

        if (req.method === 'POST') {
            const data = req.body
            console.log({ data })
            // Validasi harus array
            if (!Array.isArray(data) || data.length === 0) {
                return res.status(400).json({ message: 'Request body harus berupa array siswa' })
            }

            // Optional: validasi per item
            for (const item of data) {
                if (
                    !item.nis ||
                    !item.nama_siswa ||
                    !item.nama_lengkap_siswa ||
                    !item.jenis_kelamin ||
                    !item.ttl ||
                    !item.agama ||
                    !item.nama_ibu ||
                    !item.no_hp_ortu ||
                    !item.email_ortu ||
                    !item.kelas_id ||
                    !item.tahun_ajaran_id
                ) {
                    return res.status(400).json({ message: 'Ada data siswa yang tidak lengkap' })
                }
            }

            const siswa = await prisma.siswa.createMany({
                data: data.map((item) => ({
                    nis: Number(item.nis),
                    nama_siswa: item.nama_siswa,
                    nama_lengkap_siswa: item.nama_lengkap_siswa,
                    jenis_kelamin: item.jenis_kelamin,
                    ttl: new Date(item.ttl), // string ISO → Date
                    agama: item.agama,
                    nama_ibu: item.nama_ibu,
                    no_hp_ortu: item.no_hp_ortu,
                    email_ortu: item.email_ortu,
                    kelas_id: Number(item.kelas_id),
                    tahun_ajaran_id: Number(item.tahun_ajaran_id),
                })),
                skipDuplicates: true, // optional
            })

            return res.status(201).json({
                message: 'Berhasil menambahkan siswa',
                result: siswa, // { count: number }
            })
        }

    } catch (error) {
        if (error.code === 'P2002') {
            return res.status(409).json({ message: 'Data Siswa Sudah Ada' })
        }
        return res.status(500).json({ message: 'Internal Server Error' })
    }


}