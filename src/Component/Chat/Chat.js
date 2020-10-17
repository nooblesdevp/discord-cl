import React, { useState } from "react";
import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@material-ui/icons";

import "./Chat.scss";
import ChatHeader from "./ChatHeader/ChatHeader";
import Message from "./Message/Message";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { selectChannelId, selectChannelName } from "../../features/appSlice";
import { useEffect } from "react";
import db from "../../firebase/firebase";
import firebase from "firebase";

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId)
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((shapshot) =>
          setMessages(shapshot.docs.map((doc) => doc.data()))
        );
  }, [channelId]);

  //function send message
  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>

      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!channelId}
            type="text"
            placeholder={` Message # ${channelName}`}
          />
          <button disabled={!channelId} onClick={sendMessage} type="submit">
            Send Message
          </button>
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
