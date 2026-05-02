import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectDB();
    await db.command({ ping: 1 });

    return NextResponse.json({ message: "MongoDB Connected" });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
