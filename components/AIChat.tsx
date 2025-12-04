import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: 'שלום! אני הבוט של OpenDefense-AI. אפשר לשאול אותי כל דבר לגבי הכנס.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(input);
      const botMessage: Message = { id: (Date.now() + 1).toString(), sender: 'bot', text: responseText };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-blue-700 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-white">
              <Bot size={20} />
              <span className="font-bold">עוזר אישי - OpenDefense</span>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-gray-200 transition">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 h-80 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.sender === 'user'
                      ? 'bg-slate-700 text-white rounded-br-none'
                      : 'bg-primary/20 text-blue-100 border border-primary/30 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-primary/20 text-blue-100 p-3 rounded-lg rounded-bl-none flex items-center gap-2">
                  <Loader2 className="animate-spin" size={16} />
                  <span>מקליד...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="שאל אותי על הכנס..."
              className="flex-1 bg-slate-900 text-white text-sm rounded-md px-3 py-2 border border-slate-700 focus:outline-none focus:border-primary placeholder-slate-500"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-primary hover:bg-blue-600 text-white p-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={toggleChat}
        className={`${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} transition-all duration-300 bg-primary hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-primary/50 flex items-center gap-2`}
      >
        <MessageSquare size={24} />
        <span className="font-bold hidden sm:inline">יש לך שאלה?</span>
      </button>
    </div>
  );
};

export default AIChat;
