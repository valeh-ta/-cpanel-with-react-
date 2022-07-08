import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../chart/Chart";
import { productData } from "../../../data";

import BMW from "../../../img/5.jpg";
import { Publish } from "@material-ui/icons";

function Product() {
  return (
    <div className="product">
      <div className=" p-titlecontainer">
        <h1 className="p-title-h1"> Product</h1>
        <Link to="/newproduct">
          <button className="p-add-btn">Create</button>
        </Link>
      </div>
      <div className="p-top">
        <div className="p-top-left">
          <Chart data={productData} dataKey="sales" title="sales performance" />
        </div>
        <div className="p-top-right">
          <div className="p-info-top">
            <img src={BMW} alt="BMW" className="p-topinfo-img" />
            <span className="p-topinfo-name">BMW</span>
          </div>
          <div className="p-infoBottom">
            <div className="p-info-item">
              <span className="p-info-key">id: </span>
              <span className="p-info-Value">123</span>
            </div>
            <div className="p-info-item">
              <span className="p-info-key">sales: </span>
              <span className="p-info-Value">123</span>
            </div>
            <div className="p-info-item">
              <span className="p-info-key">in stock: </span>
              <span className="p-info-Value">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-Bottom">
        <form className="p-form">
          <div className="p-form-left">
            <label>Product Name</label>
            <input type="text" placeholder="BMW" />
            <label>In stock</label>
            <select name="instock" id="instock">
              <option value="yes">yes</option>
              <option value="No">No</option>
            </select>
            <label>Active</label>
            <select name="Active" id="Active">
              <option value="yes">yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="p-form-right">
            <div className="p-upload">
              <img src={BMW} alt="BMW" className="p-upload-img" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="p-btn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
