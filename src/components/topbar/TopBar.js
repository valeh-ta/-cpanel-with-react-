import React from "react";
import "./topbar.css";
import profile from "../../img/2.jpg";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Cpanel Valeh_ta</span>
        </div>
        <div className="topRight">
          <div className="topbarIcon">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIcon">
            <Language />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topbarIcon">
            <Settings />
          </div>
          <img src={profile} alt="profile" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
