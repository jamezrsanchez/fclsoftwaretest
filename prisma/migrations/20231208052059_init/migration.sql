/*
  Warnings:

  - You are about to drop the column `quantity` on the `MachineNumber` table. All the data in the column will be lost.
  - Changed the type of `model` on the `MachineNumber` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "MachineNumber" DROP COLUMN "quantity",
DROP COLUMN "model",
ADD COLUMN     "model" INTEGER NOT NULL;
