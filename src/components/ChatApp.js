import React, { useState } from 'react';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newChat = {
        user: randomUser,
        message: newMessage
      };
      setMessages([...messages, newChat]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-app">
      <div className="conversation-list">
        <div className="conversation">Group Chat</div>
      </div>
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.user === "You" ? "sent" : "received"}`}>
              <div className="message-details">
                <div className="user-icon">
                  <div className="circular-icon">{message.user[0]}</div>
                </div>
                <div className="message-content">
                  <div className="user">{message.user}</div>
                  <div className="message-text">{message.message}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
