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
    id: "chatcmpl-puter",
    object: "chat.completion",
    created: Math.floor(Date.now() / 1000),
    model: "gpt-5-nano",
    choices: [
      {
        index: 0,
        message: {
          role: "assistant",
          content: "✅ API is working (App Router)!",
        },
        finish_reason: "stop",
      },
    ],
  });
}
