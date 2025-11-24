/*
  Warnings:

  - A unique constraint covering the columns `[jobId,applicantId]` on the table `Application` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `jobType` on the `Job` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "jobType",
ADD COLUMN     "jobType" TEXT NOT NULL;

-- DropEnum
DROP TYPE "JobType";

-- CreateIndex
CREATE UNIQUE INDEX "Application_jobId_applicantId_key" ON "Application"("jobId", "applicantId");
