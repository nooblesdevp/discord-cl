import React from "react";
import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@material-ui/icons";

import "./Chat.scss";
import ChatHeader from "./ChatHeader/ChatHeader";
import Message from "./Message/Message";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages">
        <Message />
      </div>

      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form action="">
          <input type="text" placeholder={`Message #TESTCHANNEL`} />
          <button type="submit">Send Message</button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
