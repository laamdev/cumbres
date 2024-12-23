import { auth } from "@clerk/nextjs/server";

import { peaks } from "@/data/peaks";

import db from "@/lib/prisma";

export async function getTotalSummitCount() {
  try {
    const count = await db.summit.count();
    return count;
  } catch (error) {
    console.error("Error getting total summit count:", error);
    return 0;
  }
}

export async function getUserSummits() {
  try {
    const { userId } = await auth();
    if (!userId) return [];

    const summits = await db.summit.findMany({
      where: {
        userId: userId,
      },
    });

    // Map summits to peaks data
    const summitedPeaks = summits
      .map((summit) => {
        const peak = peaks.find((p) => p.slug === summit.peakSlug);
        if (!peak) return null;

        return {
          ...peak,
          summit: {
            date: summit.date,
            notes: summit.notes,
            images: summit.images,
          },
        };
      })
      .filter(Boolean); // Remove null entries

    return summitedPeaks;
  } catch (error) {
    console.error("Error fetching user summits:", error);
    return [];
  }
}

export async function createSummit(data: { userId: string; peakSlug: string }) {
  return await db.summit.create({
    data: {
      userId: data.userId,
      peakSlug: data.peakSlug,
      date: new Date(),
    },
  });
}

export async function checkSummitStatus(peakSlug: string) {
  try {
    const { userId } = await auth();
    if (!userId) return false;

    const summit = await db.summit.findUnique({
      where: {
        userId_peakSlug: {
          userId,
          peakSlug,
        },
      },
    });

    return !!summit;
  } catch (err) {
    console.log("Error checking summit status:", err);
    return false;
  }
}

export async function getTotalElevation() {
  try {
    const { userId } = await auth();

    if (!userId) return null;

    const summits = await db.summit.findMany({
      where: {
        userId: userId,
      },
    });

    const totalElevation = summits.reduce((acc, summit) => {
      const peak = peaks.find((p) => p.slug === summit.peakSlug);
      return acc + (peak?.elevation || 0);
    }, 0);

    // Convert to kilometers
    return (totalElevation / 1000).toFixed(1);
  } catch (error) {
    console.error("Error calculating total elevation:", error);
    return 0;
  }
}
