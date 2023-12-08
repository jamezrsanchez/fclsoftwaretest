/*
  Warnings:

  - Added the required column `comment` to the `Batch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Batch" ADD COLUMN     "comment" TEXT NOT NULL;
