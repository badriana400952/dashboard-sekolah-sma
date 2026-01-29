import { prisma } from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            const siswa = await prisma.siswa.findMany()
            if (!siswa || siswa.length === 0) {
                return res.status(404).json({ message: 'Data Siswa Tidak Ditemukan' })
            }
            res.status(200).json(siswa)
        }

        if (req.method === 'POST') {
            const { nis, nama_siswa, nama_lengkap_siswa, jenis_kelamin, ttl, agama, nama_ibu, no_hp_ortu, email_ortu } = req.body
            const validations = [
                { value: nis, message: "NIS wajib diisi" },
                { value: nama_siswa, message: "Nama siswa wajib diisi" },
                { value: nama_lengkap_siswa, message: "Nama lengkap siswa wajib diisi" },
                { value: jenis_kelamin, message: "Jenis kelamin wajib diisi" },
                { value: ttl, message: "Tanggal lahir wajib diisi" },
                { value: agama, message: "Agama wajib diisi" },
                { value: nama_ibu, message: "Nama ibu wajib diisi" },
                { value: no_hp_ortu, message: "No HP orang tua wajib diisi" },
                { value: email_ortu, message: "Email orang tua wajib diisi" },
            ];
            const error = validations.find(val => !val.value);
            if (error) {
                return res.status(400).json({ message: error.message });
            }
            const siswa = await prisma.siswa.createMany({
                data: {
                    nis,
                    nama_siswa,
                    nama_lengkap_siswa,
                    jenis_kelamin,
                    ttl,
                    agama,
                    nama_ibu,
                    no_hp_ortu,
                    email_ortu,
                }
            })
            return res.status(201).json(siswa)
        }
    } catch (error) {
        if (error.code === 'P2002') {
            return res.status(409).json({ message: 'Data Siswa Sudah Ada' })
        }
        return res.status(500).json({ message: 'Internal Server Error' })
    }


}