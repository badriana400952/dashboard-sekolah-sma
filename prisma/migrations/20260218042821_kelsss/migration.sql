-- CreateTable
CREATE TABLE "Rapor" (
    "id" SERIAL NOT NULL,
    "id_siswa" INTEGER,
    "id_kelas" INTEGER,
    "id_tahun_ajaran" INTEGER,
    "bahasa_indonesia" INTEGER NOT NULL,
    "pendidikan_agama" INTEGER NOT NULL,
    "ilmu_pengetahuan_alam" INTEGER NOT NULL,
    "seni_budaya" INTEGER NOT NULL,
    "bahasa_inggris" INTEGER NOT NULL,
    "pendidikan_kewarganegaraan" INTEGER NOT NULL,
    "matematika" INTEGER NOT NULL,
    "ilmu_pengetahuan_sosial" INTEGER NOT NULL,
    "bahasa_jawa" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rapor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rapor_id_kelas_id_siswa_id_tahun_ajaran_key" ON "Rapor"("id_kelas", "id_siswa", "id_tahun_ajaran");

-- AddForeignKey
ALTER TABLE "Rapor" ADD CONSTRAINT "Rapor_id_siswa_fkey" FOREIGN KEY ("id_siswa") REFERENCES "Siswa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rapor" ADD CONSTRAINT "Rapor_id_kelas_fkey" FOREIGN KEY ("id_kelas") REFERENCES "Kelas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rapor" ADD CONSTRAINT "Rapor_id_tahun_ajaran_fkey" FOREIGN KEY ("id_tahun_ajaran") REFERENCES "TahunAjaran"("id") ON DELETE CASCADE ON UPDATE CASCADE;
