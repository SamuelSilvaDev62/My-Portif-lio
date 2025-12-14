import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { MessageSquare, X, Send, Cpu, Loader2 } from 'lucide-react';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Sistema AURA online. Como posso auxiliar na navegação do portfólio?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-cyber-black border border-cyber-cyan text-cyber-cyan rounded-full shadow-[0_0_15px_rgba(0,243,255,0.5)] hover:bg-cyber-gray transition-all duration-300 hover:scale-110 group ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Abrir Chat IA"
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-cyber-cyan opacity-20"></div>
        <Cpu className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-cyber-black/95 backdrop-blur-md border border-cyber-cyan rounded-lg flex flex-col shadow-[0_0_30px_rgba(0,243,255,0.3)] overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-cyber-gray bg-cyber-dark/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
              <span className="font-display font-bold text-cyber-cyan tracking-wider">AURA v2.5</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-cyber-cyan hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm custom-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg border ${
                    msg.role === 'user'
                      ? 'bg-cyber-gray border-cyber-purple text-cyber-purple rounded-br-none'
                      : 'bg-cyber-dark border-cyber-cyan text-cyber-cyan rounded-bl-none shadow-[0_0_10px_rgba(0,243,255,0.1)]'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="text-[10px] opacity-50 block mt-1 text-right">
                    {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-cyber-dark border border-cyber-cyan p-3 rounded-lg rounded-bl-none flex items-center gap-2 text-cyber-cyan">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-xs">Processando dados...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-cyber-gray bg-cyber-dark/80">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Digite o comando..."
                className="flex-1 bg-cyber-black border border-cyber-gray rounded p-2 text-cyber-cyan placeholder-gray-600 focus:outline-none focus:border-cyber-cyan font-mono text-sm"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-cyber-cyan/10 border border-cyber-cyan text-cyber-cyan p-2 rounded hover:bg-cyber-cyan hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};