/*
  Warnings:

  - You are about to drop the column `company` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `remote` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `salaryMax` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `salaryMin` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Job` table. All the data in the column will be lost.
  - Added the required column `hospital` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobType` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "JobType" ADD VALUE 'LOCUM';

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "company",
DROP COLUMN "remote",
DROP COLUMN "salaryMax",
DROP COLUMN "salaryMin",
DROP COLUMN "tags",
DROP COLUMN "type",
ADD COLUMN     "hospital" TEXT NOT NULL,
ADD COLUMN     "jobType" "JobType" NOT NULL,
ADD COLUMN     "salary" TEXT;
