import { Avatar } from "@material-ui/core";
import {
  Add,
  Call,
  ExpandMore,
  Headset,
  InfoOutlined,
  Mic,
  Settings,
  SignalCellularAlt,
} from "@material-ui/icons";
import React from "react";

import "./Sidebar.scss";
import SidebarChannel from "./SidebarChannel/SidebarChannel";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>NUZUL ZEN ALFIAN</h3>
        <ExpandMore />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMore />
            <h4>Text Channel</h4>
          </div>
          <Add className="sidebar__addChannel" />
        </div>

        <div className="sidebar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAlt className="sidebar__voiceIcon" fontSize="large" />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlined />
          <Call />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar />
        <div className="sidebar__profileInfo">
          <h3>nuzulzen </h3>
          <p>thisIsMyId</p>
        </div>
        <div className="sidebar__profileInfoIcons">
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
