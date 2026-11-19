import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        if (req.method === 'GET') {
            const tahunAjaran = await prisma.tahunAjaran.findMany()
            if (!tahunAjaran || tahunAjaran.length === 0) {
                return res.status(404).json({ message: 'Data Tahun Ajaran Tidak Ditemukan' })
            }
            return res.status(200).json(tahunAjaran)
        }
        res.status(405).json({ message: 'Method not allowed' })
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
}