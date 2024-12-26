/*
  Warnings:

  - You are about to drop the column `date` on the `Summit` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Summit" DROP COLUMN "date",
ADD COLUMN     "summitDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
