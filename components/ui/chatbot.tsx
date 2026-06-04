"use client";
import React, { useState } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! How can we help you grow your business?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages([...messages, { text: input, isBot: false }]);
    setInput("");

    // Simulate bot thinking then redirect to WhatsApp
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thanks! Connecting you to our team on WhatsApp...", 
        isBot: true 
      }]);
      
      setTimeout(() => {
        // Redirect to WhatsApp
        window.open(`https://wa.me/917795354043?text=${encodeURIComponent(input)}`, '_blank');
      }, 1000);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all z-[90] ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M12 8V4H8"/>
          <rect width="16" height="12" x="4" y="8" rx="2"/>
          <path d="M2 14h2"/>
          <path d="M20 14h2"/>
          <path d="M15 13v2"/>
          <path d="M9 13v2"/>
        </svg>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-8 right-8 w-80 bg-white rounded-2xl shadow-2xl transition-all duration-300 z-[90] flex flex-col overflow-hidden origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        {/* Header */}
        <div className="bg-green-500 p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="font-semibold">21TechGlory Support</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="h-64 p-4 overflow-y-auto flex flex-col gap-3 bg-gray-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`max-w-[80%] rounded-xl p-3 text-sm ${msg.isBot ? 'bg-gray-200 text-gray-800 self-start rounded-tl-none' : 'bg-green-500 text-white self-end rounded-tr-none'}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 border-t bg-white flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 text-sm border rounded-full px-4 py-2 focus:outline-none focus:border-green-500 text-gray-900"
          />
          <button 
            onClick={handleSend}
            className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
