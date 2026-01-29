import { Prisma } from "@/lib/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    if (isNaN(Number(id))) {
        return res.status(400).json({ message: 'ID Siswa Tidak Valid' })
    }

    try {
        if (req.method === "GET") {
            const siswa = await prisma.siswa.findUnique({
                where: { id: Number(id) },
            })
            if (!siswa) {
                return res.status(404).json({ message: 'Data Siswa Tidak Ditemukan' })
            }
            res.status(200).json(siswa)
        }

        if (req.method === "PUT") {
            const { nis, nama_siswa, nama_lengkap_siswa, jenis_kelamin, ttl, agama, nama_ibu, no_hp_ortu, email_ortu, kelas_id } = req.body
            const siswa = await prisma.siswa.update({
                where: { id: Number(id) },
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
                    kelas_id
                }
            })
            return res.status(200).json(siswa)
        }

        if (req.method === "DELETE") {
            await prisma.siswa.delete({
                where: { id: Number(id) }
            })
            return res.status(200).json({ message: 'Data Siswa Berhasil Dihapus' })
        }
        return res.status(405).json({ message: 'Method Not Allowed' })
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                return res.status(409).json({ message: 'Data Siswa Sudah Ada' })
            }

            if (error.code === 'P2025') {
                return res.status(404).json({ message: 'Data Siswa Tidak Ditemukan' })
            }

        }
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}