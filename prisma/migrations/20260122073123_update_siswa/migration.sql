/*
  Warnings:

  - Changed the type of `ttl` on the `Siswa` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Siswa" DROP COLUMN "ttl",
ADD COLUMN     "ttl" TIMESTAMP(3) NOT NULL;
