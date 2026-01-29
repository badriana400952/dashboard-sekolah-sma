/*
  Warnings:

  - You are about to drop the column `kelas_id` on the `Siswa` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Siswa" DROP CONSTRAINT "Siswa_kelas_id_fkey";

-- AlterTable
ALTER TABLE "Siswa" DROP COLUMN "kelas_id";

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
CREATE TABLE "KelasSiswa" (
    "id" SERIAL NOT NULL,
    "kelas_id" INTEGER NOT NULL,
    "siswa_id" INTEGER NOT NULL,
    "tahun_ajaran_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KelasSiswa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "KelasSiswa_id_key" ON "KelasSiswa"("id");

-- CreateIndex
CREATE UNIQUE INDEX "KelasSiswa_siswa_id_kelas_id_tahun_ajaran_id_key" ON "KelasSiswa"("siswa_id", "kelas_id", "tahun_ajaran_id");

-- AddForeignKey
ALTER TABLE "KelasSiswa" ADD CONSTRAINT "KelasSiswa_siswa_id_fkey" FOREIGN KEY ("siswa_id") REFERENCES "Siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KelasSiswa" ADD CONSTRAINT "KelasSiswa_kelas_id_fkey" FOREIGN KEY ("kelas_id") REFERENCES "Kelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KelasSiswa" ADD CONSTRAINT "KelasSiswa_tahun_ajaran_id_fkey" FOREIGN KEY ("tahun_ajaran_id") REFERENCES "TahunAjaran"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
