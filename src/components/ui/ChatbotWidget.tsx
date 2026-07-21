import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  X,
  Send,
  Loader2,
  Sparkles,
  ArrowRight,
  User,
  Cpu
} from 'lucide-react';
import { sendChatMessage, ChatMessage } from '../../lib/chatbotService';

const QUICK_ACTIONS = [
  'I need a website',
  'I want to sell online',
  'I need custom software',
  'I want more leads',
  'I want to automate my business',
  "I'm not sure where to start"
];

export function triggerChatbot() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-chatbot'));
  }
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // Listen to open-chatbot event to allow external CTA buttons to open it
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
    };
    window.addEventListener('open-chatbot', handleOpen);
    return () => {
      window.removeEventListener('open-chatbot', handleOpen);
    };
  }, []);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      text: "Hi! I'm the Pure Path Assistant. Tell me what you're looking to build or improve, and I'll help you find the right path."
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll messages to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;
    setErrorText('');

    // Append user message
    const userMsg: ChatMessage = { sender: 'user', text: textToSend };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await sendChatMessage(textToSend, updatedMessages);
      setMessages((prev) => [...prev, { sender: 'bot', text: response.text }]);
    } catch (err) {
      console.error(err);
      setErrorText('Could not send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <div className="fixed bottom-6 right-6 z-45 flex flex-col items-end">
      
      {/* 1. INTERACTIVE CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="w-[340px] sm:w-[380px] h-[520px] bg-white rounded-[28px] border border-slate-150 shadow-2xl overflow-hidden flex flex-col mb-4 text-left"
          >
            {/* Header */}
            <div className="bg-[#102033] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-primary/20 text-primary flex items-center justify-center border border-primary/25">
                  <Sparkles className="w-4 h-4 text-primary-light" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold tracking-wide uppercase">Pure Path Assistant</h4>
                  <p className="text-[10px] text-primary-light font-bold font-mono">ECOSYSTEM CONNECTED</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close assistant"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Message Thread Panel */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {messages.map((msg, idx) => {
                const isBot = msg.sender === 'bot';
                return (
                  <div
                    key={idx}
                    className={`flex gap-2.5 max-w-[85%] ${isBot ? 'mr-auto text-left' : 'ml-auto flex-row-reverse text-right'}`}
                  >
                    {/* Avatar */}
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold font-mono ${
                      isBot ? 'bg-primary/10 text-primary border border-primary/10' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {isBot ? 'P' : <User className="w-3.5 h-3.5" />}
                    </div>

                    {/* Bubble */}
                    <div className={`p-3 rounded-2xl text-xs sm:text-[13px] leading-relaxed font-semibold ${
                      isBot
                        ? 'bg-white border border-slate-150 text-[#102033]'
                        : 'bg-primary text-white'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex gap-2.5 mr-auto max-w-[85%] items-center">
                  <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/10">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-primary" />
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-slate-150 text-xs text-slate-400 font-bold font-mono">
                    Assistant is typing...
                  </div>
                </div>
              )}

              {errorText && (
                <p className="text-[10px] text-red-500 font-bold text-center">{errorText}</p>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggested Actions Shelf */}
            {messages.length === 1 && (
              <div className="p-3 bg-white border-t border-slate-100/60 max-h-[140px] overflow-y-auto flex flex-wrap gap-1.5 justify-center">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action}
                    onClick={() => handleSendMessage(action)}
                    className="px-3 py-1.5 rounded-lg border border-slate-150 bg-slate-50/40 hover:bg-slate-50 hover:border-primary/25 text-[10px] sm:text-xs font-bold text-[#102033] transition-all cursor-pointer flex items-center gap-1 shrink-0"
                  >
                    {action}
                    <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                  </button>
                ))}
              </div>
            )}

            {/* Input Form Panel */}
            <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-150 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask our digital assistant..."
                className="flex-grow px-3 py-2 border border-slate-150 rounded-xl text-xs font-semibold focus:outline-none focus:border-primary/50 bg-slate-50/30"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="p-2.5 bg-primary hover:bg-primary-dark disabled:opacity-40 text-white rounded-xl transition-all cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. FLOATING SPARKLE TOGGLE BUTTON */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl hover:shadow-2xl cursor-pointer hover:bg-primary-dark transition-all focus:outline-none"
        aria-label="Open digital assistant chat"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </motion.button>

    </div>
  );
}
