import { prisma } from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

const getNumberQuery = (value: string | string[] | undefined) => {
  if (!value) return undefined
  const v = Array.isArray(value) ? value[0] : value
  const n = Number(v)
  return isNaN(n) ? undefined : n
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method not allowed" })
    }

    const siswaId = getNumberQuery(req.query.siswa_id)
    const kelasId = getNumberQuery(req.query.kelas_id)
    const tahunAjaranId = getNumberQuery(req.query.tahun_ajaran_id)

    const where: any = {
      ...(siswaId && { siswa_id: siswaId }),
      ...(kelasId && { kelas_id: kelasId }),
      ...(tahunAjaranId && { tahun_ajaran_id: tahunAjaranId })
    }

    const data = await prisma.kelasSiswa.findMany({
      where,
      include: {
        siswa: true,
        kelas: true,
        tahun_ajaran: true
      }
    })

    return res.status(200).json(data)

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: "Internal Server Error"
    })
  }
}
