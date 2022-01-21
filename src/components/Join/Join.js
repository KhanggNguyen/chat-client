import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="JoinContainer">
      <div className="JoinContent">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Your name"
            className="join-input"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room name"
            className="join-input mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Join chat
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
