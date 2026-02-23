import { useState, useRef, useEffect } from "react";
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ from: "bot", text: "Hi! Ask me about Deither 👋" }]);
  const [val, setVal] = useState("");
  const [busy, setBusy] = useState(false);
  const end = useRef(null);
  useEffect(() => { end.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);
  const send = async () => {
    if (!val.trim() || busy) return;
    const question = val;
    setMsgs(p => [...p, { from: "user", text: question }]);
    setVal("");
    setBusy(true);
    try {
      const key = import.meta.env.VITE_GEMINI_API_KEY;
      const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=" + key;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: "You are a helpful assistant for Deither Amurao's portfolio. He is an IT student from Calamba, Laguna." }] },
          contents: [{ role: "user", parts: [{ text: question }] }]
        })
      });
      const d = await res.json();
      const reply = d?.candidates?.[0]?.content?.parts?.[0]?.text || "Try again!";
      setMsgs(p => [...p, { from: "bot", text: reply }]);
    } catch { setMsgs(p => [...p, { from: "bot", text: "Error. Try again!" }]); }
    finally { setBusy(false); }
  };
  return (
    <>
      <button onClick={() => setOpen(o => !o)} className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-indigo-600 text-white shadow-xl flex items-center justify-center text-2xl">💬</button>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl flex flex-col border border-zinc-200 dark:border-zinc-700 overflow-hidden">
          <div className="bg-indigo-600 text-white px-4 py-3 text-sm font-semibold">Deither's Assistant</div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-3 py-2 rounded-xl max-w-[80%] ${m.from === "user" ? "bg-indigo-600 text-white" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100"}`}>{m.text}</div>
              </div>
            ))}
            {busy && <div className="text-zinc-400 animate-pulse">Thinking...</div>}
            <div ref={end} />
          </div>
          <div className="p-2 border-t border-zinc-200 dark:border-zinc-700 flex gap-2">
            <input value={val} onChange={e => setVal(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} placeholder="Ask something..." className="flex-1 text-sm px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none" />
            <button onClick={send} disabled={!val.trim() || busy} className="px-3 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-40">→</button>
          </div>
        </div>
      )}
    </>
  );
}