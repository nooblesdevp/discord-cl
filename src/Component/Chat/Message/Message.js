import { Avatar } from "@material-ui/core";
import React from "react";

import "./Message.scss";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          ian
          <span className="message__timestamp">
            tthis is a message__timestamp
          </span>
        </h4>
        <p>This is a message </p>
      </div>
    </div>
  );
}

export default Message;
