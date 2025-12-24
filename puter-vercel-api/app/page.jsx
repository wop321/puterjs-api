"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [reply, setReply] = useState("Loading...");

  useEffect(() => {
    async function run() {
      const res = await puter.ai.chat(
        "Hello from Puter.js on Vercel!",
        { model: "gpt-5-nano" }
      );
      setReply(res);
    }
    run();
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>Puter.js + Vercel</h1>
      <p>{reply}</p>
    </main>
  );
}
