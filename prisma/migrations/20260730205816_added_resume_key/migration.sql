/*
  Warnings:

  - Added the required column `key` to the `Resume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Resume" ADD COLUMN     "key" TEXT NOT NULL;
