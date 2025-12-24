export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const auth = req.headers.authorization || "";
  const apiKey = auth.replace("Bearer ", "");

  if (apiKey !== "freeapi") {
    return res.status(401).json({ error: "Invalid API key" });
  }

  res.status(200).json({
    id: "chatcmpl-puter",
    object: "chat.completion",
    created: Math.floor(Date.now() / 1000),
    model: "gpt-5-nano",
    choices: [
      {
        index: 0,
        message: {
          role: "assistant",
          content:
            "API key validated. Use Puter.js on the client for real responses.",
        },
        finish_reason: "stop",
      },
    ],
  });
}
