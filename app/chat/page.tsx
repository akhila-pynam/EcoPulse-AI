"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { getBotResponse } from "@/lib/ai/chatbot";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatPage() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello 👋 I'm EcoPulse AI Assistant. Ask me about sustainability, goals, analytics, reports, Eco Scores, or any EcoPulse AI feature.",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      sender: "user",
      text: message,
    };

    const botMessage: Message = {
      sender: "bot",
      text: getBotResponse(message),
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      botMessage,
    ]);

    setMessage("");
  };

  return (
    <>
      <Navbar />

      <main
        role="main"
        className="min-h-screen bg-black p-8 text-white"
      >
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold text-green-500">
            EcoPulse AI Assistant
          </h1>

          <p className="mt-3 text-lg text-zinc-400">
            Ask questions about sustainability,
            analytics, goals, reports, and how to use
            EcoPulse AI.
          </p>

          {/* Chat Area */}
          <div
            role="log"
            aria-live="polite"
            className="mt-8 h-[650px] overflow-y-auto rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-5 flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-5 py-4 shadow-lg ${
                    msg.sender === "user"
                      ? "bg-green-500 text-black"
                      : "border border-zinc-700 bg-zinc-800 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="mt-6 flex items-center gap-4">
            <input
              aria-label="Ask EcoPulse AI a question"
              type="text"
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              placeholder="Ask a question..."
              className="flex-1 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-white outline-none focus:border-green-500"
            />

            <button
              aria-label="Send message"
              onClick={handleSend}
              className="rounded-2xl bg-green-500 px-8 py-5 font-semibold text-black transition hover:bg-green-400"
            >
              Send
            </button>
          </div>

          {/* Suggestions */}
          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
            <h3 className="mb-3 text-lg font-semibold text-green-500">
              Suggested Questions
            </h3>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-xl bg-black p-3">
                How do I reduce carbon emissions?
              </div>

              <div className="rounded-xl bg-black p-3">
                How does Eco Score work?
              </div>

              <div className="rounded-xl bg-black p-3">
                How do I generate a PDF report?
              </div>

              <div className="rounded-xl bg-black p-3">
                How do sustainability goals work?
              </div>

              <div className="rounded-xl bg-black p-3">
                Where can I view analytics?
              </div>

              <div className="rounded-xl bg-black p-3">
                What are the best eco-friendly habits?
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}