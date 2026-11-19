export interface IRapor {
    id: number,
    nis: number,
    id_siswa: number,
    nama_lengkap: string,
    kelas: string,
    tahun_ajaran: string

    // pelajaran
    bahasa_indonesia: number
    pendidikan_agama: number
    ilmu_pengetahuan_alam: number
    seni_budaya: number
    bahasa_inggris: number
    pendidikan_kewarganegaraan: number
    matematika: number
    ilmu_pengetahuan_sosial: number
    bahasa_jawa: number
}

