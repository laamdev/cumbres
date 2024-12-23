-- CreateTable
CREATE TABLE "Summit" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "peakSlug" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Summit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Summit_userId_peakSlug_key" ON "Summit"("userId", "peakSlug");
