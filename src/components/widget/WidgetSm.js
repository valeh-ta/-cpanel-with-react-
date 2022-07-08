import { Visibility } from "@material-ui/icons";
import React from "react";
import "./widget.css";
import sara from "../../img/1.jpg";
function WidgetSm() {
  return (
    <div className="WidgetSm">
      <span className="w-title">New Join User</span>
      <ul className="w-List">
        <li className="w-ListItem">
          <img src={sara} alt="profile" />
          <div className="w-usre">
            <span className="w-userName">valeh ta</span>
            <span className="w-userTitle">Software Engineer</span>
          </div>
          <button className="w-button">
            <Visibility className="w-smIcon" />
            Display
          </button>
        </li>

        <li className="w-ListItem">
          <img src={sara} alt="profile" />
          <div className="w-usre">
            <span className="w-userName">valeh ta</span>
            <span className="w-userTitle">Software Engineer</span>
          </div>
          <button className="w-button">
            <Visibility className="w-smIcon" />
            Display
          </button>
        </li>

        <li className="w-ListItem">
          <img src={sara} alt="profile" />
          <div className="w-usre">
            <span className="w-userName">valeh ta</span>
            <span className="w-userTitle">Software Engineer</span>
          </div>
          <button className="w-button">
            <Visibility className="w-smIcon" />
            Display
          </button>
        </li>

        <li className="w-ListItem">
          <img src={sara} alt="profile" />
          <div className="w-usre">
            <span className="w-userName">valeh ta</span>
            <span className="w-userTitle">Software Engineer</span>
          </div>
          <button className="w-button">
            <Visibility className="w-smIcon" />
            Display
          </button>
        </li>

        <li className="w-ListItem">
          <img src={sara} alt="profile" />
          <div className="w-usre">
            <span className="w-userName">valeh ta</span>
            <span className="w-userTitle">Software Engineer</span>
          </div>
          <button className="w-button">
            <Visibility className="w-smIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
