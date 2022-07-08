import React from "react";
import "./NewProduct.css";
function NewProduct() {
  return (
    <div className="NewProduct">
      <h1 className="add-p-title">New Product </h1>
      <form className="add-p-form">
        <div className="add-p-item">
          <label>image</label>
          <input type="file" id="file" />
        </div>
        <div className="add-p-item">
          <label> Name</label>
          <input type="text" placeholder=" bmw" />
        </div>
        <div className="add-p-item">
          <label>stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="add-p-item">
          <label>Active</label>

          <select name="Active" id="Active">
            <option value="yes">yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <button className="new-p-Btn">Create</button>
      </form>
    </div>
  );
}

export default NewProduct;
