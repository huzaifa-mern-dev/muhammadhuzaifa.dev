'use client';

import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Role = 'user' | 'bot';

interface Message {
  id: string;
  role: Role;
  text: string;
  ts: string;
}

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part.split('\n').map((line, j, arr) => (
      <span key={`${i}-${j}`}>
        {line}
        {j < arr.length - 1 && <br />}
      </span>
    ));
  });
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3 rounded-2xl rounded-bl-sm bg-gray-100 dark:bg-[#1e1e27] w-fit max-w-[80px]">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-[#636366] animate-bounce"
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: '0.9s' }}
        />
      ))}
    </div>
  );
}

function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === 'user';
  return (
    <div className={`flex items-end gap-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <div
        className={[
          'flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-0.5',
          isUser
            ? 'bg-[#62a92b] dark:bg-[#62a92b] text-white dark:text-[#1e1e27]'
            : 'bg-gray-200 dark:bg-[#2a2a31] text-gray-600 dark:text-[#8f8f92]',
        ].join(' ')}
        aria-hidden="true"
      >
        {isUser ? 'U' : 'H'}
      </div>

      <div
        className={[
          'max-w-[78%] px-4 py-2.5 rounded-2xl text-sm font-sans leading-relaxed break-words',
          isUser
            ? 'bg-[#62a92b] dark:bg-[#62a92b] text-white dark:text-[#1e1e27] rounded-br-sm'
            : 'bg-gray-100 dark:bg-[#1e1e27] text-gray-800 dark:text-[#c5c5ca] rounded-bl-sm border border-gray-200/50 dark:border-white/[0.05]',
        ].join(' ')}
      >
        {renderText(msg.text)}
        <span className="block text-[9px] mt-1 opacity-50 text-right">
          {new Date(msg.ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}

const GREETING: Message = {
  id: 'greeting',
  role: 'bot',
  text: "Hi! 👋 I'm **Huzaifa**. Ask me anything about my skills, projects, or how I can help with your next project!",
  ts: new Date().toISOString(),
};

export default function ChatWidget() {
  const [isOpen,    setIsOpen]    = useState(false);
  const [messages,  setMessages]  = useState<Message[]>([GREETING]);
  const [input,     setInput]     = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error,     setError]     = useState<string | null>(null);

  const bottomRef  = useRef<HTMLDivElement>(null);
  const inputRef   = useRef<HTMLInputElement>(null);
  const abortRef   = useRef<AbortController | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    setInput('');
    setError(null);

    const userMsg: Message = { id: uid(), role: 'user', text, ts: new Date().toISOString() };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
        signal: ctrl.signal,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? `Server error ${res.status}`);
      }

      const botMsg: Message = {
        id: uid(),
        role: 'bot',
        text: data.reply ?? "Sorry, I couldn't generate a response. Please try again!",
        ts: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') return;

      const errMsg: Message = {
        id: uid(),
        role: 'bot',
        text: '⚠️ Something went wrong. Please try again in a moment!',
        ts: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errMsg]);
      setError(err instanceof Error ? err.message : 'Unknown error');
      console.error('[ChatWidget]', err);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    abortRef.current?.abort();
    setMessages([GREETING]);
    setIsLoading(false);
    setError(null);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{   opacity: 0, y: 20,  scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-24 right-4 sm:right-6 z-[1000] w-[calc(100vw-2rem)] max-w-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Chat with Huzaifa AI assistant"
          >
            <div className="flex flex-col rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-gray-200/70 dark:border-white/[0.08] bg-white dark:bg-[#1a1a22]">

              <div className="flex items-center justify-between px-4 py-3.5 bg-gradient-to-r from-[#62a92b] to-[#4e8a1e] dark:from-[#62a92b] dark:to-[#72d62a]">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white dark:text-[#1a1a22] font-bold text-sm">
                      H
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-white dark:bg-[#1a1a22] border-2 border-[#4e8a1e] dark:border-[#72d62a]" />
                  </div>
                  <div>
                    <p className="text-white dark:text-[#1a1a22] font-sans font-semibold text-sm leading-none">
                      Huzaifa AI
                    </p>
                    <p className="text-white/70 dark:text-[#1a1a22]/70 text-[10px] font-mono mt-0.5">
                      Online · Usually replies instantly
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={clearChat}
                    className="p-1.5 rounded-lg text-white/70 dark:text-[#1a1a22]/70 hover:text-white dark:hover:text-[#1a1a22] hover:bg-white/10 transition-colors"
                    aria-label="Clear chat history"
                    title="Clear chat"
                  >
                    <i className="ri-delete-bin-line text-sm" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg text-white/70 dark:text-[#1a1a22]/70 hover:text-white dark:hover:text-[#1a1a22] hover:bg-white/10 transition-colors"
                    aria-label="Close chat"
                  >
                    <i className="ri-close-line text-sm" />
                  </button>
                </div>
              </div>

              <div
                className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 max-h-80 scroll-smooth"
                role="log"
                aria-live="polite"
                aria-label="Chat messages"
              >
                {messages.map((msg) => (
                  <MessageBubble key={msg.id} msg={msg} />
                ))}

                {isLoading && (
                  <div className="flex items-end gap-2 flex-row">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-gray-200 dark:bg-[#2a2a31] text-gray-600 dark:text-[#8f8f92]" aria-hidden="true">H</div>
                    <TypingIndicator />
                  </div>
                )}

                {error && (
                  <p className="text-[10px] font-mono text-center text-red-400 dark:text-red-500 px-2">
                    {error}
                  </p>
                )}

                <div ref={bottomRef} aria-hidden="true" />
              </div>

              {messages.length === 1 && !isLoading && (
                <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                  {[
                    'What services do you offer?',
                    'Show me your projects',
                    'What are your rates?',
                  ].map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => {
                        setInput(prompt);
                        setTimeout(async () => {
                          setInput('');
                          setIsLoading(true);
                          const userMsg: Message = { id: uid(), role: 'user', text: prompt, ts: new Date().toISOString() };
                          setMessages((prev) => [...prev, userMsg]);

                          try {
                            const res = await fetch('/api/chat', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ message: prompt }),
                            });
                            const data = await res.json();
                            setMessages((prev) => [
                              ...prev,
                              { id: uid(), role: 'bot', text: data.reply ?? 'No response.', ts: new Date().toISOString() },
                            ]);
                          } catch {
                            setMessages((prev) => [
                              ...prev,
                              { id: uid(), role: 'bot', text: '⚠️ Something went wrong.', ts: new Date().toISOString() },
                            ]);
                          } finally {
                            setIsLoading(false);
                          }
                        }, 0);
                      }}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-[#272730] text-gray-500 dark:text-[#8f8f92] border border-gray-200 dark:border-white/[0.07] hover:border-[#62a92b]/50 dark:hover:border-[#62a92b]/50 hover:text-[#62a92b] dark:hover:text-[#62a92b] transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              <div className="px-3 pb-3 pt-2 border-t border-gray-100 dark:border-white/[0.05]">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-[#272730] border border-gray-200 dark:border-white/[0.08] focus-within:border-[#62a92b] dark:focus-within:border-[#62a92b] focus-within:ring-2 focus-within:ring-[#62a92b]/20 dark:focus-within:ring-[#62a92b]/20 transition-all duration-200">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything…"
                    disabled={isLoading}
                    aria-label="Type your message"
                    className="flex-1 bg-transparent outline-none text-sm font-sans text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#4a4a52] disabled:cursor-not-allowed"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={isLoading || !input.trim()}
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center bg-[#62a92b] dark:bg-[#62a92b] text-white dark:text-[#1a1a22] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#4e8a1e] dark:hover:bg-[#8ed63e] transition-colors"
                    aria-label="Send message"
                  >
                    {isLoading ? (
                      <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
                      </svg>
                    ) : (
                      <i className="ri-send-plane-fill text-xs" />
                    )}
                  </button>
                </div>
                <p className="text-[9px] font-mono text-center text-gray-300 dark:text-[#3b3b41] mt-1.5">
                  Powered by Gemini · Huzaifa.dev
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen((v) => !v)}
        className={[
          'fixed bottom-6 right-20 z-[1000] w-12 h-12 rounded-full',
          'flex items-center justify-center',
          'bg-[#62a92b] dark:bg-[#62a92b]',
          'text-white dark:text-[#1a1a22]',
          'shadow-[0_4px_20px_rgba(98,169,43,0.5)] dark:shadow-[0_4px_20px_rgba(168,255,83,0.4)]',
          'hover:scale-110 active:scale-95 transition-transform duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#62a92b] dark:focus-visible:ring-[#62a92b] focus-visible:ring-offset-2',
        ].join(' ')}
        aria-label={isOpen ? 'Close AI chat' : 'Open AI chat with Huzaifa'}
        aria-expanded={isOpen}
        aria-controls="chat-window"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0,   opacity: 1 }}
            exit={{   rotate: 90,  opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className={isOpen ? 'ri-close-line text-lg' : 'ri-robot-line text-lg'} />
          </motion.span>
        </AnimatePresence>

        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-white dark:bg-[#272730] flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#62a92b] dark:bg-[#62a92b] animate-pulse" />
          </span>
        )}
      </button>
    </>
  );
}
