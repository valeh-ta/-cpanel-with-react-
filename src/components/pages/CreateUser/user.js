import React from "react";
import "./user.css";
import sara from "../../../img/1.jpg";
import maryam from "../../../img/2.jpg";

import { Link } from "react-router-dom";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
function User() {
  return (
    <div className="user">
      <div className=" U-titlecontainer">
        <h1 className="U-title-h1">Edit User</h1>
        <Link to="/newuser">
          <button className="U-add">Create</button>
        </Link>
      </div>
      <div className="U-container">
        <div className="u-show">
          <div className="U-showtop">
            <img src={sara} alt="img" className="U-showImg" />
            <div className="U-showTopTitle">
              <span className="U-showUserName">sara ahmadi</span>
              <span className="U-showUserbio">software Engineer</span>
            </div>
          </div>
          <div className="U-showButton">
            <span className="u-show-title">Account Details </span>
            <div className="u-show-Info">
              <PermIdentity className="u-show-icon" />
              <span className="u-show-info-title">saraahmadi99</span>
            </div>
            <div className="u-show-Info">
              <CalendarToday className="u-show-icon" />
              <span className="u-show-info-title">10.6.1995</span>
            </div>
            <span className="u-show-title">Contact Details </span>

            <div className="u-show-Info">
              <PhoneAndroid className="u-show-icon" />
              <span className="u-show-info-title">+1 565662626</span>
            </div>
            <div className="u-show-Info">
              <MailOutline className="u-show-icon" />
              <span className="u-show-info-title">valeh245@yahoo.com</span>
            </div>
            <div className="u-show-Info">
              <LocationSearching className="u-show-icon" />
              <span className="u-show-info-title">Tabriz | manzarye</span>
            </div>
          </div>
        </div>

        <div className="u-update">
          <span className="U-Update-Title">Edit</span>
          <form className="U-Update-form">
            <div className="U-Update-left">
              <div className="U-Update-item">
                <label>UserName</label>
                <input
                  type="text"
                  placeholder="saraahmadi99"
                  className="U-Update-input"
                />
              </div>
              <div className="U-Update-item">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="sara ahmadi"
                  className="U-Update-input"
                />
              </div>
              <div className="U-Update-item">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="valeh245@yahoo.com"
                  className="U-Update-input"
                />
              </div>
              <div className="U-Update-item">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 565662626"
                  className="U-Update-input"
                />
              </div>
              <div className="U-Update-item">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Tabriz | manzarye"
                  className="U-Update-input"
                />
              </div>
            </div>
            <div className="U-Update-right">
              <div className="U-Update-upload">
                <img src={maryam} alt="maryam" className="U-Update-img" />
                <label htmlFor="file">
                  <Publish className="U-Update-icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="U-Update-button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
