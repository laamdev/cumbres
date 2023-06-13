import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    return NextResponse.json("")
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong." })
  }
}
