-- CreateTable
CREATE TABLE "CallLogs" (
    "id" SERIAL NOT NULL,
    "Number" TEXT,
    "CallSid" TEXT,
    "RecordingUrl" TEXT,
    "CallStatus" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CallLogs_pkey" PRIMARY KEY ("id")
);
