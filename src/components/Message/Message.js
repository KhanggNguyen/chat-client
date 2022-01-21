import React from "react";

import "./Message.css";

export const Message = ({ message: { text, user }, name }) => {
  let isSendByCurrentUser = false;

  const trimmedname = name.trim().toLowerCase();

  if (user === trimmedname) isSendByCurrentUser = true;

  return isSendByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sendText pr-10">{trimmedname}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText textColor">{text}</p>
      </div>
      <p className="sendText pl-10">{user}</p>
    </div>
  );
};
