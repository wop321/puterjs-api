import { NextResponse } from "next/server";

export async function POST(req) {
  const auth = req.headers.get("authorization") || "";
  const apiKey = auth.replace("Bearer ", "");

  if (apiKey !== "freeapi") {
    return NextResponse.json(
      { error: "Invalid API key" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "API is working",
  });
}
