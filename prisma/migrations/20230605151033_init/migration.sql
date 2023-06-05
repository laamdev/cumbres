-- CreateTable
CREATE TABLE "Peak" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "elevation" DOUBLE PRECISION NOT NULL,
    "province" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "range" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "highestPoint" TEXT,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Peak_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Summit" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "summitDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "summitTime" INTEGER NOT NULL DEFAULT 1,
    "summitWeather" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "peakId" TEXT NOT NULL,

    CONSTRAINT "Summit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Peak_name_key" ON "Peak"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Peak_slug_key" ON "Peak"("slug");

-- AddForeignKey
ALTER TABLE "Summit" ADD CONSTRAINT "Summit_peakId_fkey" FOREIGN KEY ("peakId") REFERENCES "Peak"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
