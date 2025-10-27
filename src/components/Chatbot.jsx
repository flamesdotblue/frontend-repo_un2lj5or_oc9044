import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, SendHorizonal } from 'lucide-react';

const getBotReply = (text) => {
  const t = text.trim().toLowerCase();
  if (!t) return '';
  if (t.includes('hello')) return "Hey there! I’m CraftBot 👋";
  if (t.includes('projects')) return "You can check out Sam’s projects below!";
  if (t.includes('who made you')) return 'I was crafted with love by Sam 💻✨';
  return 'Keep going — one commit at a time. You got this! 🚀';
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I’m CraftBot. Ask me about projects or say hello.' },
  ]);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    const reply = getBotReply(text);
    setMessages((prev) => [...prev, { role: 'user', text }, { role: 'bot', text: reply }]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-200 bg-[#F8FAFC] px-4 py-3">
            <div className="font-semibold text-[#1E293B]">CraftBot</div>
            <button
              aria-label="Close chatbot"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1 text-slate-500 transition hover:bg-slate-100"
            >
              <X size={18} />
            </button>
          </div>

          <div ref={listRef} className="max-h-72 space-y-2 overflow-y-auto p-4">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                    m.role === 'user'
                      ? 'bg-[#3B82F6] text-white'
                      : 'bg-slate-100 text-slate-800'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-slate-200 p-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              rows={1}
              className="max-h-24 w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#3B82F6]"
            />
            <button
              onClick={handleSend}
              className="inline-flex items-center justify-center rounded-lg bg-[#10B981] p-2 text-white shadow transition hover:bg-[#059669]"
              aria-label="Send message"
            >
              <SendHorizonal size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full bg-[#3B82F6] px-4 py-3 text-white shadow-xl transition hover:scale-[1.03] hover:bg-[#2563EB]"
      >
        <MessageCircle size={18} /> Chat
      </button>
    </div>
  );
};

export default Chatbot;
