"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Sparkles } from "lucide-react";

type Msg = { role: "user" | "agent"; text: string };

const script: Msg[] = [
  { role: "user", text: "What does Vishal work on?" },
  {
    role: "agent",
    text: "He leads Agentforce & applied-AI development in QBranch: 10 years at Salesforce, 11 certifications including Application and Data Architect. ✦",
  },
  { role: "user", text: "His top skills?" },
  { role: "agent", text: "Agentforce, Agent Script, Prompt Builder & Einstein GPT." },
];

/**
 * A looping, self-playing mock of an Agentforce chat: messages appear in
 * sequence (agent shows a typing indicator first), then it resets. Purely
 * decorative; a stand-in for a real embedded agent / demo clip.
 */
export function AgentDemo() {
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setCount(script.length);
      return;
    }

    let t = 600;
    const schedule = (fn: () => void, dt: number) => {
      t += dt;
      timers.current.push(setTimeout(fn, t));
    };

    const run = () => {
      script.forEach((m) => {
        if (m.role === "agent") {
          schedule(() => setTyping(true), 500);
          schedule(() => {
            setTyping(false);
            setCount((c) => c + 1);
          }, 1100);
        } else {
          schedule(() => setCount((c) => c + 1), 900);
        }
      });
      // hold, then reset and loop
      schedule(() => {
        setCount(0);
        t = 0;
        run();
      }, 2600);
    };
    run();

    return () => timers.current.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-accent/10 to-fuchsia-500/5">
      {/* header */}
      <div className="flex items-center gap-2 border-b border-line bg-surface/60 px-4 py-2.5 backdrop-blur">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-fuchsia-500 text-white">
          <Bot className="h-3.5 w-3.5" />
        </span>
        <span className="text-sm font-semibold text-ink">Agentforce</span>
        <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-accent">
          <Sparkles className="h-3 w-3" /> Preview
        </span>
      </div>

      {/* messages */}
      <div className="flex flex-1 flex-col justify-end gap-2.5 p-4">
        {script.slice(0, count).map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <p
              className={`max-w-[85%] animate-fade-up rounded-2xl px-3.5 py-2 text-[12.5px] leading-snug ${
                m.role === "user"
                  ? "rounded-br-sm bg-ink text-canvas"
                  : "rounded-bl-sm border border-line bg-surface text-ink"
              }`}
            >
              {m.text}
            </p>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <span className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-line bg-surface px-3.5 py-2.5">
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-faint"
                  style={{ animationDelay: `${d * 0.15}s` }}
                />
              ))}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
