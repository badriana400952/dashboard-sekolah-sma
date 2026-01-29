import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            const options = await prisma.kelas.findMany()
            if (!options || options.length === 0) {
                return res.status(404).json({ message: 'Data Siswa Tidak Ditemukan' })
            }
            res.status(200).json(options)
        }
    } catch (error) {
        throw error
    }
}