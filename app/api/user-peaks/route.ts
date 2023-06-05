import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"

import { prisma } from "@/lib/client"

export async function GET() {
  try {
    const { userId } = auth()

    const peaks = await prisma.peak.findMany({
      orderBy: [
        {
          elevation: "desc",
        },
        {
          name: "desc",
        },
      ],
    })

    //Return only peaks if not logged
    if (!userId) {
      NextResponse.json({ message: "Unauthorized" })
      return
    }

    const summits = await prisma.summit.findMany({
      where: {
        userId: userId,
      },
      include: {
        peak: true,
      },
    })

    const summitedPeaksIds = await summits?.map(
      (summitedPeak: any) => summitedPeak.peakId
    )

    const unsummitedPeaks = await peaks.filter(
      (peak: any) => !summitedPeaksIds?.includes(peak.id)
    )

    const summitedPeaks = await summits.map((summit: any) => ({
      id: summit.peakId,
      name: summit.peak?.name,
      elevation: summit.peak?.elevation,
      province: summit.peak?.province,
      county: summit.peak?.county,
      range: summit.peak?.range,
      latitude: summit.peak?.latitude,
      longitude: summit.peak?.longitude,
      highestPoint: summit.peak?.highestPoint,
      imageUrl: summit.peak?.imageUrl,
      userId: summit.userId,
      summitId: summit.id,
      summitDate: summit.summitDate,
      summitTime: summit.summitTime,
      summitWeather: summit.summitWeather,
    }))

    const userPeaks = await [...unsummitedPeaks, ...summitedPeaks].sort(
      (a, b) => b.elevation! - a.elevation!
    )

    return NextResponse.json(userPeaks, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong." })
  }
}

export async function POST(request: Request) {
  try {
    const { userId } = auth()

    if (!userId) {
      return NextResponse.json({
        error:
          "Acceso no autorizado. Debes hacer log in para acceder a esta ruta.",
      })
    }

    const { summitDate, summitTime, summitWeather, peakId } =
      await request.json()

    const summit = await prisma.summit.create({
      data: {
        summitDate: summitDate,
        summitTime: summitTime,
        summitWeather: summitWeather,
        peakId: peakId,
        userId: userId,
      },
    })

    const peaks = await prisma.peak.findMany({
      orderBy: [
        {
          elevation: "desc",
        },
        {
          name: "desc",
        },
      ],
    })

    const summits = await prisma.summit.findMany({
      where: {
        userId: userId,
      },
      include: {
        peak: true,
      },
    })

    const summitedPeaksIds = await summits?.map(
      (summitedPeak: any) => summitedPeak.peakId
    )

    const unsummitedPeaks = await peaks.filter(
      (peak: any) => !summitedPeaksIds?.includes(peak.id)
    )

    const summitedPeaks = await summits.map((summit: any) => ({
      id: summit.peakId,
      name: summit.peak?.name,
      elevation: summit.peak?.elevation,
      province: summit.peak?.province,
      county: summit.peak?.county,
      range: summit.peak?.range,
      latitude: summit.peak?.latitude,
      longitude: summit.peak?.longitude,
      highestPoint: summit.peak?.highestPoint,
      imageUrl: summit.peak?.imageUrl,
      userId: summit.userId,
      summitId: summit.id,
      summitDate: summit.summitDate,
      summitTime: summit.summitTime,
      summitWeather: summit.summitWeather,
    }))

    const userPeaks = await [...unsummitedPeaks, ...summitedPeaks].sort(
      (peakA, peakB) => peakB.elevation! - peakA.elevation!
    )

    return NextResponse.json(userPeaks)
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong." })
  }
}

export async function PATCH(request: Request) {
  const { userId } = auth()

  if (!userId) {
    return NextResponse.json({
      error:
        "Acceso no autorizado. Debes registrarte o iniciar sesión para acceder a esta ruta.",
    })
  }

  const { summitDate, summitTime, summitWeather, summitId } =
    await request.json()

  const summit = await prisma.summit.update({
    where: {
      id: summitId,
    },
    data: {
      summitDate: summitDate,
      summitTime: summitTime,
      summitWeather: summitWeather,
    },
  })

  return NextResponse.json(summit)
}

export async function PUT(request: Request) {
  const { userId } = auth()

  if (!userId) {
    return NextResponse.json({
      error: "Acceso autorizado. Debes hacer log in para acceder a esta ruta.",
    })
  }

  // //   const user = userId ? await clerkClient.users.getUser(userId) : null;

  const summitId = await request.json()

  const deleteSummit = await prisma.summit.delete({
    where: {
      id: summitId,
    },
  })

  return NextResponse.json(deleteSummit)
}
