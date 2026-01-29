-- CreateTable
CREATE TABLE "Siswa" (
    "id" SERIAL NOT NULL,
    "nis" INTEGER NOT NULL,
    "nama_siswa" TEXT NOT NULL,
    "nama_lengkap_siswa" TEXT NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,
    "ttl" TEXT NOT NULL,
    "agama" TEXT NOT NULL,
    "nama_ibu" TEXT NOT NULL,
    "no_hp_ortu" TEXT NOT NULL,
    "email_ortu" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Siswa_pkey" PRIMARY KEY ("id")
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
