/*
  Warnings:

  - A unique constraint covering the columns `[CallSid]` on the table `CallLogs` will be added. If there are existing duplicate values, this will fail.
  - Made the column `CallSid` on table `CallLogs` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CallLogs" ALTER COLUMN "CallSid" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CallLogs_CallSid_key" ON "CallLogs"("CallSid");
