"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

import db from "@/lib/prisma";

interface CreateSummitResult {
  success: boolean;
  error?: string;
}

export async function createSummit(
  peakSlug: string
): Promise<CreateSummitResult> {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error("Unauthorized");
    }

    await db.summit.create({
      data: {
        userId,
        peakSlug,
        date: new Date(),
      },
    });

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}

export async function deleteSummit(peakSlug: string) {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error("Unauthorized");
    }

    await db.summit.delete({
      where: {
        userId_peakSlug: {
          userId,
          peakSlug,
        },
      },
    });

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}
