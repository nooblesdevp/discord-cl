import { Avatar } from "@material-ui/core";
import React from "react";

import "./Message.scss";

function Message({ timestamp, message, user }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " .." : str;
  }

  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message__info">
        <h4>
          {user.displayName}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{truncate(message, 200)} </p>
      </div>
    </div>
  );
}

export default Message;
