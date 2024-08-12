import { NextResponse } from "next/server"
import pool from "@/lib/db"

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM account")
    return NextResponse.json(rows)
  } catch (error) {
    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    )
  }
}
