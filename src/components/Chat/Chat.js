import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import "./Chat.css";
import { useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import { ChatInput } from "../ChatInput/ChatInput";
import { Messages } from "../Messages/Messages";


const ENDPOINT = "https://chat-server-u0gl.onrender.com/";
//const ENDPOINT = 'localhost:8000/';

const socket = io.connect(ENDPOINT);

export const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {

    setName(query.get("name"));
    setRoom(query.get("room"));
    if(name && room){
      socket.emit("join", { name: name, room: room }, (error) => {
        if(error) alert(error);
      });
    }
  
    
  }, [socket, name, room]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <Header room={room} users={users} />
        <Messages messages={messages} name={name} />
        <ChatInput
          setMessage={setMessage}
          sendMessage={sendMessage}
          message={message}
        />
      </div>
    </div>
  );
};

export default Chat;
