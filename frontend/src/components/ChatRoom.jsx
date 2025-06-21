import { useState, useRef, useEffect } from "react";
import "./ChatRoom.css";

const ChatRoom = ({ selectedItem }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Load messages from JSON file
  useEffect(() => {
    const loadMessages = async () => {
      try {
        const response = await fetch("/messages.json");
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Failed to load messages:", error);
        // Set some default messages if loading fails
        setMessages([
          {
            id: 1,
            text: "Hello! Welcome to the chat.",
            sender: "other",
            timestamp: "12:00 PM",
            avatar: "👋",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadMessages();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Math.max(...messages.map((m) => m.id), 0) + 1,
        text: message,
        sender: "me",
        timestamp: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        status: "sent",
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!selectedItem) {
    return (
      <div className="chat-room empty-chat">
        <div className="app-logo">LIHO</div>
        <p>Select a chat to start messaging</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="chat-room empty-chat">
        <div className="app-logo">LIHO</div>
        <p>Loading messages...</p>
      </div>
    );
  }

  return (
    <div className="chat-room">
      {/* Chat Header */}
      <div className="chat-room-header">
        <div className="chat-room-info">
          <div className="chat-room-avatar">{selectedItem.avatar || "👤"}</div>
          <div className="chat-room-details">
            <h3 className="chat-room-name">{selectedItem.name}</h3>
            <div className="chat-room-status">
              {selectedItem.members
                ? `${selectedItem.members} members`
                : selectedItem.status || "Online"}
            </div>
          </div>
        </div>
        <div className="chat-room-actions">
          <button className="action-btn" title="Search">
            <span className="material-icons">search</span>
          </button>
          <button className="action-btn" title="Voice Call">
            <span className="material-icons">call</span>
          </button>
          <button className="action-btn" title="Video Call">
            <span className="material-icons">videocam</span>
          </button>
          <button className="action-btn" title="More Options">
            <span className="material-icons">more_vert</span>
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="chat-messages-container">
        <div className="chat-messages-list">
          {/* Date separator */}
          <div className="date-separator">
            <span>June 13, Friday</span>
          </div>

          {messages.map((msg, index) => (
            <div key={msg.id}>
              {/* Check if we need to show a new date */}
              {index === 7 && (
                <div className="date-separator">
                  <span>June 14, Saturday</span>
                </div>
              )}

              <div
                className={`message ${
                  msg.sender === "me" ? "message-me" : "message-other"
                }`}
              >
                {msg.sender === "other" && (
                  <div className="message-avatar">
                    {msg.avatar || selectedItem.avatar || "👤"}
                  </div>
                )}
                <div className="message-content">
                  <div className="message-bubble">
                    <div className="message-text">{msg.text}</div>
                  </div>
                  <div className="message-info">
                    <span className="message-time">{msg.timestamp}</span>
                    {msg.sender === "me" && msg.status && (
                      <span className={`message-status ${msg.status}`}>
                        {msg.status === "sent" && "✓"}
                        {msg.status === "delivered" && "✓✓"}
                        {msg.status === "read" && "Read"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input */}
      <div className="chat-input-container">
        <div className="chat-input-wrapper">
          <button className="input-action-btn" title="Attach File">
            <span className="material-icons">attach_file</span>
          </button>
          <button className="input-action-btn" title="Image">
            <span className="material-icons">image</span>
          </button>
          <button className="input-action-btn" title="Camera">
            <span className="material-icons">camera_alt</span>
          </button>

          <div className="message-input-wrapper">
            <textarea
              ref={inputRef}
              className="message-input"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              rows="1"
            />
            <button className="input-action-btn emoji-btn" title="Emoji">
              <span className="material-icons">sentiment_satisfied</span>
            </button>
          </div>

          <button
            className="send-btn"
            onClick={handleSendMessage}
            disabled={!message.trim()}
            title="Send"
          >
            <span className="material-icons">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
