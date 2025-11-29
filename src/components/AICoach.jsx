// src/components/AICoach.jsx
import { useState } from "react";

function AICoach() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    "Start with a short 25‑minute session to warm up.",
    "Break big tasks into tiny steps you can finish in 10 minutes.",
  ]);

  const handleAsk = () => {
    if (!input.trim()) return;
    setMessages((prev) => [`You: ${input.trim()}`, ...prev]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-64 gap-3">
      <div className="flex-1 rounded-xl border border-slate-100 bg-slate-50 p-3 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className="rounded-lg bg-white text-xs text-slate-700 px-3 py-2 shadow-sm"
          >
            {msg}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <textarea
          rows={2}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your AI coach how to focus better..."
          className="flex-1 resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button
          onClick={handleAsk}
          className="self-end px-4 py-2 rounded-xl bg-emerald-500 text-white text-xs font-medium hover:bg-emerald-600"
        >
          Ask
        </button>
      </div>
    </div>
  );
}

export default AICoach;
