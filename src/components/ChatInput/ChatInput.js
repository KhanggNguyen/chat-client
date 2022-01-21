import React from "react";

import './ChatInput.css';

export const ChatInput = ({ message, sendMessage, setMessage }) => {
  return (
    <form className="chat-form">
      <input
        className="input"
        type="text"
        placeholder="Type a message ..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />

      <button className="sendButton" onClick={(event) => sendMessage(event) }>Send</button>
    </form>
  );
};
