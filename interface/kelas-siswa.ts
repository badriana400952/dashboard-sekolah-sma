export type KelasSiswa = {
  id: number
  kelas_id: number
  siswa_id: number
  tahun_ajaran_id: number
  created_at: string

  siswa: {
    id: number
    nis: number
    nama_siswa: string
    nama_lengkap_siswa: string
    jenis_kelamin: string
    ttl: string
    agama: string
    nama_ibu: string
    no_hp_ortu: string
    email_ortu: string
  }

  kelas: {
    id: number
    nama: string
    tingkat: number
    jurusan: string
  }

  tahun_ajaran: {
    id: number
    nama: string
  }
}

