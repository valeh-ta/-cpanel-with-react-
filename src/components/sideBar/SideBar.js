import React from "react";
import "./sidebar.css";

import {
  LineStyle,
  Timeline,
  Work,
  TrendingUp,
  Message,
  Report,
  DynamicFeed,
  PersonOutline,
  MailOutline,
  ShoppingBasket,
  AttachMoney,
  Assessment,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrap">
        <div className="sidebarMenu">
          <h3 className="sidebarTitel">Dashbord</h3>
          <ul className="sidebarList">
            <Link to={"/"} className="Link">
              <li className="sidebarListItem">
                <LineStyle className="sidebaricon" />
                Home
              </li>
            </Link>

            <li className="sidebarListItem">
              <Timeline className="sidebaricon" />
              Analytics
            </li>

            <li className="sidebarListItem">
              <TrendingUp className="sidebaricon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitel">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to={"/users"} className="Link">
              <li className="sidebarListItem active">
                <PersonOutline className="sidebaricon" />
                Users
              </li>
            </Link>
            <Link to={"/products"} className="Link">
              <li className="sidebarListItem">
                <ShoppingBasket className="sidebaricon" />
                Products
              </li>
            </Link>

            <li className="sidebarListItem">
              <AttachMoney className="sidebaricon" />
              transactins
            </li>
            <li className="sidebarListItem">
              <Assessment className="sidebaricon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitel">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MailOutline className="sidebaricon" />
              Mail
            </li>

            <li className="sidebarListItem">
              <DynamicFeed className="sidebaricon" />
              Feedback
            </li>

            <li className="sidebarListItem">
              <Message className="sidebaricon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitel">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Work className="sidebaricon" />
              Manage
            </li>

            <li className="sidebarListItem">
              <Timeline className="sidebaricon" />
              Analytics
            </li>

            <li className="sidebarListItem">
              <Report className="sidebaricon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
