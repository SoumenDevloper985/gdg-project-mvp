import React, { useState } from 'react';
import './ChatInterface.css';

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { user: 'You', text: input }]);
    // Simulate a bot response
    setMessages(prev => [...prev, { user: 'GenAI', text: 'Thanks for your question. Our expert is reviewing it!' }]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.user === 'You' ? 'user' : 'bot'}`}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input 
          type="text"
          placeholder="Type your investment question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatInterface;
