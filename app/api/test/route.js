import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "suncart");

    await db.command({ ping: 1 });

    return NextResponse.json({ message: "MongoDB Connected" });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
