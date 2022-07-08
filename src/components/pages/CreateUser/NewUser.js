import React from "react";
import "./user.css";
function NewUser() {
  return (
    <div className="new-user">
      <h1 className="n-u-title">New User</h1>
      <form className="n-u-form">
        <div className="n-u-item">
          <label>UserName</label>
          <input type="text" placeholder="UserName" />
        </div>
        <div className="n-u-item">
          <label>Full Name</label>
          <input type="text" placeholder="full name" />
        </div>
        <div className="n-u-item">
          <label>Email</label>
          <input type="text" placeholder="email" />
        </div>
        <div className="n-u-item">
          <label>Password</label>
          <input type="text" placeholder="password" />
        </div>
        <div className="n-u-item">
          <label>Phone</label>
          <input type="text" placeholder="phone" />
        </div>
        <div className="n-u-item">
          <label>Address</label>
          <input type="text" placeholder="address" />
        </div>
        <div className="n-u-item">
          <label>Gender</label>
          <div className="n-u-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="fmale" value="fmale" />
            <label for="fmale">Fmale</label>
          </div>
        </div>
        <div className="n-u-item">
          <label>Active</label>
          <select name="active" id="active" className="n-u-selectActive">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
      <button className="newUserBtn">Create</button>
    </div>
  );
}

export default NewUser;
