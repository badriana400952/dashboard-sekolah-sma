export interface Kelas {
  id: number;
  nama: string;
  tingkat: number;
  jurusan: string;
  created_at: string; 
}
export interface Siswa {
  id: number;
  nis: number ;
  nama_siswa: string;
  nama_lengkap_siswa: string;
  jenis_kelamin: string;
  ttl: Date | null; 
  agama: string;
  nama_ibu: string;
  no_hp_ortu: string;
  email_ortu: string;
  created_at: string; 
  kelas_id: number | null;
  kelas: Kelas | null;
}

