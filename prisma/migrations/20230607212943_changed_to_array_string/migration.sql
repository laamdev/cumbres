/*
  Warnings:

  - The `province` column on the `Peak` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `county` column on the `Peak` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `range` column on the `Peak` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `highestPoint` column on the `Peak` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Peak" DROP COLUMN "province",
ADD COLUMN     "province" TEXT[],
DROP COLUMN "county",
ADD COLUMN     "county" TEXT[],
DROP COLUMN "range",
ADD COLUMN     "range" TEXT[],
DROP COLUMN "highestPoint",
ADD COLUMN     "highestPoint" TEXT[];
