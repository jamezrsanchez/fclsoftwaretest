-- CreateTable
CREATE TABLE "MachineNumber" (
    "id" SERIAL NOT NULL,
    "batchId" INTEGER NOT NULL,
    "model" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "MachineNumber_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MachineNumber" ADD CONSTRAINT "MachineNumber_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "Batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
