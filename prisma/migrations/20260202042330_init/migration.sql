-- CreateTable
CREATE TABLE "TahunAjaran" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "tahun_mulai" TIMESTAMP(3) NOT NULL,
    "tahun_selesai" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TahunAjaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Siswa" (
    "id" SERIAL NOT NULL,
    "nis" INTEGER NOT NULL,
    "nama_siswa" TEXT NOT NULL,
    "nama_lengkap_siswa" TEXT NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,
    "ttl" TIMESTAMP(3) NOT NULL,
    "agama" TEXT NOT NULL,
    "nama_ibu" TEXT NOT NULL,
    "no_hp_ortu" TEXT NOT NULL,
    "email_ortu" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "kelas_id" INTEGER,
    "tahun_ajaran_id" INTEGER,

    CONSTRAINT "Siswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kelas" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "tingkat" INTEGER NOT NULL,
    "jurusan" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Kelas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KelasSiswa" (
    "id" SERIAL NOT NULL,
    "kelas_id" INTEGER NOT NULL,
    "siswa_id" INTEGER NOT NULL,
    "tahun_ajaran_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KelasSiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matapelajaran" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pendidikan_agama" TEXT NOT NULL,
    "pendidikan_kewarganegaraan" TEXT NOT NULL,
    "bahasa_indonesia" TEXT NOT NULL,
    "bahasa_inggris" TEXT NOT NULL,
    "bahasa_jawa" TEXT NOT NULL,
    "matematika" TEXT NOT NULL,
    "ilmu_pengetahuan_alam" TEXT NOT NULL,
    "ilmu_pengetahuan_sosial" TEXT NOT NULL,
    "seni_budaya" TEXT NOT NULL,
    "penjas" TEXT NOT NULL,

    CONSTRAINT "Matapelajaran_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Siswa_nis_key" ON "Siswa"("nis");

-- CreateIndex
CREATE UNIQUE INDEX "KelasSiswa_siswa_id_kelas_id_tahun_ajaran_id_key" ON "KelasSiswa"("siswa_id", "kelas_id", "tahun_ajaran_id");

-- AddForeignKey
ALTER TABLE "Siswa" ADD CONSTRAINT "Siswa_kelas_id_fkey" FOREIGN KEY ("kelas_id") REFERENCES "Kelas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Siswa" ADD CONSTRAINT "Siswa_tahun_ajaran_id_fkey" FOREIGN KEY ("tahun_ajaran_id") REFERENCES "TahunAjaran"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KelasSiswa" ADD CONSTRAINT "KelasSiswa_siswa_id_fkey" FOREIGN KEY ("siswa_id") REFERENCES "Siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KelasSiswa" ADD CONSTRAINT "KelasSiswa_kelas_id_fkey" FOREIGN KEY ("kelas_id") REFERENCES "Kelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KelasSiswa" ADD CONSTRAINT "KelasSiswa_tahun_ajaran_id_fkey" FOREIGN KEY ("tahun_ajaran_id") REFERENCES "TahunAjaran"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
